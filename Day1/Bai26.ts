import Product from "./Bai8.ts"
class Order{
    public products : Product[];
    constructor (products : Product[]){
        this.products = products;
    }
    totalPrice() : void {
        console.log("Total: " + this.products.reduce( (sum, item) => sum + item.price, 0 ));
    }
}
const productss: Product[] = [
    new Product("Bút chì", 10),
    new Product("Tai nghe", 150),
    new Product("Bàn phím cơ", 200),
    new Product("Lót chuột", 25)
];

const oder = new Order(productss);
console.log(oder.products)
oder.totalPrice()