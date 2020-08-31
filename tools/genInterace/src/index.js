/**
 * 通过yapi生成interface的辅助脚本
 */

const fs = require('fs');
const request  = require('request');

// 通过登录拿到yapi token
const token = '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE1MzcsImlhdCI6MTU5NzEzNjU4OSwiZXhwIjoxNTk3NzQxMzg5fQ.fv9jXk6_aidZHgEqmRtX-Z4KAPGQLzyC2ffJphqkHDw; _yapi_uid=1537'
// 部署的域名
const baseUrl = 'http://47.106.118.192:13000/api/interface/get'

const urlId = 30092

let count = 0

// 生成的参数
let paramsResult = {}
// 生成的interface
let responseResult = {}

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

// 接口的 id
getInterfaceData(urlId)

// 需要登录拿到cookie
function getInterfaceData (id) {
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
          let sourceParamsData = {
            data: JSON.parse(data.data.req_body_other)
          }

          // 保存请求原数据  
          fs.writeFileSync('./data.json', JSON.stringify(info, null, '\t'), 'utf8')
          // 生成参数  
          genParams(sourceParamsData)
          // 生成interface  
          genResponse()
        }
      }

      request(options, callback);
}

// 通过读写文件的方式来生成
function genResponse () {
    try {
        const data = fs.readFileSync('./data.json', 'utf8')
        let sourceData = {
            data: JSON.parse(data.toString())
        }
        reset()
        genInterface(sourceData, responseResult)
    
        fs.writeFileSync('./interface.json', JSON.stringify(responseResult.data, null, '\t'), 'utf8')
    } catch(err) {
        console.error(err)
    }
}

// 生成参数 - 同理调用genInterface
function genParams (sourceData) {
    reset()
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
    dataItem.description && (interfaceItem[`注释${count++}`] = dataItem.description)
}

function reset () {
    count = 0
}
