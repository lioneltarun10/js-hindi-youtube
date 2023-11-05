// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log("DB CONNECTED");
})(); // ; is used to tell the end of context of this IIFE , if ; is not
//used , it will not run the below code

//IIFE is used for stopping pollution from global scope


// unnamed IIFE
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('tarun')

