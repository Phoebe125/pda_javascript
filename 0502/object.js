const KEY = 'SAMPLE';
const johnProfile = {
    name: "john",
    sayHi: function (){
        console.log(this.name, "친구야 반갑다."); // 해당 Object에 접근 하기 위해 -> this 사용
    },
    [KEY]: "sampleValue" // [KEY] = 'SAMPLE' 이런식으로 변수 사용 가능하다!
}

johnProfile.sayHi(); // Object에서 Key 접급 방법 1
console.log(johnProfile['sayHi']); // Object에서 Key 접급 방법 2
console.log(johnProfile.SAMPLE); 