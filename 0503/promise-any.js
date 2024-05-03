// Promise.any: 하나가 성공할 때까지 기다릴래
// Promise.any 메서드는 주어진 프로미스 중 하나라도 resolved되면 즉시 그 프로미스의 결과값으로
// fullfiled하는 새로운 프로미스를 반환합니다. 
// 모든 프로미스가 거부(rejected)될 경우, AggregateError 타입의 에러와 함께 rejected됩니다.

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
    Promise.any([
        fastFunction(5),
        slowFunction(10),
        Promise.reject(new Error("Error")),
    ])
    .then((data)=>{
        console.log("작업완료");
        console.log(data);
    })
}

runTask();
