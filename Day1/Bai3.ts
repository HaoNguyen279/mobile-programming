class Car{
    constructor(public brand: string,public model: string, public year: number) {}
    showInfo() : void{
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

const tesla = new Car("Tesla", "Cyber truck", 2029)
tesla.showInfo()