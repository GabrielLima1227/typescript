interface Employee {
    balance: number;
    salary: number;
}
interface Manager extends Employee {
    department: string;
}

let myManager: Manager = {
    balance: 855,
    salary: 0,
    department: "Inter",
};