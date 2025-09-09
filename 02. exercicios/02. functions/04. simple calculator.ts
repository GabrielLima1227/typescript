type Operator = "+" | "-" | "*" | "/"; 

function calculate(value01: number, value02: number, operation: Operator): number {
    switch (operation) {
        case "+":
            return value01 + value02;
        case "-":
            return value01 - value02;
        case "*":
            return value01 * value02;
        case "/":
            if (value02 === 0) {
                throw new Error("Cannot divide by zero.");
            }
            return value01 / value02;
        default:
            return NaN;
    }
}