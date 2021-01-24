const reandlineSync = require("readline-sync");
const {question} = require("readline-sync");
SIZE = question("Place Enter a number: ");//size is the array length.
arr = Array.from({length: SIZE}, () => Math.floor(Math.random() * SIZE) + 1);
function shuffle(array) {
    let tmp, current, top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
}
arr = shuffle(arr);
console.log(arr);
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);
console.log(max);
console.log(min);

