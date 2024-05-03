// 부록 - 사용자 정의 에러 만들기

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        if (Error.captureStackTrace) {
            // 현재 에러 객체에서 현 생성자 함수 stack trace 제거. (디버깅에 도움)
            // 없으면 에러 생성자도 stack trace에 들어가서 실제 에러 발생 위치 찾기에 가독성이 안좋음.
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

function checkNumber(num) {
    if (isNaN(num)) {
        throw new CustomError("Throw Customized Error!");
    }
    return num;
}

try {
    checkNumber("test");
} catch (e) {
    console.log(e.message); // The given value is not a number
}