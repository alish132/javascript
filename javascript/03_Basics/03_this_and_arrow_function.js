// +++++++++++++++++++++++++++++++++++ this keyword +++++++++++++++++++++++++++++++++++++++
let obj = {
    name: 'alish',
    age: 20,
    skill: 'full stack developer',
    greet: function(){
        console.log(`Hello ${this.name}`);  
        console.log(this);    // this keyword refers to the current context. In this situation it refers to the object's current context.
    }
}

// obj.greet()
// obj.name = 'hitesh'
// obj.greet()



// const chai = function () {
//     let username = 'alish'
//     console.log(this);
// }


// +++++++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++++++++
// const chai = () => {         // Declearing arrow function in curly bracket
//     let username = 'alish'
//     console.log(this);
// }
// chai()

// const add = (a,b) => {       // Declearing arrow function in curly bracket
//     return a+b
// }

// const add = (a,b) => a+b   // In this syntex we did not need to write return keyword because return keyword is required in curly bracket only

const add = (a,b) => (a+b)    //Arrow function with parentheses. Here also return keyword is not required.
console.log(add(10,10))

const obj1 = () => ({name: 'alish'})   // objects in arrow function
console.log(obj1());