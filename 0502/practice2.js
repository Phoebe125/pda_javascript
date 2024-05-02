// 연습문제 1 (p.117)
const num = parseInt(prompt("정수를 입력해주세요: "));
for (let i = 0; i < num; i++) {
    console.log("안녕");
}
for (let i = 1; i < num + 1; i++) {
    console.log("*".repeat(i));
}
for (let i = num; i > 0; i--) {
    console.log("*".repeat(i));
}


// 연습문제 2 (p.118)) 
let x = [3, 6, 9, 20, -7, 5]
for (item of x) {
    console.log(item*10);
}

let y = {"math": 70, "science": 80, "english": 20}

