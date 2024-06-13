// Hoisting

one()    // Here we can run function before initialization
function one() {
    console.log('I am first function');
}




two()    //  when we declare function in variable then we can not run function before its initialization.
const two = function(){
    console.log('I am second function');
}