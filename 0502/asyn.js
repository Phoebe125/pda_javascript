// js는 대부분 비동기적으로 동작!
function run() {
    console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log("끝");

// 전통적인 방식 (callback function)
// 비동기적으로 전달하되, 비동기 함수 내에서 블로킹 한 후에 호출할 함수를 같이 전달해주자!
function fastFunction(err, data, done) { // 함수 실행이 끝났을 때, 실행할 함수를 받아옴
    setTimeout(function () {
        // 1초 걸리는 함수. (2를 곱한다.)
        done(undefined, data * 2);
    }, 1000)
}

function slowFunction(err, data, done) {
    // 3초 걸리는 함수. (10을 더한다.)
    setTimeout(function () {
        done(undefined, data + 10);
    }, 3000);
}

function runTasks(cb) {
    fastFunction(undefined, 10, (err, data) => {
        if (err) return cb(err);
        console.log("fastFunction", data);

        slowFunction(undefined, data, (err, data) => {
            if (err) return cb(err);
            console.log("slowFunction", data);
        })
    })
}

runTasks(err=>{
    console.error(err);
})