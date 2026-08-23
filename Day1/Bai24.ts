abstract class Appliance {
    constructor(public brand: string) {}
    // Phương thức trừu tượng bắt buộc lớp con phải định nghĩa
    abstract turnOn(): void;
}
class Fan extends Appliance { // bắt buộc các lớp con phải định nghĩa lại khi extends
    turnOn(): void {
      console.log(`Quạt ${this.brand} bật`);
    }
}
class AirConditioner extends Appliance {
    turnOn(): void {
      console.log(`Máy lạnh ${this.brand} baajt`);
    }
}
const fan = new Fan("Senko");
fan.turnOn();

const ac = new AirConditioner("panasonic");
ac.turnOn();