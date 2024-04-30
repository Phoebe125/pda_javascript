/* 연습 문제 1 */
function createCounter() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter1()); // 3


/* 연습 문제 2 */
function createIncrementer(start, step) {
    let startIn = start;
    let stepIn = step;
    function inner() {
        startIn += stepIn;
        return startIn;
    }
    return inner;
}

const incByOne = createIncrementer(5, 1);
console.log(incByOne()); // 6
console.log(incByOne()); // 7

const incByTen = createIncrementer(10, 10);
console.log(incByTen()); // 20
console.log(incByTen()); // 30

// const를 사용하는게 일반적이다!!!!

/* 동인 언니의 다른 케이스 예시 코드 */
function createIncrementer2(step) {
    const retFunc = (start) => {
        return start + step;
    }
    return retFunc;
}
const func1 = createIncrementer2(1);
const func2 = createIncrementer2(2);
console.log(func1(2));
console.log(func2(2));

console.log(typeof (func1(2))); // 출력: number
console.log(typeof (func2)); // 출력: function
