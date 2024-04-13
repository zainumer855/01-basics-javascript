"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetyHey = greet("Hey");

greetyHey("Zain");

greet("hi")("Bob");
