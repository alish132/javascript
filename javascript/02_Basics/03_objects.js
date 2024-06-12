// Singleton 
// object.create

// literals

const mysys = Symbol('Key1')   // Symbol Datatype

const user = {
    name: 'harry singh',
    "company work": "Microsoft",
    [mysys]: 'mykey1',      // This is the method to include datatype in Object.
    country: 'India',
    city: 'Gujrat',
    age: 20,
    email: 'harry@microsoft.com',
    loggedIn: false
}

// console.log(user.email);    // It shows the email
// console.log(user['company work']);   // bracket is useful if key is string and have spaces. 
// console.log(user);
// console.log(user[mysys]);   // This method is used to access Symbol datatype. 



user.profession = "Software Engineer"   // This is the method to add new key, value in object.
// console.log(user);


user.email = 'harry@google.com'
// Object.freeze(user)              // freeze is used to freeze the object from add new element or updating existing element.
user.email = "harry@apple.com"
console.log(user);


// ++++++++++++++++++ Function inside Object ++++++++++++++++ 

user.greeting = function(){
    console.log('Hello I am Function');
}
user.greetingtwo = function(){     // This is the method to access object's key,value inside function 
    console.log(`Hello i am ${this.name}. I am a ${this.profession} and my email address is ${this.email}`);
}

// console.log(user.greetingtwo());