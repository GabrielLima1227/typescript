type Directions = "norte" | "sul" | "leste" | "oeste";
function walk(direction: Directions): void{
    console.log(`You walked to ${direction}`);
}