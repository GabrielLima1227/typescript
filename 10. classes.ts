export class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Private Class Members
export class Customer2 {
    firstName: string;
    lastName: string;
    private balance: number;

    constructor(firstName: string, lastName: string, balance: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    purchase(cost: number): number {
        this.balance -= cost;
        return this.balance;
    }
}

// Protected Data Members
export class Customer3 {
    firstName: string;
    lastName: string;
    protected balance: number;

    constructor(firstName: string, lastName: string, balance: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

export class RegularCustomer extends Customer3 {
    constructor(firstName: string, lastName: string, balance: number) {
        super(firstName, lastName, balance);
    }

    getBalance(): number {
        return this.balance;
    }
}

// Abstract Classes and Methods
export abstract class Customer4 {
    firstName: string;
    lastName: string;
    protected balance: number;

    constructor(firstName: string, lastName: string, balance: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    }

    export class RegularCustomer2 extends Customer4 {
    constructor(firstName: string, lastName: string, balance: number) {
        super(firstName, lastName, balance);
    }

    getBalance(): number {
        return this.balance;
    }
}

// Classes Implement Interfaces
interface User {
    firstName: string;
    lastName: string;

    getFullName(): string;
}

interface Customer5 {
    getBalance(): number;
}

export class RegularCustomer3 implements User, Customer5 {
    firstName: string;
    lastName: string;
    protected balance: number;

    constructor(firstName: string, lastName: string, balance: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getBalance(): number {
        return this.balance;
    }
}

// Parameter Properties
export class ExecutiveMember {
    constructor(protected balance: number, protected points: number) {}

    isVIP(): boolean {
        return this.balance >= 10000;
    }

    redeemPoints(amount: number): boolean {
        if (this.points >= amount) {
        this.points -= amount;
        return true;
        }
        return false;
    }
}

// 