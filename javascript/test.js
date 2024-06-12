const obj1 = {1:'alish', 2:'harry', 3:'hitesh'}
const obj2 = {4: 'sam', 5:'rohan', 6:'manesh'}
const obj3 = {7:'mahesh', 8:'kapil', 9:'dipak'}

// let result = {obj1, obj2}
// let result = {...obj1, ...obj2}
let result = Object.assign({}, obj1, obj2,obj3)

console.log(result);
console.log(result==obj1);