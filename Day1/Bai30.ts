
class Person {
    constructor(public name: string, public age: number) {}
    displayInfo(): void {
      console.log(`Họ tên: ${this.name}, Tuổi: ${this.age}`);
    }
}
  
class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
      super(name, age);
    }
    displayAllInfo(): void {
      console.log(`Tên: ${this.name} | Tuổi: ${this.age} | Lớp: ${this.grade}`);
    }
  }
  
class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
      super(name, age);
    }
  
    introduce(): void {
      console.log(`thầy ${this.name} (${this.age} tuổi)  môn: ${this.subject}`);
    }
}
  
class School {
    constructor(
      public schoolName: string,
      private students: Student[] = [],
      private teachers: Teacher[] = []
    ) {}
  
    addStudent(student: Student): void {
      this.students.push(student);
    }
  
    addTeacher(teacher: Teacher): void {
      this.teachers.push(teacher);
    }
    displayInfo(): void {}

}
  

  
