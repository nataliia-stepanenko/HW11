"use strict"

let msInAYear = 60 * 60 * 24 * 1000 * 365;
function getAge(birthday) {
    let now = new Date();
    return ((Date.parse(now) - Date.parse(birthday)) / msInAYear).toFixed(0);
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

function getCurrentYear() {
    let currentDate = new Date();
    return currentDate.getFullYear();
}

function isWeekendThisYear(birthday) {
    let thisYearBDayInMs = birthday.setFullYear(getCurrentYear);
    let thisYearBDay = new Date(thisYearBDayInMs);
    return (thisYearBDay.getDay() === 0 || thisYearBDay.getDay() === 6);
}



class Employee extends Person {
    constructor(firstName, lastName, birthDayDate, jobPosition) {
        super(firstName, lastName, birthDayDate);
        this.jobPosition = jobPosition;
    }

    #salary = 0;
    set salary(salary){
        return this.#salary = salary;
    }
    get salary(){
        return this.#salary;
    }

    getYearSalary(){
        return this.#salary * 12;
    }
    celebrate(){
        if (isWeekendThisYear(this.birthDayDate)) {
            console.log(`Happy Birthday, let’s celebrate`);
            return;
        }
        console.log(`Happy Birthday, but I need to work`);
    }
}




let person = new Person ('Jack', 'Lockwood', '1978-07-12');
person.celebrate()
let employee = new Employee ('Kate', 'Fergusson', '1998-08-19', 'designer');
employee.celebrate()