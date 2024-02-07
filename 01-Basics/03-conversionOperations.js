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

// let month = 2;

// let toString = String(month);

// console.log(toString);

// *********************** Operations ***********************

// Basic Operations
/*
console.log(2+2); // Addition
console.log(2-2); // Subtraction
console.log(2/2); // Division
console.log(2*2); // Multiplication
console.log(2**2); // Power of
console.log(2%2); // Modulus
*/

// concatenation
let fname = 'Zain';
let lname = 'Umer';
let fullName = 'Zain ' + 'Umer';
// console.log(fullName);

// let testing = 1 + 1; => 2
// let testing = "1" + 1; => "11"
// let testing = 1 + "1" + 2; => "112"
// let testing = "1" + 2 + 1; => "121" why JavaScript???
// let testing = 1 + 2 + "1"; => "31"
// console.log(testing);

// let s = "12:40:22AM";

// const hoursString = s.slice(0, 2);
// const hours = Number(hoursString);
// // console.log(hours);
// let pmAM = s.slice(8); 
// // console.log(pmAM);
// let currentHours = 0;
// // console.log(currentHours);

// if(hours < 12 && pmAM == "PM"){
//     currentHours = hours + 12;
//     let addCurrentHours = s.replace(hoursString, currentHours);
//     // console.log(addCurrentHours);
//     let finalStr = addCurrentHours.replace(pmAM, '');
//     console.log(finalStr);
// } else if(hours == 12 && pmAM == "AM"){
//     currentHours = hours - 12;
//     let addZero = "0" + currentHours;
//     let addCurrentHours = s.replace(hoursString, addZero);
//     // console.log(addCurrentHours);
//     let finalStr = addCurrentHours.replace(pmAM, '');
//     console.log(finalStr);
// } else if(hours == 12 && pmAM == "PM"){
//     let removePM = s.replace(pmAM, "");
//     console.log(removePM);

// }

// let n = 15;

