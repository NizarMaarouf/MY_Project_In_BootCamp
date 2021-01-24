require("readline-sync");
const {question} = require("readline-sync");
function logNumberInName() {
 let switcher = question("Place Enter a number: ");
 if (switcher > 9 || switcher < 0) {
  switcher = question("Please Enter a Number between 0-9 : ");
 }
 switch (switcher) {
  case '0' :
   console.log("Zero");
   break;
  case '1' :
   console.log("One");
   break;
  case '2' :
   console.log("Two");
   break;
  case '3' :
   console.log("Three");
   break;
  case '4':
   console.log("Four");
   break;
  case '5':
   console.log("Five");
   break;
  case '6':
   console.log("Six");
   break;
  case '7':
   console.log("Seven");
   break;
  case '8':
   console.log("Eight");
   break;
  case '9':
   console.log("Nine");
   break;
  default :
   console.log("Please Enter a Number between 0-9 !");
 }
}
logNumberInName();