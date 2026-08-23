import Person from "./Bai1_2.ts"

class Teacher extends Person{
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }
    introduce() : void {
        console.log("Hi class im your new Teacher teaching subject :" + this.subject );
    }
}

const cogiaothao = new Teacher("Thao", 21, "Science");

cogiaothao.introduce()