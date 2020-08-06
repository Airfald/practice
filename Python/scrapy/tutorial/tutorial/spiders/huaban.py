import scrapy


class HuabanSpider(scrapy.Spider):
    name = 'huaban'
    allowed_domains = ['www.huaban.com']
    start_urls = ['http://www.huaban.com/']

    def parse(self, response):
        filename = response.url.split("/")[-2]
        print('输出在这里\n\n\nresponse  ', response.body)
        with open(filename, 'wb') as f:
            f.write(response.body)
