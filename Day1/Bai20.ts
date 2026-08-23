interface Vehicle {
    speed: number;
    drive(): void;
}
class VehicleCar implements Vehicle {
    constructor(public speed: number) {}
    drive(): void {
      console.log(`Car running w ${this.speed} km/h.`);
    }
}
// khi 1 class implement 1 interface thì interface sẽ kiểm tra class đó có đủ các kiểu mà interface đó đặt ra hay ko
// ví dụ này thì Bike và VehiclCar phải có đầy đủ cả 2 là attribue speed và drive() method để hơp lệ
class Bike implements Vehicle {
    constructor(public speed: number) {}
    drive(): void {
        console.log(`Bike cycling w speed: ${this.speed} km/h.`);
      }
}
const xe = new VehicleCar(100)
xe.drive()
const xedap = new Bike(36.36)
xedap.drive()