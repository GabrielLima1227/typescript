interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type UserPublic = Pick<User, "id" | "name" | "email">;

const publicUser: UserPublic = {
    id: 1,
    name: "Cooper",
    email: "Interstellar@example.com",
}