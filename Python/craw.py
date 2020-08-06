import re
from collections import deque
from urllib.parse import urljoin

import requests

LI_A_PATTERN = re.compile(r'<li class="item">.*?</li>')
A_TEXT_PATTERN = re.compile(r'<a\s+[^>]*?>(.*?)</a>')
A_HREF_PATTERN = re.compile(r'<a\s+[^>]*?href="(.*?)"\s*[^>]*?>')


def decode_page(page_bytes, charsets):
    """通过指定的字符集对页面进行解码"""
    for charset in charsets:
        try:
            return page_bytes.decode(charset)
        except UnicodeDecodeError:
            pass


def get_matched_parts(content_string, pattern):
    """从字符串中提取所有跟正则表达式匹配的内容"""
    return pattern.findall(content_string, re.I) \
        if content_string else []


def get_matched_part(content_string, pattern, group_no=1):
    """从字符串中提取跟正则表达式匹配的内容"""
    match = pattern.search(content_string)
    if match:
        return match.group(group_no)


def get_page_html(seed_url, *, charsets=('utf-8', )):
    """获取页面的HTML代码"""
    resp = requests.get(seed_url)
    if resp.status_code == 200:
        return decode_page(resp.content, charsets)


def repair_incorrect_href(current_url):
    """修正获取的href属性"""
    href = current_url
    if href.startswith('//'):
        href = urljoin('http://', href)
    elif href.startswith('/'):
        href = urljoin(current_url, href)
    return href if href.startswith('http') else ''


def start_crawl(seed_url, pattern, *, max_depth=-1):
    """开始爬取数据"""
    new_urls, visited_urls = deque(), set()
    new_urls.append((seed_url, 0))
    while new_urls:
        current_url, depth = new_urls.popleft()
        if depth != max_depth:
            # 获取解码之后的html代码
            page_html = get_page_html(current_url, charsets=('utf-8', 'gbk'))
            # print(type(page_html))
            # 用正则匹配出需要要的html字符串
            contents = get_matched_parts(page_html, pattern)
            # print(contents)
            for content in contents:
                text = get_matched_part(content, A_TEXT_PATTERN)
                href = get_matched_part(content, A_HREF_PATTERN)
                print(text, href)
                if href:
                    href = repair_incorrect_href(href)
                print(text, href)
                if href and href not in visited_urls:
                    new_urls.append((href, depth + 1))


def main():
    """主函数"""
    start_crawl(
        seed_url='http://sports.sohu.com/nba_a.shtml',
        pattern=LI_A_PATTERN,
        max_depth=2
    )


if __name__ == '__main__':
    main()

    