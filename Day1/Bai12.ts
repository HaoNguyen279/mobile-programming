interface Flyable {
    fly(): void;
}
interface Swimmable {
    swim(): void;
}
class Bird implements Flyable {
    fly(): void {
        console.log("flyingg");
    }
}
class Fish implements Swimmable {
    swim(): void {
        console.log("swimminggg.");
    }
}

const chim = new Bird()
chim.fly()
const ca = new Fish()
ca.swim()