function setUser(username){
    this.username = username
}
function createUser(username,email,password){
    setUser.call(this,username)  // Here call() is used to access value of setUser function
    this.email = email
    this.password = password
}

const user = new createUser('alish','hitesh@fb.com','52314')

console.log(user);


