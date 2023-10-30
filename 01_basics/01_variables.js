const accountId = 144553
let accountEmail = "tarun@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2  // not allowed

accountEmail = "hc@gmail.com"
accountPassword="21212121"
accountCity = "Bengaluru"
let accountState;
console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);