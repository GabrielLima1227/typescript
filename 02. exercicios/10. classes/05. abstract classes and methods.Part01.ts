abstract class Shape{
    abstract area(): number;
}

class Circle extends Shape{
    readonly radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number{
        if (this.radius < 0) {
            throw new Error("Radius must be positive");
        }
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape{
    readonly length: number;
    readonly height: number;

    constructor(length: number, height: number) {
        super();
        this.length = length;
        this.height = height;
    }

    area(): number{
        if(this.length < 0 || this.height < 0){
            throw new Error("Length and Height must be positive!");
        }
        return this.length * this.height;
    }
}