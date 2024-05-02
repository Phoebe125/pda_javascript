// 가장 최근 방식 - Async & Await
// 비동기적인 코드를 함수의 문법 (키워드)으로 추가하자.
// 마치 동기적 코드처럼 비동기 함수를 작성하자

const dealy = ms => new Promise(resolve => setTimeout(resolve, ms));

// function fastFunction(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             const result = data * 2;
//             console.log('Fast function done', result);
//             // reject(new Error("임시 에러")); // catch 로 잡음
//             resolve(result); // then으로 받음
//         }, 1000);
//     })
// }

// async는 Promise 객체임!
// await는 then 임!
// 비동기적인 흐름을 가져가는 async, await
// async, await: Promise 객체임
async function fastFunction(data) {
    await dealy(3000); // dealy의 resolve가 끝날 때까지 기다림, Promise 객체가 끝날때까지 기다림
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

async function runTasks() {
    let result = await fastFunction(10); // Promise 객체도 await가 가능하다!
    result = await slowFunction(result);
    console.log("작업 완료", result);
}

const result = runTasks();
console.log(result);