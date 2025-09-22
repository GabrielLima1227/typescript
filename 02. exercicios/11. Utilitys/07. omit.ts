interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type UserWithoutPassword = Omit<User, "password">;

function sanitizeUser(user: User): UserWithoutPassword {
    const { password, ...rest } = user;
    return rest;
}
