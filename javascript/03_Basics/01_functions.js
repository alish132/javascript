function add(x,y) {
    // let result = x+y
    // return result
    return x+y
    console.log('Hello World');   // The code after return statement is unreachable.
}
 let result = add(5,5)
// console.log(result);



function greeting(name = 'alish') {    // if user did not give input then this is default input
    return `Welcome ${name}`
}

// console.log(greeting());




// ++++++++++++++++ give unlimited input argument in function +++++++++++++++++
function shoppingCart(...val1) {
    console.log(val1);
}

// shoppingCart(100,200,900,700,800,672,872,907)




// ++++++++++++++++++++ give object as input argument in function ++++++++++++++++
const customer = {
    name: 'alish',
    age: 20,
    email: 'alish@google.com',
    country: "Nepal"
}

function user(x){
    console.log(`The name of customer is ${x.name} and his email address is ${x.email}`);
}

// user(customer)




// +++++++++++++++++++++ Give array as input argument in function +++++++++++++
let myArr = [10,90,80,63,827,633,837]

function printArr(arr){
    console.log(arr[0]);
}

printArr(myArr)