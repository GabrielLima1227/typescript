let age: number = 20;
let text: string = age as unknown as string; // Or toString(); / String();
console.log(text);