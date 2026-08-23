class Person{
    constructor(public name : String, public age : number){}
    displayInfo() : void{
        console.log(`Name: ${this.name}, age : ${this.age}`)
    }
}

class Student extends Person {
    constructor(name: string, age: number, public grade: number) {
      super(name, age);
    }
    displayAllInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const haoMinh = new Student("Nguyen Minh Hao", 21, 3.69);
haoMinh.displayAllInfo();





