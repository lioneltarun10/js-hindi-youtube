const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by app'
}

// for in loop

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=['js','rb','py','java','cpp']

for (const key in programming) {
    //  console.log(programming[key]);   
}

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')

// Map is not iterable with For In loop
for (const key in map) {
    console.log(key);
}