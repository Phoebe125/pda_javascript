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

### 이벤트 전파 - Event Propagation  
- 이벤트 전파는 이벤트가 발생했을 때 DOM 트리를 통해 이벤트가 전달되는 방식을 말함. 
- 이벤트 전파는 세 단계로 진행:  
  1. 캡처링 단계: 이벤트가 최상위 노드에서부터 이벤트 타깃까지 전달됩니다.  
  - 브라우저가 인지한다.  
  2. 타깃 단계: 이벤트가 타깃 요소에서 처리됩니다.  
  - 타깃에서부터 리스너 함수가 실행  
  3. 버블링 단계: 이벤트가 타깃 요소에서부터 다시 최상위 노드까지 올라갑니다.  
  - 부모 노드의 이벤트 리스너 호출로 전파.  
  - 만약 버블링을 멈추고 싶다면, `event.stopPropagation()`  
  ```jsx
    element.addEventListener('click', function(event) {
    event.stopPropagation(); // 이벤트 전파 중지
    console.log('This will stop event propagation');
    });
  ```

  ## 이벤트 기본 처리 변경 – preventDefault
- form의 submit button 같은 경우 기본적인 이벤트리스너가 등록되어 있다.(폼 제출)  
- 이런 default event 메서드를 중단하기 위해선 다음 함수 사용  
- `preventDefault()`   
```jsx
    element.addEventListener('click', function(event) {
    event.preventDefault(); // default 실행중지
    });
```
