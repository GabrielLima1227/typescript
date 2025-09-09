type MathematicalOperation = (a: number, b: number) => number;

let operation: MathematicalOperation;

const sum: MathematicalOperation = (a, b) => a + b;

operation = sum;
console.log(`Sum result: ${operation(10, 5)}`);

const multiplication: MathematicalOperation = (a, b) => a * b;

operation = multiplication;
console.log(`Multiplication result: ${operation(10, 5)}`);