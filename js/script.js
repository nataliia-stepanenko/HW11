"use strict"

const msInAYear = 60 * 60 * 24 * 1000 * 365;
function getAge(birthday) {
    let now = new Date();
    return ((Date.parse(now) - Date.parse(birthday)) / msInAYear).toFixed(0);
}

function isWeekend(birthday) {
    return new Date(birthday).getDay() === 0 && new Date(birthday).getDay() === 6
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
        const currentYear = new Date().getFullYear();
        const thisYearBDay = this.birthDayDate.setFullYear(currentYear);

        if (isWeekend(thisYearBDay)) {
            super.celebrate();
        } else {console.log(`Happy Birthday, but I need to work`);}
    }
}


let person = new Person('Jack', 'Lockwood', '1978-07-12');
console.log(person);
person.celebrate() // Happy Birthday, let’s celebrate

let employee = new Employee('Kate', 'Fergusson', '1998-08-19', 20000, 'designer');
console.log(employee);
employee.celebrate() // Happy Birthday, but I need to work
