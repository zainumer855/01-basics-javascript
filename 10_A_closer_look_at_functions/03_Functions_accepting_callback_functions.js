"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const wordUpperCase = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transform = function (str, fun) {
  console.log(`Transformed string: ${fun(str)}`);
  console.log(`Transformed by: ${fun.name}`);
};

// transform("JavaScript is the best language!", oneWord);

const capitalLetter = (str) =>
  str.replace(str.slice(0, 3), str.slice(0, 3).toUpperCase());

const transform2 = function (str, fun) {
  console.log(`Flight Number Fixed: ${fun(str)}`);
  console.log(`Fixed by: ${fun.name}`);
};

transform2(`rtx48`, capitalLetter);
