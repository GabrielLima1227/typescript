interface User{
    id: number;
    name: string;
}

const adminUser: User = { id: 101, name: 'João Admin' };
const standardUser: User = { id: 102, name: 'Maria User' };
const anotherAdminUser: User = { id: 103, name: 'Pedro Admin' };

const userAccessMap = new Map<User, 'admin' | 'user'>();

userAccessMap.set(adminUser, 'admin');
userAccessMap.set(standardUser, 'user');
userAccessMap.set(anotherAdminUser, 'admin');