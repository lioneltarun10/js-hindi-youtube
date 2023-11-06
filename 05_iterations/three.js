// for of loop
//array specific loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"

for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')

console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// use array destructuring for key , value at sametime
for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject = {
    'game1':'NFS',
    "game2":'Spiderman'
}

//Object is not iterable with object destructuring
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }