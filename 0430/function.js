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

// 3. 함수의 ReturnType에 대해서
const e = function () {
    console.log("e");
}

// 이런 형태의 Function을 Closure라고 한다
function createGreeting(greetingPrefix) {
    return function (name) {
        console.log(greetingPrefix + ", " + name + "!");
    }
}

const greetHello = createGreeting("Hello");
const greetHi = createGreeting("Hi");
greetHello("Alice"); // 출력: Hello, Alice!
greetHi("Bob"); // 출력: Hi, Bob!
console.log(typeof (greetHello)); // 출력: function
console.log(typeof (greetHi("Bob"))); // 출력: undefined

/** 
 * Return이 없거나, 비어있는 경우: undefined
 * 함수를 Return하는 경우: 
 * **/

// 4. Closure
/** 클로저(closure)
- 함수와 함수가 선언된 어휘적 환경의 조합
- 내부 함수가 생성될 때 그 scope에 있는 모든 변수에 대해 접근할 권한을 가짐
- 외부 함수의 실행을 마친 후에도 그 변수에 접근 가능
**/

function outer() {
    let count = 0;
    function sample() {
        console.log(count);
    }
    function inner() {
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter());
console.log(counter());

