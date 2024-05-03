function Animal(name) {
    this.name = name;
    this.run = function(){
        console.log(`${this.name} 동물이 달린다.`)
    }
}

const animal = new Animal("사자");
console.log(animal);
console.log(animal.constructor);
animal.run();

function Animal(name) {
    this.name = name || 'lion';
    this.run = function(){
        console.log(`${this.name} 동물이 달린다.`)
    }
}

const animal2 = new Animal("사자");
console.log(animal2);
console.log(animal2.constructor);
animal2.run();

Animal.prototype.eat = function() {
    console.log(`${this.name}가 먹는다.`)
} // 부모 class가 자식 class로 전달할 메서드

console.log('-'.repeat(10))
animal2.eat();
console.log(animal2);
console.log(animal2.__proto__);
