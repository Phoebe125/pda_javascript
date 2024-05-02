// 가변인수
// 키워드인수
// *args
// **kwargs

let arr = ["Kim", "Shin"];

// 구조 분해 할당
let [name1, name2] = arr;

console.log(name1);
console.log(name2);

let arr2 = ['a', 'b', 'c', 'd', 'e'];
let [v1, v2, ...v3] = arr2;
console.log(v1);
console.log(v2);
console.log(v3);
