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
    item *= 10;
    console.log(item);
}

let y = { "math": 70, "science": 80, "english": 20 }
for (key in y) {
    y[key] += 10;
    console.log(y[key]);
}

const num2 = parseInt(prompt("정수를 입력해주세요: "));
for (let i = 1; i < 10; i++) {
    console.log(`${num2}*${i} = ${num2 * i}`);
}

// 연습문제 3 (p.119)
const words = ["school", "game", "piano", "science", "hotel", "mountian"];
const result = [];
for (word of words) {
    if (word.length >= 6) {
        result.push(word);
    }
}
console.log(result);

// 구구단
for (let i = 1; i < 10; i++) {
    for (let t = 1; t < 10; t++) {
        console.log(`${i}*${t} = ${i * t}`);
    }
}

// 연습문제 4 (p.120)
// 구구단
for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} 3과 5의 공배수`);
    }
    else if (i % 3 == 0) {
        console.log(`${i} 3의 배수`);
    }
    else if (i % 5 == 0) {
        console.log(`${i} 5의 배수`);
    }
    else {
        console.log(`${i} 그냥 숫자`);
    }
}

// 심화: 1-입력한 숫자까지의 숫자 구구단
const num3 = parseInt(prompt("정수를 입력해주세요: "));

for (let i = 1; i < num3 + 1; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} 3과 5의 공배수`);
    }
    else if (i % 3 == 0) {
        console.log(`${i} 3의 배수`);
    }
    else if (i % 5 == 0) {
        console.log(`${i} 5의 배수`);
    }
    else {
        console.log(`${i} 그냥 숫자`);
    }
}