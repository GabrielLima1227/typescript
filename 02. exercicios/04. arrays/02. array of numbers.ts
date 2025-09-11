let age: number[] = [];

age.push(18);
age.push(22);
age.push(30);

console.log(age.reduce((total, value) => total + value, 0) / age.length);