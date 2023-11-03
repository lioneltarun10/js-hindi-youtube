const name = 'tarun'
const repoCount = 50
//console.log(name + repoCount + " Value");
//don't use above syntax for string manipulation

//use back ticks ``
//string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('tarun-ut-com')

// console.log(gameName[0]);
// console.log(name[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('t'));

// let newString = gameName.substring(0,7)
// console.log(newString);

// let anottherString = gameName.slice(-7,5)
// console.log(anottherString);

const newStringOne = "  tarun a "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tarun.com/tarun%20unnam"

console.log(url.replace('%20','-'));

console.log(url.includes('sa'));

console.log(gameName.split('-'));
