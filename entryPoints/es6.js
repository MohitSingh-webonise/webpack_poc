import Person from './../source/person.js';

let person = new Person();

document.write(`First Name is : ${person.getFirstName()}`)
document.write(`Last Name is: ${person.getlastName()}`)
document.write(`${person.welcome()}`)
