// ++++++++++++++++++++++++++++++++++++++  Dates ++++++++++++++++++++++++++++++++++++++++++++

let myDate = new Date()

console.log(myDate);
console.log(typeof myDate);
console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());


// ++++++++++++++++++++++++++++++++++++ Creating my Own Date ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2020-01-15")
// let myCreatedDate = new Date("01-14-2020")

console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let myTimeStamp = Date.now()
let myCreatedDate = new Date("01-14-2020")

console.log(myTimeStamp);   // It shows the total time from 1970 to present in milliseconds.
console.log(myCreatedDate.getTime());  // It Shows the total time from 1970 to myCreatedDate that is 2020 in milliseconds.


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let newDate = new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getTime());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
}))