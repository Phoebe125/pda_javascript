let arr2 = ["a", "b", "c", "d", "e"];
let [v1, v2, ...v3] = arr2;

let v4 = ["A", "B", v3];
console.log(v4); // [ 'A', 'B', [ 'c', 'd', 'e' ] ]

let v5 = ["A", "B", ...v3];
console.log(v5); // [ 'A', 'B', 'c', 'd', 'e' ], 배열이 풀어져서 들어감

let options = {
    title: "Menu",
    width: 100,
    height: 200,
    k1: 'v1',
    k2: 'v2'
}

let myName = "이선민"; // 변수 이름 자체가 키값으로 들어감

let options2 = {
    width: 200,
    ...options,
    height: 500, 
    myName
}

let options3 = {
    newKey: "새로운 값", 
    title: "newTitle", 
    ...options,
}

console.log(options2);
console.log(options3);