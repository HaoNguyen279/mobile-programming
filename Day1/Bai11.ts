class Animal{
    constructor(public name: string) {}
}

class Dog{
    bark() : void{
        console.log(" gâu gâu gâu gâu gâu")
    }
}
class Cat{
    meow() : void{
        console.log("mèo meo mèo meo")
    }
}
const LuckyDog = new Dog();
const GrayCat = new Cat();
LuckyDog.bark()
GrayCat.meow()