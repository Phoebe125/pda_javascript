// Promise.race
// Promise 가 하나라도 이행되거나 거부되면, 그걸로 끝낼래 (경쟁시킬래)

// Promise.race 메서드는 Promise.all과 유사하게 Promise 객체의 배열을 인자로 받지만,
// 배열 내의 Promise 중 하나라도 이행하거나 거부되는 즉시,
// 그 Promise의 결과 (이행 값 또는 거부 사유)와 함께 실행을 완료
// 즉, "경주"에서 이기는 첫번째 Promise의 결과만 가져옴

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
    Promise.race([fastFunction(5), slowFunction(10)])
    .then(data => {
        console.log("작업 완료");
        console.log(data);
    })
}

runTask();