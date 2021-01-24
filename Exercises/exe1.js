const reandlineSync = require("readline-sync");
const myName = {firstname: "Nizar", lastname: "Maarouf"};
console.log(myName);

const userName = reandlineSync.question('May I have your name? ');
console.log(`Welcome your name is : ${userName}!`);