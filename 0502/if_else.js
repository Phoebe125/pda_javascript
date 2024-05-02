const age = parseInt(prompt("나이를 입력하여 주세요."));

let message = (age<3) ? "무료입니다.":
    (age<18) ? "청소년입니다.":
    (age<100) ? "감사합니다.":
    "나이가 아주 많으시군요."

alert(message);