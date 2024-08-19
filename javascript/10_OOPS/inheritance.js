class User {
    constructor(name){
        this.name = name
    }
    printMe(){
        console.log(`The username is ${this.name}`);
    }
}

class Teacher extends User {
    constructor(name,email,password){
        super(name)   // Inherit elements & methods from User class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`The new Js Course is added`);
    }
}

const chai = new Teacher('alish','alish@openai.com',52314)
// console.log(chai);
chai.addCourse()
chai.printMe()