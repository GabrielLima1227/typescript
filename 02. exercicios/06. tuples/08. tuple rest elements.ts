type StudentGrades = [studentName: string, ...grades: number[]];

function logGrades(student: StudentGrades): void {
    const [name, ...grades] = student;
    const average = grades.length > 0 
        ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length 
        : 0;

    console.log(`Student: ${name}`);
    console.log(`Grades: ${grades.join(", ")}`);
    console.log(`Average: ${average.toFixed(2)}`);
}

logGrades(["Alice", 80, 90, 100]);
logGrades(["Bob"]);
