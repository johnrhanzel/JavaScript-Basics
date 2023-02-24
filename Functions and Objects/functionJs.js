// Working with Functions
function Welcome() {
    console.log("Pepito my friend!");
}

// Calling the function
Welcome();

// Using return values
function Math(num1, num2){
    return num1 + num2;
}

// Assign a value
let add = Math(3, 5);
console.log(add);


// Working with Objects
let personInfo = {
    name: "Rhanzel",
    age: "22",
    occupation: "Developer"
};

// Another way of assigning objects is
let detailPerson = new Object();
detailPerson.name = "John";
detailPerson.age = 22;
detailPerson.occupation = "Fullstack Developer";

// Print the objects using square bracket notation
console.log(personInfo["name"]);
console.log(personInfo["age"]);
console.log(personInfo["occupation"]);

// Print the objects using dot notation
console.log(detailPerson.name);
console.log(detailPerson.age);
console.log(detailPerson.occupation);


// Modifying Object
personInfo.name = "Gong Yoo";
console.log(personInfo.name);

// Add Objects
personInfo.email = "gongyoo@gmail.com";
console.log(personInfo.email);

// Delete Objects
delete personInfo.email;
console.log(personInfo.email)


// Object-Oriented Programming
class PersonDetails { // use class to indicate oop
    constructor (birthYear, status) {
        this.birthYear = birthYear;
        this.status = status;
    }
    greetPerson() {
        console.log("A person with a birth year of " + this.birthYear + " and I am " + this.status);
    }
}
// Create an instance for the object
var kobe = new PersonDetails(2022, "Single");
kobe.greetPerson();


// OOP Inheritance
class Student extends PersonDetails{ // use extend to create a child class
    constructor(name, age, course, year){
        super(name, age, course);
        this.course = year;
    }
    studentStat() {
        console.log("I am a student enrolled in " + this.course + " on year " + this.course);
    }
}

let jane = new Student("Jane", 21, "ITEL4", 2023);

jane.studentStat();