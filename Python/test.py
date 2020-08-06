from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


def main():
    driver = webdriver.Chrome('./extend/chromedriver')
    driver.get('https://www.baidu.com/')
    soup = BeautifulSoup(driver.page_source, 'lxml')
    for img_tag in soup.body.select('img[src]'):
        print(img_tag.attrs['src'])

if __name__ == '__main__':
    main()
