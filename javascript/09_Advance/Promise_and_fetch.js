// ===========>  Promise 1  <==================
// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     // DB calls, cryptography, network calls
//     setTimeout(function(){
//         console.log('Async task completed');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){  //  .then is connected with resolve
//     console.log('Promise Consumed');
// })

// ================>  Promise 2  <==================
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Second Asyn complete');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Successfully task 2 resolved');
// })

// ==================>  Promise 3  <===================
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({name:'alishMagar', email:'alish@google.com', address:'Nepalgunj'})
//     }, 1000);
// })
// promiseThree.then(function(data){
//     console.log(data.address);
// })

// ====================>  Promise 4  <======================
// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false
//         if (error == false) {
//             resolve({ name: 'Hitesh Choudhary', email: 'hitesh@microsoft.com' })
//         } else {
//             reject('Error: Something unexpected happen!')
//         }
//     }, 1000);
// })
// promiseFour.then((data)=>{
//     console.log(data);
//     return data.email
// }).then((email)=>{
//     console.log(email);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('The promise is either resolved or reject');
// })

// ====================>  Promise 5 (async wait) <===================
// SameWorking as promise 4 but this time with async await.
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true
//         if (error == false) {
//             resolve({ name: 'Hitesh Choudhary', email: 'hitesh@microsoft.com' })
//         } else {
//             reject('Error: Something unexpected happen!')
//         }
//     }, 1000);
// })
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()


// ===================> Pratical use of async wait and .then <================
// ============>  Getting data from api with async await  <===================
// async function getData() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()  // this also take time so await it 
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData()

// ==============> Getting data from api with .then  <==============
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()  // Convert response into json(object)
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})