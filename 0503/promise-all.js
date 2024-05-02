// 비동기 작업 여러개를 한꺼번에 처리할 경우에!
const dealy = ms => new Promise(resolve => setTimeout(resolve, ms));

async function fastFunction(data) {
    await dealy(3000); 
    const result = data * 2;
    console.log('fast function done', result);
    return result;
}

async function slowFunction(data) {
    await dealy(3000);
    const result = data + 10;
    console.log('slow function done', result);
    return result;
}

function runTasks() {
    Promise.all([fastFunction(10), slowFunction(5)])
    .then(([result1, result2]) => {
        console.log("작업완료", result1, result2);
    });
}

function runTasks2() {
    Promise.all([fastFunction(10), slowFunction(5)])
    .then(data => {
        console.log(data); // data를 배열로 주는것 말고는 위에 코드와 동일함
    });
}

runTasks();
runTasks2();

// Promise.all 메서드는 Promise 객체의 배열을 인자로 받음.
// 모든 Promise가 성공적으로 이행(resolved) 될 때까지 기다림.
// 모든 Promise가 이행되면, 각 Promise의 결과값을 담은 배열이 이행 값으로 반환.
// 만약 하나라도 거부 (rejected)되면, Promise.all은 즉시 그 이유로 reject