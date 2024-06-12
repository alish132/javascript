//    +++++++++++++++++++++++++++++++++ declearing multiple objects inside Object
const user = {
    email: 'Harry@google.com',
    country: {
        nepal: {
            city: {
                cityName: 'Nepalgunj',
                cityArea: '2000sqr'
            }
        }
    }
}
// console.log(user.country.nepal.city.cityArea);   


//   +++++++++++++++++++++++ Adding multiple objects. ++++++++++++++++++++++++
const obj1 = {1:'alish', 2:'harry', 3:'hitesh'}
const obj2 = {4: 'sam', 5:'rohan', 6:'manesh'}
const obj3 = {7:'mahesh', 8:'kapil', 9:'dipak'}

// const result = {obj1,obj2}    add object inside another object
// const result = Object.assign({},obj1,obj2)    // add multiple objects in single object but without empty curly bracket it manipulate first original object.
const result = {...obj1,...obj2,...obj3}   // This is the most efficient way to add multiple objects.

// console.log(result);


// ++++++++++++++++++ Objects inside of array 
const myarr = [
    {
        id: 9003,
        email: 'alish@google.com'
    },
    {
        id: 9003,
        email: 'harry@google.com'
    },
    {
        id: 9003,
        email: 'sam@google.com'
    }
]

myarr[0].email = 'alish@microsoft.com'
// console.log(myarr[0].email);  //    This is the method to Access objects inside of array

// console.log(Object.keys(obj1));   // It is used to access keys of Object
// console.log(Object.values(obj1));   /// It is used to access values of Object.
// console.log(Object.entries(obj1));   // This method put every key, value in separate array inside Array.

// console.log(obj1.hasOwnProperty('email'));  // Shows given property is in object or not.

console.log(obj1);