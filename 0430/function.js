// 1. 함수 선언 형태
// 함수 선언 같은 경우 -> 함수 호출이 코드 어디에 있더라도 상관없이 사용이 가능함
function min(a, b) {
    return a < b ? a : b; // <조건> ? <참> 반환 값: <거짓> 반환 값; 
}

function min2(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// 2. 함수 표현식과 화살표 함수
// 이런식으로 함수를 정의를 하면, 함수 선언 전에 함수를 호출을 하면, 에러가 발생함
const max1 = function (a, b) {
    return a > b ? a : b;
} 

const max2 = (a, b) => {
    return a > b ? a : b;
}

// return 값만 있을 땐 다음과 같이  작성도 가능
const max3 = (a, b) => (a > b ? a : b);

// 함수 호출부
console.log(min(1, 2));
console.log(min2(1, 2));
console.log(max1(5, 7));
console.log(max2(1, 2));
console.log(max3(3, 5));