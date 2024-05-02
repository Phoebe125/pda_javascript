//Promise. allSettled
//비동기 함수를 병렬적으로 실행하고 모아서 작업할래. 
//(모든 Promise가 resolve 혹은 reject를 기다림)

// Promise.allSettled 메서드는 모든 프로미스가 완료를 기다림.(성공이든 실패든) 
// 그리고 각 프로미스의 결과에 대한 정보를 담은 객체 배열을 반환합니다. 
// 각 객체는 { status, value } 또는 { status, reason }의 형태를 가지며, 
// status는 "fulfilled" 또는 "rejected“
// fulfilled된 프로미스는 value 속성을, rejected된 프로미스는 reason 속성을 가집니다.

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

function runTask() {
    Promise.allSettled([fastFunction(5), slowFunction(10), Promise.reject(new Error("Errors"))])
        .then(data => {
            console.log("작업 완료");
            console.log(data);
        })
}

runTask();

// [
//     { status: 'fulfilled', value: 10 },
//     { status: 'fulfilled', value: 20 },
//     {
//       status: 'rejected',
//       reason: Error: Errors
//     }
// ] 마지막에 일부러 에러 발생한 것