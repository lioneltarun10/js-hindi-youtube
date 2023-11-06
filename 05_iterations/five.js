const coding = ['js','ruby','java','python','cpp']

//foreach is a higher order function
//foreach is added as property of Array object
//callback function in foreach loop
// coding.forEach(function (val){
//    console.log(val);
// } )

// coding.forEach((item)=>{
//     console.log(item);
//  } )

//we can give an outside function as a callback function to the foreach
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//    console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:'javascript',
        languageFileName:"js"
    },
    {
        languageName:'java',
        languageFileName:"java"
    },
    {
        languageName:'python',
        languageFileName:"py"
    }
]
//forEach on objects
myCoding.forEach((item)=>{
   console.log(item.languageName);
   console.log(item.languageFileName);
})