// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "tarun"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "tarun",
            lastname: "unnam"
        }
    }
}

//optional chaining
console.log(regularUser.fullname?.userfullname.firstname);

const obj1 ={
    1:'a',2:'b'
}
const obj2 ={
    3:'a',4:'b'
}
const obj4 ={
    5:'a',6:'b'
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// there's difference between both
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {
    ...obj1,...obj2,...obj4
}

// console.log(obj3);
// console.log(obj1);

const users = [
    {
        id:1,
        email:'tarun@gmail.com'
    },
    {
        id:1 ,
        email:'tarun@gmail.com'
    },
    {
        id:1 ,
        email:'tarun@gmail.com'
    }
]

// console.log(users[1].email);

console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "tarun"
}
// Object Destructuring
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//Destructuring in React example
// const navbar = ({company}) =>{

// }

// navbar(company = "tarun")

//JSON
// {
//     "name":'tarun',
//     "coursename": 'js in hindi',
//     "price": 'free'
// }

// JSON as a array
// [
//     {},
//     {},
//     {}
// ]