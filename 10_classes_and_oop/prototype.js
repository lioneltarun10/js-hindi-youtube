// let myName = "tarun   "
// let myChannel = "chai   "

// console.log(myName.truelength);


let myHero = ['thor','spiderman']


let heroPower = {
    thor:'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.tarun = function(){
    console.log('tarun is present in all objects');
}

Array.prototype.heytarun = function(){
    console.log('tarun says Hello!!');
}
//  heroPower.tarun()

// myHero.tarun()
// myHero.heytarun()
// heroPower.heytarun()

// inheritance

const User = {
    name:"chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

//Modern approach
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiAurCode  "

String.prototype.truelength = function(){
     console.log(`${this}`);
    
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.truelength()
"tarun".truelength()
"icetea".truelength()