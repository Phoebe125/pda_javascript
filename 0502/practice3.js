const str1 = prompt("100보다 큰 숫자를 입력해주세요.");

function limitCalls(func, n) {
    // 여기에 코드를 작성하세요.
}
const limitedHello = limitCalls(() =>
    console.log("Hello!"), 2);
limitedHello(); // "Hello!"
limitedHello(); // "Hello!"
limitedHello(); // 아무 일도 일어나지 않음