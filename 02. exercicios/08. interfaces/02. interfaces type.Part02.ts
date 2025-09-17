interface BankAccount {
    balance: number;
    deposit(amount: number): void;
}

const myAccount: BankAccount = {
    balance: 0,
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposit of ${amount} made. New balance: ${this.balance}`);
    },
};

myAccount.deposit(100);

myAccount.deposit(50.5);