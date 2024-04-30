const ask = (func1, func2, func3) => {
    const flag = func1();
    if (flag) {
        func2();
    } else { func3() };
}

ask(() => confirm("동의하십니까?"),
    function () { alert("동의하셨습니다.") },
    function () { alert("취소 버튼을 누르셨습니다.") }
)

// 동인 언니 코드
const ask2 = function askAndAnswer(func1, func2, func3) {
    let a = func1();
    console.log('a는', a);
    if (a) func2();
    else { console.log(a); func3(); }
    return;
}
ask2(() => { let a = confirm('동의하심 ?'); return a; },
    () => { alert('님동의'); },
    () => { alert('님동의안함'); });