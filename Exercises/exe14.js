let a = Array.from({length: 50}, () => Math.floor(Math.random() * 50)+1);
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
a = shuffle(a);
console.log(a);
let max = Math.max.apply(null, a);
let min = Math.min.apply(null, a);
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
  if (a[i] < min) {
    min = a[i];
  }
}
console.log(max);
console.log(min);