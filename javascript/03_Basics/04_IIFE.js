// ++++++++++++++++++++++++++  IIFE   +++++++++++++++++++++++++

// Named IIFE (because it has name run())
(function run() {
    console.log("DATABASE CONNETCED SUCCESSFULLY:");   
})();    // Always give semicolon at end while writing multiple IIFE


// give Input parameter in IIFE
( (name)=>{
    console.log("Website loaded Successfully: ", name);
} )('alish')