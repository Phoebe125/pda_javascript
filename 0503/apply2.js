function Animal(name) {
    this.name = name;
    this.run = function () {
        console.log(`${this.name}가 달린다.`)
    }
}
Animal.prototype.eat = function() {
    console.log(`${this.name}가 먹는다.`)
} // 부모 class가 자식 class로 전달할 메서드


 function Rabbit(name, color) {
    Animal.apply(this, arguments);
    this.color = color;
 }

 // Object.create 함수는 객체는 만들되, 생성자는 실행하지 않음
 Rabbit.prototype = Object.create(Animal.prototype); // 인자로 받은 Object를 복사해서 새로운 객체를 만듦
 Rabbit.prototype.constructor = Rabbit; // Rabbit의 prototype의 생성자는 그대로 Rabbit으로!
 // 만일 위에 코드 없으면, Rabbit.prototype의 constructor는 Animal 임 (Object.create(Animal.prototype) 이라서)

 const rabbit1 = new Rabbit("토끼", "White");

 rabbit1.run();
 rabbit1.eat();
 console.log(rabbit1);
 console.log(rabbit1.__proto__); // Animal 과 똑같은 타입의 prototype
 console.log(rabbit1.__proto__.__proto__);
