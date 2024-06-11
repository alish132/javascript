let score = 400
// console.log(score);

let newScore = new Number(400)
// console.log(newScore);

// console.log(score.toString());
// console.log(newScore.toFixed(2));

let num = 123.8736
// console.log(num.toPrecision(3));

let balance = 40000000
// console.log(balance.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++ +++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.01));
// console.log(Math.floor(4.99));
// console.log(Math.min(4,8,5,6,1,3));
// console.log(Math.max(4,8,5,6,1,3));

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);


//   Generating random number bewteen 10 and 20
let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random()*10)+min);