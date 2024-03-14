"use strict";

const resturant = {
  name: "Qulim",
  location: "D-ground, Faisalabad",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: [
    "Fish Cracker",
    "Supreme Nacho",
    "Wasabi Chiscken",
    "French Fries",
  ],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (stater, main) {
    return [this.starterMenu[stater], this.mainMenu[main]];
  },
};

// destructuring
const [cat1, cat2] = resturant.categories;
// console.log(cat1, cat2);

// how to skip element in array while destructuring
const [dish1, , dish3] = resturant.starterMenu;
// console.log(dish1, dish3);

// we can return more than 1 value from function with the help of destructing
const [stater, main] = resturant.order(1, 0);
// console.log(stater + ", " + main);

// how to destruct nested arrays
const [a, , [b, c]] = [4, 5, [6, 7]];
// console.log(a, b, c);

// mutating variables thorugh destruturing
let [item1, item2] = resturant.categories;
console.log(item1, item2);
[item1, item2] = [item2, item1];
console.log(item1, item2);
// default value
const [x = -1, y = -1, z = false] = [1, 4];
// console.log(x, y, z);
