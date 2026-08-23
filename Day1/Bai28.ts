class Animal2 {
    protected makeSound(): void {
      console.log("make random fking sound");
    }
}
class Dog2 extends Animal2 {
    override makeSound(): void {
      console.log("gâu gâu!");
    }
} // khi sử dụng protected thì các class extends ko thể gọi protected method đc
// chỉ chính nó mới có thể gọi được hoặc gọi hàm đó nhưng sau khi override 
class Cat2 extends Animal2 {
    override makeSound(): void {
      console.log("mfeo meo!");
    }
}

const cho1 = new Dog2()
cho1.makeSound()
const meo2 = new Cat2()
meo2.makeSound()