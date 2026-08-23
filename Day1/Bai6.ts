export default class Book{
    constructor(public title : String, public author : string, public year: number){}
    displayInfo() : void{
        console.log(`Title: ${this.title}, author : ${this.author}, year : ${this.year}`)
    }
}

const book = new Book("Thuy Kieu", "Nguyen Du", 999);
book.displayInfo()