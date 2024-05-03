// js는 class라는 녀석이 없다...! ㅇㅂㅇ

const animal = {
    name: "lion", 
    run() {
        console.log(`${this.name}이 달립니다.`);
    },
    run2: function() {
        console.log("동물이 달려요.");
    }
}

animal.run();
animal.run2();

function Animal(name) {
    this.name = name;
    this.run = function() {
        console.log(`${this.name} 동물이 달린다.`)
    }
}

const animal2 = new Animal("사자");
console.log(animal2);
console.log(animal2.constructor);
animal2.run();
