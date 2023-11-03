// # primitive datatypes
// 7 types : String , Number, Boolean , null 
//, undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id == anotherId);

//const bigNumber = 34561879173917241n
console.log(typeof bigNumber );

// Is javascript stotic or dynamic type language?

// Reference (Non Primitive) types

//Arrays, Objects , Functions

const heroes = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"tarun",
    age:22,

}

const myFunction = function(){
   console.log("Hello World!");
}

//console.log(typeof anotherId);

// ++++++++++++++++++++++++

// Stack (Primitive) and Heap (Non-primitive)

let myYoutubename = "tarun"
let anotherName = myYoutubename
anotherName = "chai"

console.log(anotherName);
console.log(myYoutubename);

let user1 = {
    email:"user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "unnam@google.com"

console.log(user1.email);
console.log(user2.email);

