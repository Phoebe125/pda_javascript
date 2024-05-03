// 1. todoId가 1,3,5,7,9인 데이터를 조회하여 출력하세요
const baseUrl = "https://jsonplaceholder.typicode.com/todos";
[1, 3, 5, 7, 9].forEach((element) => {
    const url = `${baseUrl}/${element}`
    fetch(url).then(resp => {
        return resp.json();
    }).then(data => {
        console.log(data);
    })
});
// 단, 처리된 순서는 보장할 수 없다!

// 만일 처리된 순서를 보장하고 싶을 때 (Blocking을 원할 때)
async function fetchById(todoId) {
    const baseUrl = "https://jsonplaceholder.typicode.com/todos";
    const url = `${baseUrl}/${todoId}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

(async () => {
    for (let i of [1, 3, 5, 7, 9]) {
        console.log(await fetchById(i));
    }
})()

// 2. 모든 todo 중 completed 가 true인 데이터만 모아서 새로운 배열을 만드세요.
async function fetchCompleted() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const resp = await fetch(url);
    const data = await resp.json(); // .json은 Promise 객체를 반환하므로, 앞에 await를 작성해줘야한다.
    const result = data.filter(element=>element.completed);
    console.log(result);
}

fetchCompleted();

// 3. todoId가 1, 3, 5, 7, 9 인 데이터를 새로운 배열로 만들어 저장하세요.
async function fetchById(idx) {
    const url = `https://jsonplaceholder.typicode.com/todos/${idx}`;
    const resp = await fetch(url);
    const data = await resp.json(); // .json은 Promise 객체를 반환하므로, 앞에 await를 작성해줘야한다.
    return data;
}
(async () => {
    const arr = [1, 3, 5, 7, 9].map(value => fetchById(value));
    // const arr = [1, 3, 5, 7, 9].map(fetchById); // 위와 동일한 코드임
    const data = await Promise.all(arr);
    console.log(data);
})();