function fastFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const result = data * 2;
            console.log('Fast function done', result); // 20
            // reject(new Error("임시 에러")); // catch로 잡음
            resolve(result); // then으로 잡음
        }, 1000)
    })
}

function slowFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const result = data + 10;
            console.log('Slow function done', result); // 30
            // reject(new Error("임시 에러")); // catch로 잡음
            resolve(result);
        }, 3000)
    })
}

function runTasks() {
    return fastFunction(10)
        .then(data => {
            console.log(data);
            return slowFunction(data);
        }).then(data => {
            console.log("작업완료");
        }).catch(err => {
            console.error(err);
        })
}

// runTasks();

const sample = runTasks(); // 프로미스 객체의 반환값은 프로미스 객체이다!
console.log(sample);