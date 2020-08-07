# 参考： https://www.runoob.com/python3/python3-mysql.html
import pymysql

db = pymysql.connect(host='localhost',user='root', password='123456', port=3306)

# 使用 cursor() 方法创建一个游标对象 cursor
cursor = db.cursor()
 
# 使用 execute()  方法执行 SQL 查询 
cursor.execute('show databases;')
 
# 使用 fetchone() 方法获取单条数据.
data = cursor.fetchone()
 
print ("Database version : %s " % data)
 
# 关闭数据库连接
db.close()
