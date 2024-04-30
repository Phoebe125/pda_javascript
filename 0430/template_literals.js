let multi = `Hello World
 Hello, JS`

console.log(multi);

let name = "신윤수"
let multi2 = `Hello ${name}
 Hello, JS`
console.log(multi2);

// 이스케이프 코드
console.log("hi \nfriend");
console.log("hi \tfriend");
console.log("hi \\friend");
console.log("hi \”friend");
console.log('hi "friend');
console.log("hi \'friend");
console.log("hi 'friend");

// 문자 관련 함수 및 속성
const intro = "안녕하세요. 신윤수입니다.";
console.log(intro.length);

const intro2 = "안녕하세요. 신윤수입니다.";
console.log(intro2.charAt(2));
console.log(intro2[2]);

let fruit = "apple";
console.log(fruit.toUpperCase());

let fruit2 = "BANANA";
console.log(fruit2.toLowerCase());

let sample = "안녕 세계야";
console.log(sample.indexOf('세'));
console.log(sample.indexOf('신')); // 찾는 문자가 없으면 -1을 반환

console.log(sample.includes('안녕'));
console.log(sample.includes('하이'));

console.log(sample.startsWith('안녕'));
console.log(sample.startsWith('세계'));

console.log(sample.endsWith("안녕"));
console.log(sample.endsWith("세계야"));

console.log(sample.slice(1, 5));
console.log(sample.slice(2));

let sample2 = sample.split(' ');
console.log(sample2);

let sample3 = "          안녕, 세계야            ";
console.log(sample3.trim());

console.log(sample.repeat(10)); // *가 아닌, .repeat이다!