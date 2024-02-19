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



// Using conditions inside functions

const calAge = birthYear => 2024 - birthYear;

const yearsLeftInRetirement = (birthYear, name) => {
    const age = calAge(birthYear);
    const retirement = 60 - age;

    if (retirement >= 0) {
        return `${name} will retire after ${retirement} years.`;
    }  else {
        return `${name} is already retired🎉`;
    }
}
console.log(yearsLeftInRetirement(2001, 'Zain'));
console.log(yearsLeftInRetirement(1950, 'Ali'));



// Arrays in javascript
// What is array???
// Array is a collection of data.

// how arrays are useful???
// what if we want to store students name in one variable? is that possible to store 5 names in one variable?? NO its not. here comes the data structure, their are atleast 2 data structure in javasctript (1) Arrays (2) Objects.

// normaly we would do this to store student names without arrays
const student1 = 'Zain';
const student2 = 'Ali';
const student3 = 'Yusaf';
const student4 = 'Bilal';
const student5 = 'Ahmad';

// but with arrays we will do like this
const students = ['Zain', 'Ali', 'Yusaf', 'Bilal', 'Ahmad'];
// console.log(students);
// see how this is convenient for us to store data🎉

// Their is another way to creat arrays
const fruits = new Array('Apple', 'Oranges', 'Grapes');
console.log(fruits);

// we can store different type of data in arrays
// const zain = ['Zain', 'Umer', 23, 'student', true ];
// console.log(zain);

//we can even store variables in array 
const fname = 'Zain'
// const zain = [fname, 'Umer', 23, 'student', true ];
// console.log(zain);

// as we know in array javascript expects expression hense we can perform calculations 
const zain = [fname, 'Umer', 2024-2001, 'student', true ];
// console.log(zain);

// Now we can get data out from array
// array have zero-based indexing which means we can use index of array within square bracket notations to access particular data.
console.log(zain[0]);
console.log(zain[1]);
console.log(zain[2]);

// to find the length of an array we use property called (.length)
console.log('length is:', zain.length);

// we can use this property to get last element in an array
console.log(zain[zain.length - 2]);

// lets calculate age using calAge function
const years = [1990, 2001, 2006, 2012, 2020, 2023];
const calAge = birthYear => 2024 - birthYear;
console.log(calAge(years[2]));
const age = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])]
console.log(age);

// we can mutate arrays but can't replace the whole array



// Arrays operations(Methods)

// Push Method
// used to add element at the end of an array
const friends = ['Zain', 'Ali', 'Yusaf', 'Bilal', 'Ahmad'];
console.log(friends);
// As we know push is function, it will return a value so lets see what it will return
const pushed = friends.push('Asad');
console.log(friends);
console.log(pushed); // so it will return new length of an array

// Unshift Method
// is used to add element at the begining of an array
const unshiftReturns = friends.unshift('Abdullah');
console.log(friends)
console.log(unshiftReturns) // also return the new length of an array

// Pop Method
// removes the element from the last
const popped = friends.pop();
console.log(friends)
console.log(popped) // will return the popped element

// Shift Method
// removes the element from the begining
const removedEle = friends.shift()
console.log(friends)
console.log(removedEle) // will return removed element


// to get the index of an element
console.log(friends.indexOf('Ali'));
// what if the element is not present 
console.log(friends.indexOf('Gulooo')); // will return -1


// Their is a similar method to indexOf but insted of returning the index it just return boolean value
// it was introduced in ES6
console.log(friends.includes('Ahmad'));
console.log(friends.includes('Joe'));
// this "includes" method work strictly eg. '23' === 23 -> false
friends.push('23');
console.log(friends.includes(23)); // false


// Objects
// are used to group related data 
// we can referance data by key value pairs which was not possible in arrays actually naming our elements 

const zain = {
    fname: 'Zain',
    lname: 'Umer',
    age: 2024-2001,
    job: 'Web Developer',
    friends: ['Ali', 'Yusaf', 'Bilal', 'Ahmad']
}

// we can create object in many ways but this is the simplest and easy way, also called objects litteral
// keys are also called properties and related elements are value
// if we want to retrive any property the order of data doesn't matter whereas order matters in array
 



const zain = {
    fname: 'Zain',
    lname: 'Umer',
    age: 2024-2001,
    job: 'Web Developer',
    friends: ['Ali', 'Yusaf', 'Bilal', 'Ahmad']
}

console.log(zain);

// Dot notation
// we can access propertiesfrom object with '.' 
console.log(zain.fname);
console.log(zain.age);
console.log(zain.friends[2]);

// Bracket notation
console.log(zain['job']);
console.log(zain['friends'][0]);
const frndLength = zain.friends.length;
console.log(zain['friends'][frndLength - 1]);
// const userInfo = prompt('Select the property you want: fname, lname, age, job, friends');
// if (userInfo) {
//     console.log(zain[userInfo]);
// } else {
//     console.log('Wrong request')
    
// }


const names = 'name';
console.log(zain['l' + names]);

// difference between dot and bracket notation
// main difference is of order 
// arrays are in form of order whereas in objects order doesn't matter.



// Object method
const zain2 = {
    fname: 'Zain',
    lname: 'Umer',
    birthYear: 2001,
    job: 'Web Developer',
    friends: ['Ali', 'Yusaf', 'Bilal', 'Ahmad'],
    hasDrivingLicense: false,

    // any function expression attached to object is called method.
    // calcAge: function(birthYear) {
    //     return 2024 - birthYear;
    // }

    // in method javascript allow us to use special keyword called 'this'
    // 'this' keyword or variable point to the object from which the method is invoked.
    // calcAge: function() {
    //     console.log(this)
    //     return 2024 - this.birthYear;
    // }

    // best pratice to write
    calcAge: function() {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
         this.userSummary = `${this.fname} is a ${this.age}-years old ${this.job}, and he has ${this.hasDrivingLicense? 'a' : 'no'} driver's license`;
         return this.userSummary;
    }
}

// const calAge = function(birthYear) {
//     return 2024 - birthYear;   
// }
console.log(zain2['calcAge']());
// console.log(zain.age);
// console.log(zain)

console.log(zain2.getSummary());
console.log(zain2);



// For Loop
// is used to perform any task repeatedly 
// starts with the initializer
// a condition
// and updating the currtent value based on condition


// lets print total days in a month
for(let rep = 1; rep <= 30; rep++){
    console.log(`Weight lifted repeations ${rep} 🏋️`);
}



// Looping Arrays
const zain = [
    'Zain',
    'Umer',
    2024-2001,
    'Web Developer',
    ['Ali', 'Yusaf', 'Bilal', 'Ahmad'],
    true
]

const type = [];

for(let i=0; i<zain.length; i++){
    // reading elements in array
    // console.log(zain[i], ` -> type is of: ${typeof zain[i]}`);

    // adding elements in a new array
    // type[i] = typeof zain[i];

    // their are many ways to add elements in new array
    type.push(typeof zain[i]);

}

console.log(type);

const years = [1990, 1999, 2001, 2004, 2012];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024-years[i]);
    
}

console.log(ages)

// continue and break

// continue
// will skip the current iteration based on condition and move to next iteration
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < zain.length; i++){
    if (typeof zain[i] !== 'string') continue;
    console.log(zain[i]);
}

// break
// will terminate the whole loop based on condition
console.log('--- BREAK ON NUMBER');

for (let i = 0; i < zain.length; i++){
    if (typeof zain[i] === 'number') break;
    console.log(zain[i]);
}

*/