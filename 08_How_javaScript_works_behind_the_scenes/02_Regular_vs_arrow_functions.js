"use strict";
// var firstName = "Zain";
// console.log(this);
const zain = {
  firstName: "Zain",
  year: 2001,
  calcAge: function () {
    // console.log(2024 - this.year);

    // const setThis = this;
    // const ismillenial = function () {
    //   console.log(setThis);
    //   console.log(`Hello ${setThis.firstName}`);
    // };

    const ismillenial = () => {
      //   console.log(this);
      //   console.log(`Hello ${this.firstName}`);
    };
    ismillenial();
  },

  greeting: () => {
    // console.log(this);
    // console.log(`Hey ${this.firstName}`);
  },
};

zain.greeting();
zain.calcAge();

// Primitive types
let age = 23;
let oldAge = age;
age = 24;
console.log(oldAge);
console.log(age);

// Referance types (Objects)
const me = {
  firstName: "Zain",
  age: 23,
};

const friend = me;
friend.age = 18;

console.log("Friend", friend);
console.log("Me", me);

// Coping objects
const sarah = {
  firstName: "Sarah",
  lastName: "Ali",
  age: 22,
  family: ["Bob", "Peter"],
};

const sarahCopy = Object.assign({}, sarah);
sarahCopy.lastName = "Hassan";
sarahCopy.family.push("David", "Steven");
console.log("Sarah", sarah);
console.log("SarahCopy", sarahCopy);
