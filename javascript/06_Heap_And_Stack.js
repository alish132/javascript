// <---------------------------- stack Memory (Primitive datatype) ---------------------------->
// In stack memory the new value is asigned to the variable So if we make any changes in original value than it will not effect another value. Here in example if we make any changes in one variable than it will not effect another variable

let userOne = 'alish'
let userTwo = userOne
userOne = 'harry'

console.log(userOne);
console.log(userTwo);



// <------------------------------Heap Memory (Non-Primitive datatype) ------------------------->
// In Heap memory the referance of value is assigned to the variable and if we make any changes in reference or original variable than it will effect both values. Here in example if we make changes in one variable than it will effect another variable.

let obj1 = {
    company: 'Amazon',
    Country: 'USA',
    employee: 100000
}
let obj2 = obj1
obj2.company = "Microsoft"

console.log(obj1.company, obj2.company);