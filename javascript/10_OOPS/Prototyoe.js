const heros = ['Ironman','Spiderman','Superman']

const user = {
    username: 'alish',
    email: 'alish@microsoft.com',
}
function greet(){
    console.log('Happy New year');
}

Object.prototype.alish = function(){  // all Objects can access this method
    console.log('I am present in all objects');
}
Array.prototype.printMe = function(){   // Only array can access this method
    console.log("I am only in Aray");
}
// heros.alish()  
// user.alish()
// greet.alish()  // function is also an Object so it can access alish method
// heros.printMe()


 // ==============>  Inheritance  <====================

const student = {
    name: 'harry',
    email: 'harry@google.com'
}
const teacher = {
    makeVideos : true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'Js asignment',
    fullTime: true,
    // __proto__: teachingSupport  // Now this object can access teachingSupport object.
}
// teacher.__proto__ = student // teacher can access student object

// =========> Modern syntex of inheritance  <================
Object.setPrototypeOf(teacher, student)
console.log(teacher.name);