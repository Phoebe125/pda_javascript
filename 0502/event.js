function run() {
    console.log("3초후 실행");
}
console.log("시작");
setTimeout(run, 3000);
console.log("종료");

/*
실행 결과:
시작
끝
3초후 실행
 */