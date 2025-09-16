type Person = readonly [string, number];

function showDisplay(agent: Person): void{
    console.log(`Agent Name: ${agent[0]} \n Agent Age: ${agent[1]}`);
}