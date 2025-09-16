type UserProfile = { name: string; age?: number };

function showUser(user: UserProfile): void {
    console.log(`Name: ${user.name}`);
    if (user.age !== undefined) {
        console.log(`Age: ${user.age}`);
    } else {
        console.log("Age not provided");
    }
}

showUser({ name: "Alice", age: 30 });
showUser({ name: "Bob" });