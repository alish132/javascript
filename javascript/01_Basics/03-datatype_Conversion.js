// Conversion of other dataTypes in Number 
let score = ""
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"20" => 20
//"20abc" => NaN
// true => 1 ; false => 0
// null => 0
// undefined => NaN



// Conversion of other dataTypes in Boolean
let loggedIn = ""
let bool = Boolean(loggedIn)
// console.log(typeof bool);
// console.log(bool);

// 1 => true; 0 => false;
// "" => false
// "alish" => true



// Conversion of other dataTypes in String
let num = 20
let numString = String(num)
// console.log(typeof numString);
// console.log(numString);



// *************************************Operations***********************************

// console.log(2+3);    
// console.log(2-3);
// console.log(2*3);
// console.log(2**3);     //The power of 2 is 3
// console.log(4/2);
// console.log(9%2);      //Show the remainder


// console.log("1"+2);
// console.log(2+"1");
// console.log("1"+2+3);    //result => 123  beacuse the string came first so it align all elements instead of adding
// console.log(2+3+"1");     // result => 51 because the number came first so it add number and align that number with string.


// console.log(+true);  // result => 1    // Always avoid this type of writing
// console.log(+false);   //result => 0    // Always avoid this type of writing


// let num1, num2,  num3;       Define multiple variables in single line.
// num1 = num2 = num3 =2+2
// console.table([num1,num2,num3])



let a = 67;
let b = a++;
// console.log(a,b);  //output => 68,67  // The value of a is 67 and that value of a is assigned to b before incrementing So at last the value of b is 67 and a is 68 because its value increment. 

let x = 10;
let y = ++x
console.log(x,y);    //Output => 11,11 //The value of x is 10 and that value of x is assigned to y after increment which is 11 So the value of both x and y is 11.