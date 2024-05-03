function getResp(idx) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${idx}`)
        .then(resp => {
            return resp.json();
        }).then(data => {
            console.log(data);
        })
}

async function getComp() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const jsonData = await response.json();
    return jsonData;
}

async function getIdx(idx) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${idx}`);
    const jsonData = await response.json();
    return jsonData;
}

function runTask2() {
    const result = []
    getComp().then((data) => {
        data.forEach(element => {
            if (element["completed"] === true) {
                result.push(element);
            }
        })
    })
    return result
}

function runTask3() {
    const result = []
    const arr = [1, 3, 5, 7, 9];
    arr.forEach((item, idx) => {
        getIdx(item).then((data) => {
            result.push(data);
        })
    })
    return result
}

function runTask3_1() {
    arr = [getIdx(1), getIdx(3), getIdx(5), getIdx(7), getIdx(9)];
    const result = []
    Promise.all(arr).then(data => {
        result.push(data);
    });
    return result
}

// 1. todoId가 1,3,5,7,9인 데이터를 조회하여 출력하세요
const arr = [1, 3, 5, 7, 9];
arr.forEach((item, idx) => {
    getResp(item);
})

// 2. 모든 todo 중 completed 가 true인 데이터만 모아서 새로운 배열을 만드세요.
const result2 = runTask2();
console.log(result2);


// 3. todoId가 1, 3, 5, 7, 9 인 데이터를 새로운 배열로 만들어 저장하세요.
const result3 = runTask3();
console.log(result3);