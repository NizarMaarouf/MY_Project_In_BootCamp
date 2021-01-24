const reandlineSync = require("readline-sync");
const userName = reandlineSync.question('May I have your name? ');
console.log("Welcome Welcome To The Quiz your name is : " + userName + " Good Luck!!!!");
const question = [
    question : "Inside which HTML element do we put the JavaScript??",
    answers: {
        a: "js",
        b: "scripting",
        c: "javascript",
        d: "script"
},
correctAnswer: "a"
},
{
    question: " How to write  an IF statement in javascript?" ,

        answers: {
    a: " if i=5 then",
        b: " if i=5",
        c: " dif i==5 then",
        d: " if(i==5)"
},
    correctAnswer: "d"
},
{
    question: "How do you write 'Hello World' in an alert box?",
        answers: {
    a: "msg('Hello World');",
        b: "alert(Hello World');",
        c: "msgBox(Hello World');",
        d: "alert(Hello World');"
},
    correctAnswer: "b"
},
{
    question: "How do you call a function maned 'myFunction' ?",
        answers: {
    a: "call function myFunction()",
        b: "call myFunction()",
        c: "myFunction()",
        d: "myFunction myFunction()"
},
    correctAnswer: "c"
},
{
    question: "How do you create a function in javascript?",
        answers: {
    a: "function myFunction()",
        b: "function = function myFunction()",
        c: "function : function myFunction()",
        d: "Function = myFunction()"
},
    correctAnswer: "a"
}
]