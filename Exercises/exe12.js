function capitalizeVstrig(str)
{
    var Vstrig = ["a" , "e" , "i" , "o" , "u" , "y"];
    var newStr = new Array();
    for(var i=0; i < str.length; i++) {
        for(var x=0; x < Vstrig.length; x++) {
          newStr[i] = str[i];
          
          if (str[i] == Vstrig[x]) {
              newStr[i] = Vstrig[x].toUpperCase();
              break;
          }
      }
    }
    return newStr.join("");
}
const string = prompt(" Enter a string: "");
const value = capitalizeVstrig(string);
console.log(value);