// const arr = []
// %DebugPrint(arr)

// Types of array :  Continious(Packed) , Holey(spaces in arry)

// both Continious and holey array are these 3 types
// SMI (small integer) // Most optimized . Includes only numbers not float also.
// Packed elements
// Double (float, string, function)

const arrayTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrayTwo.push(6.5)
// PACKED_DOUBLE_ELEMENTS

arrayTwo.push('7')
// PACKED_ELEMENTS

arrayTwo[10] = 11
// holey_ELEMENTS

// console.log(arrayTwo);
// console.log(arrayTwo.length);
// console.log(arrayTwo[9]);

// ===> How js find element is in array or not.
// bounce check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// Holes are very expensive in js

// Optimization
// SMI > DOUBLE > PACKED
// HOLE_SMI > HOLE_DOUBLE > HOLE_PACKED

// for, for-of, for-Each  // Always use prebuild methods