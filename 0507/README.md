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

### 이벤트 기본 처리 변경 – preventDefault
- form의 submit button 같은 경우 기본적인 이벤트리스너가 등록되어 있다.(폼 제출)  
- 이런 default event 메서드를 중단하기 위해선 다음 함수 사용  
- `preventDefault()`   
```jsx
    element.addEventListener('click', function(event) {
    event.preventDefault(); // default 실행중지
    });
```

### BOM (Browser Object Model)
**[주요 BOM 객체]**
- window(브라우저 객체의 최상위 객체.)  
  - open("url 경로", "창 이름", "옵션 설정") - url 열기  
  : 해당 창이 변수로 return 반환  
  - close( ) – 창 닫기  
  - alert - 경고 창  
  - confirm("질의 내용") - 확인/취소 창을 띄움.(true/false)  
- screen(사용자의 디스플레이에 대한 정보를 제공)  
  - width/heigh  
- location(현재 페이지의 URL을 다루고 페이지 이동을 제어)  
  - href - 주소 영역에 참조 주소를 설정하거나 URL 반환.  
  - host – hostname 반환  
  - reload – 새로고침  
  - replace – 현위치를 바꿔버림. (history 기록 X)  
- history(사용자 위치 history)  
  - back() - 뒤로가기  
  - forward() - 앞으로 가기  
- Navigator: 사용자의 브라우저와 운영체제에 대한 정보를 제공  
  - userAgent – user-agent  
  - language - 언어  


### 웹은 Server & Client 구조!!!

### Request 의 메소드 (HTTP Method)  
1. **GET**: 가져오기  
2. **POST**: 붙이기 (등록하기)  
3. **PUT**: 수정하기  
4. **DELETE**: 삭제하기  

### Response Status Code (HTTP Status Code)  
**2XX**: 성공  
**3XX**: Page Redirection  
**4XX**: Client Error  
**5XX**: Server Error  

### 데이터 포맷
1. XML
2. JSON


### npm axios
- 폴더 하나 만든 다음에 `npm init`  
- 패키지 설치를 위해 `npm install axios` 하면 됨 (해당 폴더로 이동해서)  
```json
{
  "name": "practice_npm",
  "version": "1.0.0",
  "type": "module",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.6.8"
  }
}
```
- `"type": "commonjs` 도 사용할 수 있음  

### Axios 사용방법
```jsx
// import axios from 'axios';  // module 방식으로 사용할 때
const axios = require('axios');  // commonjs 방식으로 사용할 때 (default임)
axios({
    method: "GET",
    url: "https://www.naver.com",
}).then(response=>{
    console.log(response);
})
```
- axios.get(url, config)
- axios.put(url, data, config)
- axios.post(url, data, config)
- axios.delete(url, config)

### Cheerio 사용 방법
```jsx
// import axios from 'axios';  // module 방식으로 사용할 때
// import * as cheerio from 'cheerio';

const axios = require("axios");
const cheerio = require("cheerio"); 

axios.get("https://naver.com").then(resp => {
    return resp.data;
}).then(data=>{
    console.log(data);
    const $ = cheerio.load(data); // jquery 관례가 이어 온 것이다
})
```
- `import axios from 'axios';` : export default로 설정한 모듈을 import, import 뒤에 적은 이름은 상관 없음
- `import * as cheerio from 'cheerio';` : 'cheerio'에 있는 모듈 전부 다를 가져옴