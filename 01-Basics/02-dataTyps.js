"use strict"; // treat all our JS code by new version 

// Data types

// Numbers
let age = 23;
console.log(typeof(23));

// String
let name = "Zain";
console.log(typeof("Zain"));

// Boolean -> true or false
let formSubmit = true;
console.log(typeof(formSubmit));

// Undefined -> when variable is not assigned
let rollNum;
console.log(typeof(rollNum));

// NaN -> is not a number
function chechNum(x) {
    if (isNaN(x)) {
        return NaN;
    }
    return x;
}
console.log(chechNum('notANumber'));

// null -> standalone value or an empty value
console.log(typeof(null));

//symbol -> unique
