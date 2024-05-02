let num = parseInt(prompt("100보다 큰 숫자를 입력해주세요."));
while (num < 100) {
    num = parseInt(prompt("100보다 큰 숫자를 입력해주세요."));
}
console.log(num);

function limitCalls(func, n) {
    let i = 0;
    return () => {
        if (i < n) {
            func();
            i++;
        }
    }
}

function tmpCalls(func, n) {
    let i = 0;
    return function () {
        if (i < n) {
            func();
            i++;
        }
    }
}
function DlimitCalls(func,n){ // 안되는 코드
    let i =0;
    i++; 
    if(i<n) {return func;}
    else {return ()=>{};}
}

const limitedHello = limitCalls(() => console.log("Hello!"), 2);

limitedHello(); // "Hello!"
limitedHello(); // "Hello!"
limitedHello(); // 아무 일도 일어나지 않음