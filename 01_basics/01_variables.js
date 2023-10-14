const   accountID=12345
let accountEmail="arvind@google.com"
var accountPassword="1234567890"
accountCity="Tundla"

// accountID=2
accountEmail="my@email.com"
accountPassword="54321"
accountCity="Agra"
let accountState;
console.log(accountID);
// Prefer not to use var because of issue in block scope and functional scope
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);
