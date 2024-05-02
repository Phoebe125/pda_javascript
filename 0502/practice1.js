
// 1. 사용자로 점수를 3개 입력받아
// 모든 점수가 65점보다 클 경우 합격 아닐경우 불합격을 출력하세요
// 단, 0~100 이 아닌 숫자가 입력된경우 잘못된 “잘못된 점수가 입력되었습니다" 를 출력하세요

const scores = [
    prompt("점수입력1"),
    prompt("점수입력2"),
    prompt("점수입력3")].map((elem) => {
        if (0 <= elem && elem <= 100) {
            return parseInt(elem);
        }
        return false;
    })
if (scores.includes(false)) { console.log("잘못된 점수가 입력되었습니다."); }
else if (scores[0] > 65 && scores[0] > 65 && scores[0] > 65) {
    console.log("합격");
}
else { console.log("불합격"); }


// 2. 홀수 짝수 판별기 (p.109)
const value = parseInt(prompt("정수를 입력해주세요: "));

let message = (value % 2 === 1) ? `입력하신 ${value}는 홀수입니다.` :
    `입력하신 ${value}는 짝수입니다.`

alert(message);


// 3. 조건문 - 물음표 연산자
let agee = prompt("나이를 입력해주세요.", 18);

let message2 = (age < 3) ? '무료입니다.' :
    (age < 18) ? '청소년입니다.' :
        (age < 100) ? '감사합니다.' :
            '나이가 아주 많으시거나, 나이가 아닌 값을 입력하셨군요!';

console.log(message2);

// 3. switch case
let str1 = '4';

switch (str1) {
    case '1':
        console.log("1입력");
        break;
    case '2':
        console.log("2입력");
        break;
    case 3:
    case '3':
        console.log("3입력");
        break;
    case '4':
        console.log("4입력");
        break;
    default:
        console.log("['1', '2', '3', 3, '4']에 포함 X");
}


// 4. switch 문을 if 문으로 변경하여 작성

const browser = prompt("사용 중인 브라우저를 입력해주세요: ");
let result = (browser === "Edge") ? "Edge를 사용하고 계시네요!" :
    (["Chrome", "Firefox", "Safari", "Opera"].includes(browser)) ? "저희 서비스가 지원하는 브라우저를 사용하고 계시네요." :
    alert("현재 페이지가 괜찮아 보이길 바랍니다!");


console.log(result);

