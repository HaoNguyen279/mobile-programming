class PolyAnimal {
    makeSound(): void {
      console.log("make random fking sound");
    }
}
class PolyDog extends PolyAnimal {
    override makeSound(): void {
      console.log("gâu gâu!");
    }
}
class PolyCat extends PolyAnimal {
    override makeSound(): void {
      console.log("mfeo meo!");
    }
}

const cho = new PolyDog()
cho.makeSound()
const meo = new PolyCat()
meo.makeSound()