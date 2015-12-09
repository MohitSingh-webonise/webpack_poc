class Person{
  constructor(){
    this.firstName = 'Mohit';
    this.lastName = 'Singh';
  }

  getFirstName(){
    return this.firstName;
  }

  getlastName(){
    return this.lastName;
  }

  welcome(){
    return "Welcome to ES6 !!"
  }
};

export default Person;