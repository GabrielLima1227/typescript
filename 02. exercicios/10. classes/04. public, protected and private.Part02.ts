class Person{
    public name: string; 
    protected age: number;
    private cpf: number;

    constructor(name:string, age:number, cpf: number) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
    }

    getCpf(){
        return this.cpf;
    }

    setCpf(cpf: number): void{
        this.cpf = cpf;
        console.log("CPF Changed successfully!");
    }
}

class Employee extends Person{
    constructor(name:string, age:number, cpf: number) {
        super(name, age, cpf);
    }

    showInfos(): void{
        console.log(`Employee Name: ${this.name}`);
        console.log(`Employee Age: ${this.age}`);
        // console.log(`Employee Name: ${this.cpf}`);
    }
}