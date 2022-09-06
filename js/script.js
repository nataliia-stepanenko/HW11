"use strict"

const msInAYear = 60 * 60 * 24 * 1000 * 365;
function getAge(birthday) {
    let now = new Date();
    return ((Date.parse(now) - Date.parse(birthday)) / msInAYear).toFixed(0);
}
function getCurrentYear() {
    let currentDate = new Date();
    return currentDate.getFullYear();
}
function isWeekend(birthday) {
    return birthday.getDay() === 0 && birthday.getDay() === 6
} 


class Person {
    constructor(firstName, lastName, birthDayDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDayDate = new Date(birthDayDate);
        this.age = getAge(birthDayDate);
    }
    celebrate(){
        console.log(`Happy Birthday, let’s celebrate`);
    }
}

class Employee extends Person {
    #salary = 0;
    constructor(firstName, lastName, birthDayDate, salary, jobPosition) {
        super(firstName, lastName, birthDayDate);
        this.#salary = salary;
        this.jobPosition = jobPosition;
    }
    get salary(){
        return this.#salary;
    }
    getYearSalary(){
        return this.#salary * 12;
    }
    celebrate() {
        let thisYearBDayInMs = this.birthDayDate.setFullYear(getCurrentYear);
        let thisYearBDay = new Date(thisYearBDayInMs);
        if (!isWeekend(thisYearBDay)) {
            console.log(`Happy Birthday, but I need to work`);
            return;
        }
        console.log(`Happy Birthday, let’s celebrate`);
    }
}




let person = new Person('Jack', 'Lockwood', '1978-07-12');
console.log(person);
person.celebrate() // Happy Birthday, let’s celebrate

let employee = new Employee('Kate', 'Fergusson', '1998-08-19', 20000, 'designer');
console.log(employee);
employee.celebrate() // Happy Birthday, but I need to work
