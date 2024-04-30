console.log("Hello World");

// 1. 변수 (Variable)
/* var, let: 변수 선언 (값 변경 가능)
const: 상수 선언 (값 변경 불가) */
var a = 1;
const b = 2;
let c = "ABC";

console.log(a, b, c);

/* VAR VS LET
VAR
- 함수 스코프
- 동일 변수 재선언 가능
- 호이스팅

LET
- 블록 스코프
- 변수 재선언 불가능
- 초기화 전에 접근 불가능*/

// 2. js의 세미콜론
// ; 붙이거나, 붙이지 말자!
console.log("A")
console.log("B")

console.log("A"); console.log("B");