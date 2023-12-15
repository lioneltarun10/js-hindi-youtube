//Object literal

const user = {
    username:"tarun",
    loginCount:8,
    signedIn:true,
    getUserDetails : function(){
        // console.log('Got User details from database');
        //console.log(`Username: ${this.username}` );
        console.log( this);
    }
}

// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    //return this
}

const userOne = new User('tarun',12,true)
const userTwo = new User('chai',11,false)
console.log(userOne.constructor);
// console.log(userTwo);