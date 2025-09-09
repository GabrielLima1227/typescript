export class Customer {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Private Class Members
export class Customer2 {
    firstName;
    lastName;
    balance;
    constructor(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    purchase(cost) {
        this.balance -= cost;
        return this.balance;
    }
}
// Protected Data Members
export class Customer3 {
    firstName;
    lastName;
    balance;
    constructor(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
export class RegularCustomer extends Customer3 {
    constructor(firstName, lastName, balance) {
        super(firstName, lastName, balance);
    }
    getBalance() {
        return this.balance;
    }
}
// Abstract Classes and Methods
export class Customer4 {
    firstName;
    lastName;
    balance;
    constructor(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
export class RegularCustomer2 extends Customer4 {
    constructor(firstName, lastName, balance) {
        super(firstName, lastName, balance);
    }
    getBalance() {
        return this.balance;
    }
}
export class RegularCustomer3 {
    firstName;
    lastName;
    balance;
    constructor(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getBalance() {
        return this.balance;
    }
}
// Parameter Properties
export class ExecutiveMember {
    balance;
    points;
    constructor(balance, points) {
        this.balance = balance;
        this.points = points;
    }
    isVIP() {
        return this.balance >= 10000;
    }
    redeemPoints(amount) {
        if (this.points >= amount) {
            this.points -= amount;
            return true;
        }
        return false;
    }
}
