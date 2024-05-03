class Animal {
    constructor(name){
        this.name = name;
        this.run = function(){
            console.log(`${this.name}이 달린다.`);
        }
    }
    eat() {
        console.log(`${this.name}이 먹는다.`);
    }
}

class Rabbit extends Animal{
    constructor(name, color){
        super(name);
        this.color = color;
    }
    sample(){
        console.log('sample');
    }
}

const animal = new Animal("기린");
console.log(animal);
console.log(animal.constructor);
console.log(animal.__proto__);

const rabbit = new Rabbit("토끼", "Brown");
console.log(rabbit);
console.log(rabbit.__proto__);