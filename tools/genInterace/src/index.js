const fs = require('fs');
const request  = require('request');

// 通过登录拿到yapi token
const token = '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE1MzcsImlhdCI6MTU5NTQ5MzQ4MCwiZXhwIjoxNTk2MDk4MjgwfQ.BdBa6KBCdXD0c-0Mot58MHwtBcdbapQcyDWIcye6MaA; _yapi_uid=1537'
// 部署的域名
const baseUrl = 'http://47.106.118.192:13000/api/interface/get'

// 生成的interface
let interface = {}
// 生成的参数
let paramsResult = {}
// 注释 count
let commentCount = 0

// 接口的 id
getInterfaceData (27058)

const JAVA_TO_JS_TYPE_MAP = {
    String: 'string',
    Date: 'string',
    object: 'object',
    Integer: 'number',
    int: 'number',
    Long: 'number',
    number: 'number',
    array: 'Array',
    enum: 'enum',
    Boolean: 'boolean'
}

// 需要登录拿到cookie
function getInterfaceData (id) {
    request(options, callback);

    const options = {
        url: `${baseUrl}?id=${id}`,
        headers: {
            'Cookie': token
        }
      };
      
      function callback(error, response, body) {
        let data = JSON.parse(body)

        if (!error && response.statusCode == 200) {
          const info = JSON.parse(data.data.res_body);
          
          //   生成返回值
          fs.writeFile('./data.json', JSON.stringify(info, null, '\t'), 'utf8', function(err){
              if (err) {
                  console.log('写文件出错了，错误是：'+err);
              } else {
                  genInterfaceFromFile()
              }
          })

          genParams(JSON.parse(data.data.req_body_other))
        }
      }
}

// 通过读写文件的方式来生成
//data参数的数据类型是Buffer对象，里面保存的是一个个字节（理解为字节组）
// console.log("data:",data);
//把Buffer对象转换为字符串，调用toString(utf8)方法
// console.log("data.toString('utf8'):",data.toString('utf8'));
//toString()里可以不加utf8
// console.log("data.toString():", data.toString());
function genInterfaceFromFile () {
    try {
        const data = fs.readFileSync('./data.json', 'utf8')
        let sourceData = {
            data: JSON.parse(data.toString())
        }
        resetData()
        genInterface(sourceData, interface)
    
        fs.writeFileSync('./interface.json', JSON.stringify(interface.data, null, '\t'), 'utf8')
    } catch(err) {
        console.error(err)
    }
}

// 生成参数 - 同理调用genInterface
function genParams (params) {
    let sourceData = {
        data: params
    }

    resetData()
    genInterface(sourceData, paramsResult)

    try {
        fs.writeFileSync('./params.json', JSON.stringify(paramsResult.data, null, '\t'), 'utf8')
    } catch (error) {
        console.log(error)
    }
}

// 递归生成interface代码 
// data: 源数据
// interface 接口
// needComment 是否需要注释
const genInterface = (data, interfaceItem, needComment = true) => {
    for (let key in data) {
        const type = data[key].type

        if (type === 'object') {
            needComment && genComment(data[key], interfaceItem)
            interfaceItem[key] = {}
            genInterface(data[key].properties, interfaceItem[key])
        } else if (type === 'array') {
            if (data[key].items.type !== 'object') {
                needComment && genComment(data[key], interfaceItem)
                interfaceItem[key] = `${JAVA_TO_JS_TYPE_MAP[data[key].items.type]}[]` || 'unknow'
            } else {
                let propertyName = `${key}_Array`
                needComment && genComment(data[key], interfaceItem)

                interfaceItem[propertyName] = [{}]
                genInterface(data[key].items.properties, interfaceItem[propertyName][0])
            }
        } else {
            needComment && genComment(data[key], interfaceItem)
            interfaceItem[key] = JAVA_TO_JS_TYPE_MAP[type] || 'unknow'
        }
    }
}

// 生成注释
function genComment(dataItem, interfaceItem) {
    dataItem.description && (interfaceItem[`注释${commentCount++}`] = dataItem.description)
}

function resetData() {
    commentCount = 0
}





test('abc').xxx
test('abc', item => {

})





