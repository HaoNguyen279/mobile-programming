class Rectangle{
    constructor(public width : number, public height : number) {}
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rec = new Rectangle(10,20);

console.log(rec.calculateArea())
console.log(rec.calculatePerimeter())