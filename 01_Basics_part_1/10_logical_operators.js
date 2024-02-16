'use strict' // treat all our js code by new version
/*

// Way of declaring variables in JavaScript

// reassigning variable / mutating a variable
let age = 22;
age = 23;
// console.log(age);

// can declare a variable without assigning any value
let score;
// console.log(score);

// variables which are immuatable
const birthYear = 2001;
// birthYear = 2002;
// console.log(birthYear); // TypeError: Assignment to constant variable.

// can't declare a variable without value
// const birthYear2;

// Similar to let keyword but with scope difference will learn later what is scope.
var isJavaScriptFun = 'Yes';
isJavaScriptFun = 'kind of😉';
console.log(isJavaScriptFun);


// Arathematic Operator
let currentYear = 2024;
const ageZain = currentYear - 2001;
const ageStranger = currentYear - 2006;
// console.log(ageZain, ageStranger);

// console.log(ageZain * 2, ageStranger / 2, 2**3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

// to concatenate a string we use + operator
const firstName = 'Zain';
const lastName = 'Umer';
const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// Assignment Operator
let x = 10 + 5;
x += 10; // x = x + 10
x -= 5; // x = x - 5
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x)

// Comparison Operator
// console.log(ageZain > ageStranger);
// console.log(ageZain < ageStranger);
const fullAge = 18;
// console.log(fullAge <= ageStranger - 2);



// Operator Precedence
let currentYear = 2024;
const ageZain = currentYear - 2001;
const ageStranger = currentYear - 2006;
// console.log(ageZain, ageStranger);

// console.log(currentYear - 2001 > currentYear - 2006); // How we would know which operator is exicuting first?

// by checking the precedence of an operator in obove example subtraction operator have high precedence of 11 than greater sign precedence of 9 that is why subtraction is executed first.

// here assignment operator has low precedence and executed from right-to-left
let x, y;
x = y = 25-10-5;
console.log(x, y);


// Strings and Template Literials

const firstName = 'Zain';
const lastName = 'Umer';
const age = 23;
const job = 'Website Developer';

// A normal string
// const info = 'My name is ' + firstName + ' ' + lastName + ". I'm " + age + " years old and I'm a " + job + '.';
// console.log(info);

// A template string
const info = `My name is ${firstName} ${lastName}. I'm ${age} years old and I'm a ${job}.`
console.log(info);

// temelate strings are also used for multiple line for string
// Normaly
console.log('multiple \n\
lines with \n\
template strings');

console.log(`multiple
lines with
template strings`);



// Conditional Statement
// used to take decisons in our code which provide us to take more control over our code

const age = 15;
if(age >=18){
    console.log(`You can drive 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young to drive! ${yearsLeft} years left for being able to drive :)`)
}

const birthYear = 2009;
let century;
if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}

console.log(century);



// Type Conversion
// Aesi conversion jo manually ki jaye by the programmer is called type conversion in javascript

// String to number
const age = '23';
// console.log(Number(age), age); // remember the original age variable is not converted into number.

// what if we convert a string which is logically can't be converted into number

const fname = 'Zain';
// console.log(Number(fname), fname);
// console.log(typeof NaN);

// Same goes with the number to string
const a = 85;
// console.log(String(a), a);

// Type Coercion
// console.log('I am ' + 23 + ' years old.');
// console.log('I am ' - 23 - ' years old.');
// console.log(`I am ${23} years old.`);

// console.log('15'+'3'+2+5+5);
// console.log('15'-'3'+2+5+5);
// console.log(2+2+5+'4'-5);
// console.log('4'*5);
// console.log('24'/5);



// Truthy and Falsy Values

// Falsy values
// falsy values are not exactly false but when they are converted into boolean they become falsy values.
// their are 5 falsy values in JS
// 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(''));

// everything else is a truthy value
// console.log(Boolean('string'));
// console.log(Boolean({}));

// So when they are converted into falsy values
// javascipt convert it automatically or by type coercion
// it happend when we use logical operator or by logical context.

let money = 452;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('Go get a job!');
// }

// to check if a variable has some value or not

let width = 0;
if (width) {
    console.log('width is defined');
} else {
    console.log('width is NOT DEFINED!');
}



// Equality Operator

// strict equality operator
// let age = '18';
// if(age === 18) console.log('You are adult (strict)');

// loose equality operator
// if(age == 18) console.log('You are adult (loose)');

const favourite = Number(prompt('What is your favourite number?'));
console.log(favourite); 
console.log(typeof favourite); 

if (favourite === 20) {
    console.log('20 is an amzaing number');
} else if(favourite === 12) {
    console.log('12 is also cool number');
} else if (favourite === 7) {
    console.log('7 is mahhh number bro!');
} else {
    console.log('Number is not 20 or 12 or 7');
}

if(favourite !== 20) console.log('Your are correct');



// Logical operator
// kya Umar ke pass drivivg license hai?
// kya Umar ke pass acha vision hai?
// kya Umar thaka va hai?

const hasDrivingLicense = true;
const hasGoodVision = true;

// const isUmar = hasDrivingLicense && hasGoodVision;


// if (hasDrivingLicense || hasGoodVision) {
//     console.log('Yo you will make it!!!');
// } else{
//     console.log('Not illegible');
// }

const isTired = false;

if (hasDrivingLicense && hasGoodVision && !isTired) {
        console.log('Yo you will make it!!!');
    } else{
        console.log('Not illegible');
    }

    */