// ++++++++++++++++++++++++++++   Map    ++++++++++++++++++++++++++++++++++
// We need to return the result

let number = [1,2,3,4,5,6,7,8,9]

// let result = number.map((item)=>{
//     return item+2

// })

// console.log(result);



// +++++++++++++++++++++++++   Chaining   +++++++++++++++++++++++++++++++

let newNum = number.map((num) => num*10).filter((num) => num>50)

console.log(newNum);