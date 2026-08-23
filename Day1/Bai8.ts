export default class Product{
    constructor(public name : string,public price : number){ }
}

const products: Product[] = [
    new Product("Bút chì", 10),
    new Product("Tai nghe", 150),
    new Product("Bàn phím cơ", 200),
    new Product("Lót chuột", 25)
];
// Lọc các item có giá lớn hơn 100
console.log(products.filter(item => item.price > 100))