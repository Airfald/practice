// console.log(Promise)

// Promise.resolve().then(function(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('settimeout')
//             resolve('settimeout')
//         }, 2000)
//     })
// }).then((data) => {
//     console.log('返回的data', data)
// })

async function test (time) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log('settimeout', time)
            reslove(time)
        }, time)
    })
}

(async () => {
    const r1 = test(1000)
    const r2 = test(5000)
    // console.log(r1, r2)
    await r2
    console.log('test')
    await r1
})()












