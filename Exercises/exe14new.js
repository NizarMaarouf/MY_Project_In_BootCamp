require("readline-sync");
const {question} = require("readline-sync");
let SIZE = question("Place Enter a number: ");//size is the array length.
while (SIZE > 50) {
    SIZE = question("Please Enter a number between 1 - 50 : ");
}
    arr = Array.from({length: SIZE}, () => Math.ceil(Math.random() * 50));
    console.log(arr);
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    console.log(max);
    console.log(min);


