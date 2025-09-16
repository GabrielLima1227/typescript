let numbers01: number[] = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
let number02 = [...new Set<number>(numbers01)];
console.log(number02);