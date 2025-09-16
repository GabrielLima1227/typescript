interface User {
  name: string;
  age: number;
}

function createUser({ name, age = 18 }: { name: string; age?: number }): User {
    return {
        name,
        age,
    };
}

const user1 = createUser({ name: 'Alice', age: 25 });
console.log(user1);

const user2 = createUser({ name: 'Bob' });
console.log(user2);