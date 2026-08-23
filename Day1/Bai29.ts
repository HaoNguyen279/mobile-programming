interface Movable{
    move() : void
}

class MovableCar implements Movable {
    move(): void {
      console.log(`car moveing`);
    }
}
// các class implement interface thì phải buộc khai báo đủ attribute hoặc method đã đc khai báo trong interface
class Robot implements Movable {
    move(): void {
      console.log(`robot moving.`);
    }
}
const car: Movable = new MovableCar();
car.move();
const robot: Movable = new Robot();
robot.move();