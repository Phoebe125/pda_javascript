// node.js 환경에서 진행할 경우.
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = 0;

rl.on('line', function (line) {
    // 코드 작성
    let result = true
    if (line <= 65) {
        result = false
    }
    count++;

    // 코드 종료
    if (count === 3 ){
        console.log(result);
        rl.close();

    }
});

// 예시 정답 코드 - 브라우저에서 
let s1 = prompt("점수입력1: ");
let s2 = prompt("점수입력2: ");
let s3 = prompt("점수입력3: ");

n1 = parseInt(s1);
n2 = parseInt(s2);
n3 = parseInt(s3);

console.log(n1>65 && n2>65 && n3>65);
