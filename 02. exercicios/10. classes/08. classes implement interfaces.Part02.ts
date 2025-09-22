abstract class Vehicle{
    protected isTurnOn = false;

    start(): this {
        if (!this.isTurnOn) {
            this.isTurnOn = true;
            console.log(`${this.constructor.name} turned on!`);
        } else {
            console.log(`${this.constructor.name} is already on!`);
        }
        return this;
    }

    stop(): this {
        if (this.isTurnOn) {
            this.isTurnOn = false;
            console.log(`${this.constructor.name} turned off!`);
        } else {
            console.log(`${this.constructor.name} is already off!`);
        }
        return this;
    }

    accelerate(): this {
        if (!this.isTurnOn) {
            console.log(`${this.constructor.name} is turned off! Can't accelerate!`);
        } else {
            console.log("Accelerating!");
        }
        return this;
    }
}

class Car extends Vehicle {}
class Bike extends Vehicle {}