module.exports = {
    build: function () {
        console.log('build')
    },
    publish: function () {
        console.log('publish')
    },
    devServer: function () {
        console.log('devServer')
    },
    testExtend: function () {
        // 扩展命令，可以通过全局cli执行这个扩展脚本
        console.log('extend')
    },
    config: {
        envOptions: ['test', 'pre', 'prd'],
    },
    plugins: {
        genInterface: {
            token: '_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE1MzcsImlhdCI6MTU5ODg3MDEyNSwiZXhwIjoxNTk5NDc0OTI1fQ.N3TObFJDIDCQHuj7cSiNifhF1VPHbdlNc-j_OqgDn7c; _yapi_uid=1537',
            baseUrl: 'http://47.106.118.192:13000/api/interface/get',
            urlId: 31725
        }
    }
}
