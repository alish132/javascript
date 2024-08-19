//  this keyword refers to current context
function user(username, address, email){
    this.username = username   // this.username is a variable
    this.address = address
    this.email = email

    return this
}

// Here, If we do not use new keyword then userOne value will be overwrite by userTwo.
const userOne = new user('alish','NPJ', 'alish@google.com')
const userTwo = new user('hitesh', 'Jaipur', 'hitesh@microsoft.com')

console.log(userTwo)
console.log(userTwo.constructor) // show reference or name of function