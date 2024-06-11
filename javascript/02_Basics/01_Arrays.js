//  +++++++++++++++++++++++++  Arrays   ++++++++++++++++++++++++++++++
let myArr = [2,9,6,1,7,3,6]
let myHeros = ['spiderman','ironman','batman','heroman']
let myArr2 = new Array(1,2,3,4,5,6)

// console.log(myArr);
// console.log(myHeros);
// console.log(myArr2);


// ++++++++++++++++++++++++ Arrays Methods +++++++++++++++++++++++++++++++

// myArr.push(100)    // Add element at last place
// myArr.pop()           // Remove last element
// myArr.unshift(100)     // Add element at first place
// myArr.shift()            // Remove first element
// console.log(myArr);
// console.log(myArr.includes(3));   
// console.log(myArr.indexOf(3));      // Shows index of 3

let newArr = myArr.join()    // It convert array into string
// console.log(newArr);
// console.log(typeof newArr);


// +++++++++++++++++++++++++++ Slice and Splice ++++++++++++++++++++++++++++++

console.log('A', myArr);

let sliceArr = myArr.slice(1,5)   // Slice does not manipulate original array
console.log(sliceArr);
console.log('B', myArr);

let spliceArr = myArr.splice(1,5)    // Splice manipulate original array.
console.log(spliceArr);
console.log('C', myArr);