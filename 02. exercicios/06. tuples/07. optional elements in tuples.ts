type UserData = [
    name: string,
    age?: number,
];

const userWithAge: UserData = [
    "Alice",
    30,
];
const userWithoutAge: UserData = [
    "Bob",
];

console.log(`\nNome do primeiro usuário: ${userWithAge[0]}`);
console.log(`Idade do primeiro usuário: ${userWithAge[1]}`);

console.log(`\nNome do segundo usuário: ${userWithoutAge[0]}`);

if (userWithAge[1] !== undefined) {
    console.log(`Idade de ${userWithAge[0]} é definida.`);
}

if (userWithoutAge[1] === undefined) {
    console.log(`Idade de ${userWithoutAge[0]} não foi informada.`);
}