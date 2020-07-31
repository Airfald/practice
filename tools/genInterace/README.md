## 通过脚本生成yapi  接口前端 ts interface 和参数


### 目录树
```
practice
├── note
│   └── note1.md
├── python
│   └── interal.py
├── README.md
└── tools
    └── genInterace
        ├── genInterace.rar
        ├── package-lock.json
        ├── package.json
        ├── README.md
        └── src
            ├── data.json       获取的源数据
            ├── index.js        生成代码
            ├── interface.json  生成的interface文件
            ├── params.json  生成的参数文件
            └── service.js
```


### 基本思想

通过请求yapi的接口拿到源数据通过函数转换成需要的数据并写入到文件中。

### 基本操作

```
1. 
// 通过登录拿到yapi token
const token = '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE1MzcsImlhdCI6MTU5NTQ5MzQ4MCwiZXhwIjoxNTk2MDk4MjgwfQ.BdBa6KBCdXD0c-0Mot58MHwtBcdbapQcyDWIcye6MaA; _yapi_uid=1537'

2. 
// yapi 部署的域名
const baseUrl = 'http://47.106.118.192:13000/api/interface/get'

3. 找到接口id调用接口 getInterfaceData (id) 
// 接口的 id
getInterfaceData (27058)

4. 通过node index.js 命令生成数据
```

### 生成效果

```
{
	"msg": "string",
	"code": "number",
	<!-- "注释1": "InformationStationListVO", -->
	"data_Array": [
		{
			<!-- "注释2": "资料站ID", -->
			"id": "number",
			<!-- "注释3": "资料名称，必填", -->
			"name": "string",
			<!-- "注释4": "分公司ID", -->
			"orgId": "number",
			<!-- "注释5": "分公司名称", -->
			"orgName": "string",
			<!-- "注释6": "资料标签列表 ,String", -->
			"informationLabelList": "string[]",
			<!-- "注释7": "领取的人数", -->
			"recieveNum": "number",
			<!-- "注释8": "年级ID，逗号分隔", -->
			"grade": "string",
			<!-- "注释9": "年级名称列表 ,String", -->
			"gradeList": "string[]",
			<!-- "注释10": "科目ID，逗号分隔", -->
			"subject": "string",
			<!-- "注释11": "科目名称列表 ,String", -->
			"subjectList": "string[]",
			<!-- "注释12": "热点标签ID，逗号分隔", -->
			"label": "string",
			<!-- "注释13": "标签名称列表 ,String", -->
			"labelList": "string[]",
			<!-- "注释14": "上下架状态,ON_SHELVES(1,\"上架\"),,OFF_SHELVES(2,\"下架\");", -->
			"status": "enum"
		}
	],
	"requestId": "string",
	"timestamp": "number"
}
```
