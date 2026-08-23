abstract class Shape {
    // Phương thức trừu tượng bắt buộc các lớp con phải implement
    abstract area(): number;
}
class Square extends Shape {
    constructor(public side: number) {
        super();
    }
    area(): number {
        return this.side * this.side;
    }
}
class Circle extends Shape { // buộc phải implement lại method area() nếu ko báo lỗi khi extends
    constructor(public radius: number) {
      super();
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
      }
}
const vuong  = new Square(10);
console.log(vuong.area())
const tron  = new Circle(10);
console.log(tron.area())