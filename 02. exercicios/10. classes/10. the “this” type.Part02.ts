class Calculator {
    private result: number = 0;

    add(n: number): this {
        this.result += n;
        return this;
    }

    subtract(n: number): this {
        this.result -= n;
        return this;
    }

    multiply(n: number): this {
        this.result *= n;
        return this;
    }

    getResult(): number {
        return this.result;
    }
}

const calc = new Calculator();
const finalResult = calc
    .add(10)
    .subtract(2)
    .multiply(3)
    .getResult();

console.log(finalResult);
