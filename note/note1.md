## 生成目录树

### DOS 下面的命令

当你在当前目录下使用tree /F或者tree /a 这两个命令时,你会发现,它会把所有文件目录结构都给你打印出来 使用tree /f,如下所示:

tree /f > 指定输出的文件(一般为txt格式或者readme文档)

tree /f > list.txt


## 参考： https://github.com/yangshun/tree-node-cli

```
$ tree -h

  Usage: tree [options]

  Options:

    -V, --version             output the version number
    -a, --all-files           All files, include hidden files, are printed.
    --dirs-first              List directories before files.
    -d, --dirs-only           List directories only.
    -I, --exclude [patterns]  Exclude files that match the pattern. | separates alternate patterns. Wrap your entire pattern in double quotes. E.g. `"node_modules|coverage".
    -L, --max-depth <n>       Max display depth of the directory tree.
    -r, --reverse             Sort the output in reverse alphabetic order.
    -F, --trailing-slash      Append a '/' for directories.
    -h, --help                output usage information
```

<!-- 利用python 进行登录微信 -->
https://github.com/jackfrued/Python-100-Days/blob/master/%E5%85%AC%E5%BC%80%E8%AF%BE/%E6%96%87%E6%A1%A3/%E7%AC%AC04%E6%AC%A1%E5%85%AC%E5%BC%80%E8%AF%BE-%E5%A5%BD%E7%8E%A9%E7%9A%84Python/%E5%A5%BD%E7%8E%A9%E7%9A%84Python.md





<!-- Message: 'chromedriver' executable needs to be in PATH. Please see https://sites.google.com/a/chromium.org/chromedriver/home -->

参考:
https://www.selenium.dev/documentation/en/webdriver/web_element/
https://sites.google.com/a/chromium.org/chromedriver/downloads
https://selenium-python-zh.readthedocs.io

1. 直接爬取页面
2. 爬取接口
3. selenium 爬取页面

driver.get 方法将打开URL中填写的地址，WebDriver 将等待， 直到页面完全加载完毕（其实是等到”onload” 方法执行完毕），然后返回继续执行你的脚本。 值得注意的是，如果你的页面使用了大量的Ajax加载， WebDriver可能不知道什么时候页面已经完全加载:

```
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

def main():
    driver = webdriver.Chrome('./extend/chromedriver')
    driver.get('https://v.taobao.com/v/content/live?catetype=704&from=taonvlang')
    soup = BeautifulSoup(driver.page_source, 'lxml')
    for img_tag in soup.body.select('img[src]'):
        print(img_tag.attrs['src'])

if __name__ == '__main__':
    main()
```


出现Read timed out这个错误。经查是由于python在安装三方库时设置的时间限制。
1. 
```
一般我们使用的命令为：
pip install XXXX（XXXX为你即将要安装的三方库）
此时可能会出现以下错误：
Read timed out
这是的解决办法为：
pip –default-timeout=100 install -U XXXX即可完成安装;
```

2. 使用国内源即可: 详细参考： https://cloud.tencent.com/developer/article/1520882
```
一般情况下PIP出现ReadTimeoutError都是因为被GFW给墙了，所以一般遇到这种问题，我们可以选择国内的镜像来解决问题。

在Windows下：

C:\Users\Administrator\下新建pip文件夹，在创建pip.ini文件，拷贝下面代码进去，保存。

[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

下载神器：

安装文件时出现各种错误： 
1. 通过下面网址直接下载包到本地
https://www.lfd.uci.edu/~gohlke/pythonlibs/

比如：先下载到本地
Twisted‑20.3.0‑cp38‑cp38‑win_amd64.whl

2. pip install [自己的文件的本地地址]

pip install D:\download_soft\pyPlugin\Scrapy-2.2.1-py3-none-any.whl

### 关于wheel

wheel是Python的一种安装包，其后缀为.whl，在网速较差的情况下可以选择下载wheel文件再安装，然后直接用pip3命令加文件名安装即可。

不过在这之前需要先安装wheel库，安装命令如下：

```
pip3 install wheel
1
pip3 install wheel
```

(也可以直接通过https://www.lfd.uci.edu/~gohlke/pythonlibs/来下载)
然后到PyPI上下载对应的wheel文件，如最新版本为2.17.3，则打开https://pypi.python.org/pypi/requests/2.17.3#downloads，下载requests-2.17.3-py2.py3-none-any.whl到本地。

随后在命令行界面进入wheel文件目录，利用pip安装即可：

pip3 install requests-2.17.3-py2.py3-none-any.whl
1
pip3 install requests-2.17.3-py2.py3-none-any.whl
这样我们也可以完成Requests的安装。

## 源码安装

可以通过Git来下载源代码：

```
git clone git://github.com/kennethreitz/requests.git

git clone git://github.com/kennethreitz/requests.git
```

下载下来之后，进入目录，执行如下命令即可安装：
```
cd requests
python3 setup.py install
cd requests
python3 setup.py install
```


## 使用Scrapy

### 基本命令


参考: https://scrapy-chs.readthedocs.io/zh_CN/0.24/topics/commands.html
```
创建项目
一般来说，使用 scrapy 工具的第一件事就是创建您的Scrapy项目:

scrapy startproject myproject
该命令将会在 myproject 目录中创建一个Scrapy项目。在您的项目中使用 scrapy 工具来对其进行控制和管理。

比如，创建一个新的spider:

scrapy genspider mydomain mydomain.com

scrapy crawl myspider
```

### curl
官网: https://curl.haxx.se/docs/
https://catonmat.net/cookbooks/curl
参考:
https://www.ruanyifeng.com/blog/2019/09/curl-reference.html




curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=021da76b-fa03-4776-bf9e-46b215176137' \
   -H 'Content-Type: application/json' \
   -d '
    {
        "msgtype": "text",
        "text": {
            "content": "广州今日天气：29度，大部分多云，降雨概率：60%",
            "mentioned_list":["wangqing","@all"],
            "mentioned_mobile_list":["13800001111","@all"]
        }
    }'


curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa' \
   -H 'Content-Type: application/json' \
   -d '
   {
        "msgtype": "text",
        "text": {
            "content": "hello world"
        }
   }'


安装完成后，我们可以在“计算机”→“管理”→“服务”页面开启和关闭MySQL服务

