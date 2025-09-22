class Car{
    constructor(public brand: string, protected model: string, private engineNumber: string){}

    getEngineNumber(): string {
        return this.engineNumber;
    }
}

class ElectricCar extends Car {
    constructor(brand: string, model: string, engineNumber: string, private batteryCapacity: number) {
        super(brand, model, engineNumber);
    }

    showInfo(): void {
        console.log(`Brand: ${this.brand}`); 
        console.log(`Model: ${this.model}`);
        // console.log(this.engineNumber); 
        console.log(`Battery: ${this.batteryCapacity} kWh`);
    }
}

const tesla = new ElectricCar("Tesla", "Model S", "ENG-12345", 100);

tesla.showInfo();
console.log(tesla.brand);
console.log(tesla.getEngineNumber()); 