function calculateAverage(...values: number[]): number {
    if (!values.length) {
        throw new Error("At least one number is required to calculate an average.");
    }
    return values.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / values.length;
}

console.log(calculateAverage(10, 20, 30));
console.log(calculateAverage(5, 15));
