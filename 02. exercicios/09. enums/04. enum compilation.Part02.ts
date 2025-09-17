enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function getWeekdayName(dayNumber: number): string {
    if (dayNumber >= 0 && dayNumber <= 6) {
        return Weekday[dayNumber];
    } else {
        return 'Invalid number. Please provide a number between 0 and 6.';
    }
}

console.log(getWeekdayName(0)); 
console.log(getWeekdayName(3)); 
console.log(getWeekdayName(6)); 
console.log(getWeekdayName(7));