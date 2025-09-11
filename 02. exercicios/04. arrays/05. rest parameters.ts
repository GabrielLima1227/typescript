function calculateAverage(...value: number[]): number{
    if (!value.length) {
        throw new Error("At least one number is required to calculate the average.");
    }
    return value.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / value.length;
}

console.log(calculateAverage(10, 20, 30)); // 20
console.log(calculateAverage(5, 15));      // 10
