"use strict";

// hum string ko alag alag kr rhy hain in the basis of the argument we provide (or wo argument string me exsist krna chayie)
const randomStr = "I+love+problem+solving";
console.log(randomStr.split("+"));

// myName wali string ko split kiya space ki base pr
const myName = "Zain Umer".split(" ");
// const myName = "Zain Umer";
// console.log(myName.split(" "));
console.log(myName);

// jesa ke split humy array return krti hai to it can be very powerful, we can destruct imidiatily
const [firstName, lastName] = myName;
console.log(firstName, lastName);

const newName = [`Mrs.`, firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const captalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const currN of names) {
    // namesUpper.push(currN[0].toUpperCase() + currN.slice(1));
    namesUpper.push(currN.replace(currN[0], currN[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
captalizeName("muhammad zain ul abideen");

//padding
const padText = "padding text";
console.log(padText.padStart(20, "+").padEnd(30, "->"));
console.log("zain".padStart(20, "+").padEnd(30, "->"));

const cardNumber = function (number) {
  const strArr = [];
  let str;
  if (typeof number === "Object") {
    for (const item of number) {
      strArr.push(item + "");
      str = strArr.join(" ");
    }
  }
  str = number + "";
  const last = str.slice(-4);
  console.log(last.padStart(str.length, "**** "));
};

const num = [4548, 3302, 1548, 7421];
console.log(...num);
cardNumber(num);
cardNumber("9865 2036 4813 9667");

//repeat
const message = "All flights are delaid due to storm ".repeat(3);
console.log(message);
