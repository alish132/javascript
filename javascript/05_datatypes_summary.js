// In JS on the basic of how data is stored in memory and how it is accessed , the datatype are categorized in two types : Primitive datatype and non-primitive datatype
// javascript is dynamic language because Variables can hold values of any type, and their types can change during the execution of the program. Which means we did not need to declare the datatype by ourself. 


// <---------------- Primitive Datatype --------------------->
// 7 Types : String, Number, Boolean, null, undefined, symbol, bigInt

const userEmail = 'alish@gmail.com'
const score = 101
const isLoggedIn = true
const temperature = null
let user1;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);   // result => flase  // Because they are different due to symbol.

// const bigNumber = 81273873182273172n
console.log(typeof bigNumber);


// <-------------------Non-primitive DataType-------------------->
// 3 Types : Array, Objects, Functions

const heros = ["spiderman", "Badman", "Ironman"]
const obj = {
    name: 'harry',
    age: 20,
    city: "NewYork"
}
const myFunction = function(){
    console.log("I am function");
}

console.log(typeof myFunction);

