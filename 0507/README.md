### 프로디지털 아카데미 자바스크립트 강의 (5/7)

### Event Listener 예제
- input tag는 form tag와 같이 쓰임
- script (javascript 파일 연결)은 body의 마지막 부분에서!
```jsx
    const input1 = document.getElementById('num1');
    const input2 = document.getElementById('num2');

    let inputValue1 = Number(input1.value);
    let inputValue2 = Number(input1.value);

    input1.addEventListener('input', e => {
        inputValue1 = Number(e.target.value);
        renderResult();
    })
    input2.addEventListener('input', e => {
        inputValue2 = Number(e.target.value);
        renderResult();
    })
    function renderResult() {
        const resultBox = document.getElementById('result');
        resultBox.innerHTML = inputValue1 + inputValue2;
    }
```