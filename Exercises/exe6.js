reandlineSync = require("readline-sync");
const {question} = require("readline-sync");
Number =  question("please choose a number larger than 10 ? ");
for(let i = 0 ; i < 5 ; i++) {
    while (Number < 10) {
        let num = question("please choose a number LARGER than 10 ? ");
        if (num > 10)
            console.log(" thank you ”");
    }
}
