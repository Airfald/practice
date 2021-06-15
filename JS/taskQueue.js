function a () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

let taskQueue = []
taskQueue.push(a, b)

function executor(tasks) {
    let task = tasks.shift()

    task().then(() => {
        if (task.length) {
            return executor(tasks)
        } else {
            console.log('全部执行完了!')
        }
    })
}
