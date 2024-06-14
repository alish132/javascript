let score = function(){}

if(score){
    console.log('Score is correct');
}else{
    console.log("Score is not correct! please try again!");
}

// Falsy value
// ====> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value
// ====> "0", 'false', " ", [], {}, function(){}



// +++++++++++++  Nullish Coalescing Operator (??): null, undefined
let val;
// val = 5 ?? 10
// val = null ?? 200
// val = undefined ?? 300
val = null ?? 200 ?? 100

console.log(val);



// +++++++++++++++++++ Terniary operator   ++++++++++++++++++++++++++++++++++++
 
// condition ? true: false

const price = 5000
price < 1000 ? console.log('Price is Reasonable!'): console.log('It is so expensive!');;