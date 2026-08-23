class Employee {
    // Phương thức trừu tượng bắt buộc các lớp con phải implement
    public name : string;
    constructor(name : string){
        this.name = name;
    }
    work(): void{
        console.log("Working rn!")
    }
}
class Manager extends Employee {
    manageTeam(): void {
        console.log(`${this.name} đang quản lý đội ngũ.`);
    }
}
  
class Developer extends Employee {
    code(): void {
        console.log(`${this.name} đang viết code.`);
    }
}
const thoCode  = new Developer("tho code pro");
thoCode.code()
const quanLy  = new Manager("quan ly");
quanLy.manageTeam()