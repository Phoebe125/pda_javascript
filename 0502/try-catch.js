// 예외를 위한 try catch
try {
    // 코드 진행
} catch (err) {
    // 에러 핸들링

    if (err instanceof MyError) {
        // MyError 일때 핸들링
    }
} finally {
    // 무조건 실행됨
}

// let json = "{bad json}";
let json = '{"MyGood": "myValue"}';

try {
    console.log("code1");
    JSON.parse(json);
    console.log("code1 종료");
} catch (err) {
    console.log("error 처리");
    console.log(err);
} finally {
    console.log("finally");
}

try {
    console.log("code1");
    throw new SyntaxError("새로운 에러 만들기 꺄"); // 에러를 발생시킴, 인자로 에러 메세지를 전달함
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    if (err instanceof SyntaxError){
        // 만일 err가 Syntax Error 이라면
        console.log("SyntaxError");
    }
    else if (err instanceof RangeError){
        // 만일 err가 Range Error 이라면
    }
}


