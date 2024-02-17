'use strict';
/*
// make it eaiser for us to write scure code
// use strict mode allow us to forbids certain changes 
// help us from making errors and bugs and to write cleaner code
// without strict mode javascript will ignore certain bugs
// we can't use reserved words by activating strict mode

let isLoggedIn = false;
const password = true;

if(password) isLogedIn = true;
if(isLoggedIn) console.log('Welcome to your account');
console.log(isLoggedIn);

let interface = 'Video';
console.log(interface);



// Functions in javascript
// are chunk of code that we can reuse again and again
// function -> is a keyword to write functions
// function name -> is used to give name to functions
// funcName() -> () are called func parameters like inputs where the values are recevied or stored so that we can use in our function
// func body -> {} is where we write code in between curly brackets that will execute.
// how to access func -> by calling, invoking or running like this funcName().
// funcName(arguments) -> (4, 'abc') we pass actual values when invoking a funtion these values are known as arguments

function demo(){
    console.log('Functions are very useful')
}

// calling / invoking / running
// demo();
// demo();
// demo();

function juicerMachine(fruitName1, fruitName2, fruitQuantity1, fruitQuantity2, juiceName){
    console.log(`${fruitName1}: ${fruitQuantity1} ${fruitName2}: ${fruitQuantity2}`);

    const juice = `Your ${juiceName} is made with ${fruitQuantity1} ${fruitName1} and ${fruitQuantity2} ${fruitName2}. Thank You for your order!😃`;
    return juice;
}

const juice = juicerMachine('apples', 'orange', 2, 1, 'Fruit Fusion Blend');
console.log(juice);



// Function Declaration
// writing a normal function is called function declaration

// function abc() {
//     return 'Zain';
// }

// Function Expresson or annonemous function
// when we store a function without name into a variable is know as function expression or annonemous function
// we call it expression bcoz expression produces value and value ofcourse can be stored in a variable

// const reandomFun = function() {
//     console.log('chluu mulluuuuu');
// }

// Difference b/w function declaration and expression
// func declaration can be accessed before it is declared this is what we call hoisting in javascript.

abc();

function abc() {
        console.log('Zain');
    }

// but func expression can't accessed before initialization

// console.log(reandomFun);

const reandomFun = function() {
    console.log('chluu mulluuuuu');
}



// Arrow function
// is a shortest way to write function expression
// uasually it is completed in one line

const calAge = birthYear => 2024 - birthYear;
const age = calAge(2001)
// console.log(age);

// what if you want to write more line of code inside arrow function???

// lets calculate years left in retirement
const yearsLeftInRetirement = (birthYear, name) => {
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return `${name} will retire after ${retirement} years.`;
}
const zainRetirement = yearsLeftInRetirement(2001, 'Zain');
const aliRetirement = yearsLeftInRetirement(1991, 'Ali');
console.log(zainRetirement);
console.log(aliRetirement);

// What is the main difference b/w arrow func vs func declaration or func expression?

// The difference is arrow func does not use "this" keyword.



// Functions calling functions

const cutFruitPieces = fruit => fruit * 4;

function juicerMachine(apple, orange, juiceName){
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);

    return `Your ${juiceName} is made with ${applePieces} pieces of apple and ${orangePieces} pieces of orange. Thank You for your order!😃`;
}

console.log(juicerMachine(2, 3, 'Fruit Fusion Blend'));

*/