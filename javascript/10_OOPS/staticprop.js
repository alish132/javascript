//  If we use static keyword in front of function then it does not give access of that function to the user.

class User {
    constructor(userName){
        this.userName = userName
    }

    printMe(){
        console.log(`Username is ${this.userName}`);
    }

    static uniqueId(){  // Does not give access of this function to the user.
        return `52314`
    }

}

const chai = new User('alish')

// chai.printMe()
console.log(chai.uniqueId());  // return error