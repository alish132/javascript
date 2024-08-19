// get means showing data as output
//set means saving data 

class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){  // This password is upper password paramater.
        return `${this._password}`
    }
    set password(value){
        this._password = '52314'
    }
}
const alish = new User('alish@google.com','alish123')
console.log(alish.password);