// *********************** Conversion ***********************

let score = " ";

let toNumberScore = Number(score);

// console.log(toNumberScore);
// console.log(score);
// console.log(typeof toNumberScore);

// "45" => 45 | type = number
// "45abc" => NaN | type = number
// "empty" => 0 | type = number
// true => 1  false => 0 | type = number

let isLoggedIn = " ";

let toBoolean = Boolean(isLoggedIn);

// console.log(toBoolean);
// console.log(isLoggedIn);
// console.log(typeof toBoolean);

// 1 => true 0 => false | type boolean
// "somevalue" => true | type boolean
// "empty" => false | type boolean

let month = 2;

let toNumber = String(month);

console.log(toNumber);

// "7" => 7 