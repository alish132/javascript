const car = ['lambo','ferrari','buggati']
const bike = ['KTM','BMW','Kawasaki']
const hero = ['ironman','superman','batman']

// car.push(bike)  // if we give array in push then it add array inside array
// console.log(car);

const carBike = car.concat(bike)  // It will add both array . Not most used
// console.log(carBike);

// +++++++++++++++++++ Spread Operator +++++++++++++++

const Automobile = [...car, ...bike, ...hero]   // This method is used to add multiple arrays.
// console.log(Automobile);


const Arr = [1,2,3,4,[6,7,8],0,9,[10,20,30,[40,50,60]]]
const newArr = Arr.flat(Infinity) // This method is used to merge arrays inside array in single array.
// console.log(newArr);



// console.log(Array.isArray(Arr));   // It Show given input argument is array or not.
// console.log(Array.from('alish'));     // It will make array of given input
// console.log(Array.from({name:'alish'}));



//  ++++++++++++++++ This method make the array of values from object.
let obj = {
    name: 'alish',
    country: 'Nepal',
    city: 'Nepalgunj',
    age: 20,
    qualification: '+2',
    skill: "Full stack developer"
}
const objValue = Object.values(obj)
console.log(objValue);