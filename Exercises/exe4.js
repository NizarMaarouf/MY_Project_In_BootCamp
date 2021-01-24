// בבקשה תן ציון על העבודה הזאת איך היא אני התעייפתי מאוד
reandlineSync = require("readline-sync");
const {question} = require("readline-sync");
const numInt =  question("How many people are you going with? ");
num = parseInt(numInt )+1;
console.log("So You Want a table for " , num, " people  , Welcome To The Restaurant ");
{
    answer = question('Should it be Kosher? ',
        {
            trueValue: ['yes', 'yeah', 'yep', 'y'],
            falseValue: ['no', 'nah', 'nope', 'n']
        });
    if (answer === true) {
        answer = question('Should it be Kosher Lemehadrin ? ',
            {
                trueValue: ['yes', 'yeah', 'yep', 'y'],
                falseValue: ['no', 'nah', 'nope', 'n']
            });

        if (answer === false) {
            console.log('you want a Kosher food  but Not Kashrut Lemehadrin ');
        }
        console.log('Its ok...you want Kosher Lemehadrin ');
    }
    else console.log('you want a food  Not Kosher and Not Kashrut Lemehadrin ');
}
const readlineSync = require('readline-sync');
food = ['LVegetables', 'Fruits', 'Meat and poultry', 'Fish and seafood', 'Dairy foods', 'Eggs'];
index = readlineSync.keyInSelect(food, 'Which food?');
console.log('Ok ,  ' + food[index] + ' We will bring the food to your table. ');


