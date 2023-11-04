function sayMyName(){
    
console.log('T');
console.log('A');
console.log('R');
console.log('U');
console.log('N');
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log('tarun');
}

addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)
const result = addTwoNumbers(3,5)

// console.log("result ", result);

function loginUserMessage(username= "sam"){
    // if(username === undefined){
     if(!username){
        console.log("please enter a username");
        return
    }

     return `${username} just logged in`
    
}

// console.log(loginUserMessage("tarun"))
console.log(loginUserMessage())