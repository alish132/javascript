// Simple Comparison
console.log(2 > 1);
console.log(2 >=1 );
console.log(2 <1 );
console.log(2 == 1);
console.log(2 != 1);



console.log("3" > 2);  //Result => true //Because js automatically convert string into number.
console.log("3" == 3);  // Result => true //Because js automatically convert string into number.
console.log("3" === 2);  //Result => false  //Beacuse here due to triple equal === js does not convert string into number and it compare boths datatype.


/// Always Avoid this type of comparison.
console.log(null > 0);
console.log(null == 0);
console.log(null > 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);