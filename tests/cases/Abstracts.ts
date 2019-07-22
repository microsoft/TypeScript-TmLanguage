abstract class Animal {
	  public age: number;
	  public yearsLeft() { return 20 - this.age; }
	  abstract makeSound(): string;
}

class Cow extends Animal {
	  makeSound() { return "Moo"; }
}

class Cat extends Animal {
	  makeSound() { return "Meow"; }
}

let cow = new Cow();
cow.makeSound();