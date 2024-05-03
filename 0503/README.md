### 프로디지털 아카데미 자바스크립트 강의 (53)

### Promise.all
- 비동기 작업 여러개를 한꺼번에 처리할 경우에!
- Promise.all 메서드는 Promise 객체의 배열을 인자로 받음.
- 모든 Promise가 성공적으로 이행(resolved) 될 때까지 기다림.
- 모든 Promise가 이행되면, 각 Promise의 결과값을 담은 배열이 이행 값으로 반환.
- 만약 하나라도 거부 (rejected)되면, Promise.all은 즉시 그 이유로 reject
```jsx
function runTasks() {
    Promise.all([fastFunction(10), slowFunction(5)])
    .then(([result1, result2]) => {
        console.log("작업완료", result1, result2);
    });
}
```

### Promise.race
- Promise 가 하나라도 이행되거나 거부되면, 그걸로 끝낼래 (경쟁시킬래)
- Promise.race 메서드는 Promise.all과 유사하게 Promise 객체의 배열을 인자로 받지만,
- 배열 내의 Promise 중 하나라도 이행하거나 거부되는 즉시,
- 그 Promise의 결과 (이행 값 또는 거부 사유)와 함께 실행을 완료
- 즉, "경주"에서 이기는 첫번째 Promise의 결과만 가져옴
```jsx
function runTask() {
    Promise.race([fastFunction(5), slowFunction(10)])
    .then(data => {
        console.log("작업 완료");
        console.log(data);
    })
}
```

### Promise. allSettled
- 비동기 함수를 병렬적으로 실행하고 모아서 작업할래
- (모든 Promise가 resolve 혹은 reject를 기다림)
- Promise.allSettled 메서드는 모든 프로미스가 완료를 기다림.(성공이든 실패든)
- 그리고 각 프로미스의 결과에 대한 정보를 담은 객체 배열을 반환합니다.
- 각 객체는 { status, value } 또는 { status, reason }의 형태를 가지며, status는 "fulfilled" 또는 "rejected"
- fulfilled된 프로미스는 value 속성을, rejected된 프로미스는 reason 속성을 가집니다.
```jsx
function runTask() {
    Promise.allSettled([fastFunction(5), slowFunction(10), Promise.reject(new Error("Errors"))])
        .then(data => {
            console.log("작업 완료");
            console.log(data);
        })
}
```

### Promise.any
- 하나가 성공할 때까지 기다릴래
- Promise.any 메서드는 주어진 프로미스 중 하나라도 resolved되면 즉시 그 프로미스의 결과값으로 fullfiled하는 새로운 프로미스를 반환합니다. 
- 모든 프로미스가 거부(rejected)될 경우, AggregateError 타입의 에러와 함께 rejected됩니다.
```jsx
function runTask() {
    Promise.any([
        fastFunction(5),
        slowFunction(10),
        Promise.reject(new Error("Error")),
    ])
    .then((data)=>{
        console.log("작업완료");
        console.log(data);
    })
}
```
