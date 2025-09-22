abstract class Animal {
    abstract makeSound(): string;

    sleep(): string {
        return "Zzz...";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow...";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Au Au...";
    }
}

const animals: Animal[] = [new Cat(), new Dog()];
animals.forEach(animal => console.log(animal.makeSound(), animal.sleep()));