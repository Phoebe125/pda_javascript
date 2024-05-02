// callback은 가독성이 너무 떨어져... 비동기를 지원하는 새로운 객체를 만들자.
// Promise의 기본 템플릿
new Promise((resolve, reject) => {
    if (1) {
        resolve(value);
    } else {
        reject(error);
    }
}).then(data => {
    console.log(data);
}).catch(err =>{
    console.error(err);
}).finally(()=>{
    console.log("종료");
})

// Promise 예시
new Promise((resolve, reject) => {
    console.log("Promise1");
    const value = 10;
    // const value = 20;
    if (value === 10) {
        resolve(value);
    } else {
        reject(value);
    }
}).then(data => {
    console.log("Resolve!");
    console.log(data); // then에 전달한 함수를 resolve에 matching 한다.
}).catch(err =>{
    console.log("Reject!");
    console.error(err); // then에 전달한 함수를 reject에 matching 한다.
})

// 만일 then을 여러개 함수를 받을 때
new Promise((resolve, reject) => {
    console.log("Promise1");
    const value = 10;
    // const value = 20;
    if (value === 10) {
        resolve(value);
    } else {
        reject(value);
    }
}).then(data => {
    console.log("Resolve!");
    console.log(data);
    return Promise((resolve, reject) => {
        if (true){
            resolve(20);
        } else{
            reject(30);
        }
    })
}).catch(err =>{
    console.log("Reject!");
    console.error(err); // then에 전달한 함수를 reject에 matching 한다.
}).then(data => {
    console.log("2번째 Promise");
    return new Promise((resolve, reject) => {
        // .....
    })
})

// callback 보다는 좋아보인다! 코드의 depth가 깊어지진 않으니
// 근데 여전히 then, catch 로 함수를 전달해주는 것이 마음에 들지 않아...
// then 지옥?
