class Student{
    constructor(public name: string, public grade: number, public age: number) {}

    isApproved(): boolean{
        return this.grade >= 7;
    }
}

const s1 = new Student("Ana", 8, 20);
const s2 = new Student("Bruno", 6, 19);

console.log(s1.isApproved());
console.log(s2.isApproved());
