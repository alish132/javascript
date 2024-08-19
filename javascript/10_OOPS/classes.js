// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `abc${this.password}123`
//     }
// }

// const hitesh = new User('hitesh','hitesh@microsoft.com','alish')
// console.log(hitesh.encryptPassword());



//  ==============>  Behind the scene  <===================

function User(username,email,password){
        this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `abc${this.password}123`
}

const hitesh = new User('hitesh', 'hitesh@openai.com','hitesh623')
console.log((hitesh.encryptPassword()));