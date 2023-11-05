const user ={
    username: "tarun",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "tarun"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = 'tarun'
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = 'tarun'
    console.log(this);
}

// chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

//Explicit return - when return keyword is used
// Implicit Return - when no return keyword is used
// const addTwo = (num1,num2) => num1 + num2
// If curly braces are used in arrow function , return keyword is a must
// If parenthesis is used , no need to use return keyword

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) =>( {username: "tarun"})
// To return an object , we need to use parenthesis for sure

console.log(addTwo(3,4));

const myArray = [2,5,3,7,8]
//use of arrow function with arrays
myArray.forEach(()=>{})