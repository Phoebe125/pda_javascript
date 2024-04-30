let sample = [1, 2, 3, "a", "b", "c"];

console.log(sample.at(3));
console.log(sample[3]);

console.log(sample.indexOf(3));
console.log(sample.includes(3));

console.log(sample.slice(3,));
console.log(sample.slice(3, 5));

console.log(sample.join(":"));

sample.reverse()
console.log(sample)
sample.reverse()

// pop 과 push
// pop과 push는 array 자체가 변한다
sample.push(4) // push 의 return 값은 개수이다.
console.log(sample)
sample.pop()
console.log(sample)

// splice
/* start index부터 deleteCount만큼 지운 후
items를 채워넣음 */
sample.splice(3, 2, "d", "e", "f")
console.log(sample)

// shift와 unshift
/* shift: 처음 요소를 제거
unshift: 배열의 처음에 요소 추가 */
let fruits = ["Apple", "Banana", "Cherry"];
// 배열의 처음에 요소 추가
fruits.unshift("Strawberry");
console.log(fruits); // ["Strawberry", "Apple", "Banana", "Cherry"]
// 배열의 처음 요소를 제거
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// concat 메서드
const arr2 = [1, 2, 3, 4];
let d = arr2.concat(6); // concat은 arr2를 변화하는 게 아니라, 새로 만든 배열에 추가하는 거 
console.log(d);
console.log(arr2);

// forEach
const arr1 = [1, 2, 3, 4, 5];
// 1) 방법과 2) 방법은 this 키워드가 가리키는 주체가 다르다!
// 하지만 대부분 의도한대로 하려면, 1) 방법으로 사용!
// 1) forEach 방법
const result = arr1.forEach((item, idx) => {
    console.log(item * 10);
})

// 2) forEach 방법
arr1.forEach(function (item, idx) {
    console.log(item);
})

function sampleFunc(item, idx) {
    console.log(item - idx);
}

arr1.forEach(sampleFunc);

console.log(result); // 반환하는 값 없음 == undefined

// map
// forEach는 undefined, map은 요소들을 돌아가면서 계산한 값들을 모아 새로운 배열을 만든다.
arr1.map((item, idx) => {
    return item * 10;
})

console.log(arr1);

// filter
// return이 True인 애들만 모아서 새로운 배열을 만든다.
const arr = [1, 2, 3, 4, 5];
const result2 = arr.filter((item, idx) => {
    return item > 3;
})
console.log(result2);