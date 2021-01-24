str = parsestring(prompt('Enter a string: '));
    strLength = str.length;
for (var i=0; i < strLength; i++) {
    str = str.replace(" ", "_*");
}
console.log(str);