let scores = " 90:30:80 ";

let [math, english, science] = scores.trim().split(':');
let average = (parseInt(math) + parseInt(english) + parseInt(science)) / 3;
let result2 = `평균 점수는 ${average.toFixed(2)}점 입니다.`

console.log("평균 점수는 ", average.toFixed(2), "점 입니다.");
console.log(result2);
