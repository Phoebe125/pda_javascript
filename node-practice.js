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