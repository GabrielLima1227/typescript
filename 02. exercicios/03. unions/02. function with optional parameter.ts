function presentPerson(name: string, age?: number): string {
    if (typeof age !== 'undefined') {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    return `Hello, ${name}!`;
}