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
