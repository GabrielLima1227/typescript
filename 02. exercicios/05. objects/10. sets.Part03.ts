type Student = {id: number, name: string}
let students = new Set<Student>();

students.add({id: 137, name: "Rick"});
students.add({id: 132, name: "Morty"})
students.add({id: 79, name: "Morty"})