// for(let i=1; i<=n; i++) {
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     } else if(i%3==0 && !i%5==0){
//         console.log("Fizz");
//     } else if(!i%3==0 && i%5==0){
//         console.log("Buzz");
//     } else{
//         console.log(i);
//     }
// }

// const arr = [5,3,2,4,1];
// const sortArr = arr.sort();
// const findMedian = Math.floor(sortArr.length / 2);
// let median = sortArr[findMedian];
// console.log(median);

// let myNumb = 252n;
// let myNumbb = 8;
// console.log(myNumb + myNumbb)
// // console.log(myNumb)

// let age = 19;
// let firstname = "Zain";

// let drive = age >= 60 ? "You're too Old to drive!😞 "
//             : age >= 18 ? "Drive!😛 " + firstname
//             : "Where is your cycliiiii???🧐"

// console.log(drive)
// let age = 18;
// let cars = 4;
// let keys = 1;
// if(age>18 && cars<=3  || keys<=2){
//     console.log("heavy driver");
//     }

// let month = 12;

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2: 
//         console.log("Febuary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December 🎂");
//         break;
//     default:
//         console.log("Invalid Month!")
//         break;
// }


// let n = 10;
// let sum = 0;
// let i = 1;

// while (i<=10) {
//     sum += i;
//     i++;
// }

// console.log(`current value of i is ${i}`);
// console.log(sum)

// const a = [1,2,3,4,3,2,1]
// const sortArr = a.sort((a, b) => a-b)
// let akelaIntiger = 0;

// for (const ele of a) {
//     akelaIntiger ^= ele;
//     console.log(akelaIntiger)
// }

// console.log(akelaIntiger)


// let n = 4;
// function pattern(n) {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }
//         console.log();
//     }
// }

// console.log(pattern(4));

// function pattern(n) {
//     for (let row = 1; row <= n; row++) {
//         for (let col = 1; col <= n-row+1; col++) {
//             process.stdout.write("* ");
//         }
//         console.log();
//     }
// }

// console.log(pattern(5));

// let num = 3;

// for (let row = 1; row <= num; row++) {
//     // for (let spaces = 0; spaces <= num; spaces++) {
        
        
//     // }

//     for (let col = 1; col <= row; col++) {
//         // process.stdout.write(col);
//         console.log(col)       
//     }
//     console.log();
    
// }

// function findDiagonals(matrix) {
//     const mainDiagonal = [];
//     const secondaryDiagonal = [];
//     const n = matrix.length;
//     console.log(n)

//     // Main Diagonal
//     for (let i = 0; i < n; i++) {
//         mainDiagonal.push(matrix[i][i]);
//     }

//     // Secondary Diagonal
//     for (let i = 0; i < n; i++) {
//         secondaryDiagonal.push(matrix[i][n - 1 - i]);
//     }

//     return { mainDiagonal, secondaryDiagonal };
// }

// // Example 2D array
// const matrix = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ];



// const { mainDiagonal, secondaryDiagonal } = findDiagonals(matrix);
// console.log("Main Diagonal:", mainDiagonal);
// // console.log("Secondary Diagonal:", secondaryDiagonal);

// let ltrDiagonalSum = 0;
// let rtlDiagonalSum = 0;

// for(let item of mainDiagonal) {
//   ltrDiagonalSum += item;
// }

// for(let item of secondaryDiagonal) {
//   rtlDiagonalSum += item;
// }

// let absoluteDifference = Math.abs(ltrDiagonalSum - rtlDiagonalSum);


// console.log(ltrDiagonalSum, rtlDiagonalSum)
// console.log(absoluteDifference)

// const arr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ];

// function diagonalDifference(arr) {
//     // Write your code here
//     const mainDiagonal = [];
//     const secondaryDiagonal = [];
//     const arrLength = arr.length;
    
//     for(let i=0; i< arrLength; i++) {
//         mainDiagonal.push(arr[i][i]);
//     }
    
//     for(let i=0; i< arrLength; i++) {
//         secondaryDiagonal.push(arr[i][arrLength-1-i]);
//     }
    
//     let mainSum = 0;
//     let secondarySum = 0;
    
//     for(let item of mainDiagonal){
//         mainSum += item;
//     }
    
//     for(let item of secondaryDiagonal){
//         secondarySum += item;
//     }
    
//     const absoluteDiff = Math.abs(mainSum - secondarySum);
    
//     return absoluteDiff;

// }

// console.log(diagonalDifference(arr))

// let num = 12165484613516544874325135145453n;
// console.log(typeof num)
// let num2 = BigInt(121654846135165448743251);
// console.log(typeof num2)

// let num = 10;
// let sum = 0;
// let i = 0;

// while(i<=num){
//     sum += i;
//     i++;
// }

// console.log(sum);
// console.log(i);

// let num = 10;
// let total = (num*(num+1)/2);
// console.log(total);

// let num = 10;

// let total = 0;

// for (let i = 0; i <= num; i++) {
//     total += i;
// }

// console.log(total)

// let pocketMoney = 3000;
// for (let date=1; date<=30; date++) {
//     if (date%2==0) {
//         continue;
//     }
//     if (pocketMoney==0) {
//         console.log("Your don't have enough money!");
//         break;
//     }

//     console.log("Date: "+ date + " Go Out Today!")
//     pocketMoney -= 300;
// }
// let startNum = 1;
// let endNum = 100;

// for (let num = startNum; num < endNum; num++) {
//     let i;
//     for (i = 2; i <= num; i++) {
//         if (num%i==0) {
//             let prime = i==num ? `${num} is a Prime` : `${num} is not Prime. It is divisible by ${i}`;
//             console.log(prime);
//             break;
//          } 
//      }
// }

let fruits = ["apple", "mango", "grapes"];
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// .push() method adds element at the end of the array.
// fruits.push("banana")
// console.log(fruits);

// .pop() method removes element from the end of the array.
// console.log(fruits);
// console.log(fruits.pop())

// .toString() is used to convert array to string
// let strFruits = fruits.toString();
// console.log(strFruits);

// .includes() check if the element is present and return in true or false
// console.log(fruits.includes("apple"));
// let isfruit = fruits.includes("grapes");
// console.log(isfruit)

// .indexOf() returns index of provided argument and return -1 if that element doesn't exsist.
// console.log(fruits.indexOf('grapes'));

// .join() join the array with the given separator
// console.log(fruits.join('-'));

// .splice(3, 2, "kinnuuuu") adds element on given index as well as index from where to start
// console.log(fruits);
// fruits.splice(3, 2, "kinnuuuu");
// console.log(fruits);

// remove element from begining and return that element
// fruits.shift();
// console.log(fruits)
// add element in the begining 
// fruits.unshift("apple2")
// console.log(fruits)

// let s = "face";
// let strArr = s.sort((a,b) => a-b);
// console.log(strArr)
