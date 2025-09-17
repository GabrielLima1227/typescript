enum Direction {
    up,
    down,
    left,
    right,
}

for (const direction in Direction) {
    if (typeof Direction[direction] === 'number') {
        const name = direction;
        const index = Direction[direction];
        console.log(`Name: ${name}, Index: ${index}`);
    }
}