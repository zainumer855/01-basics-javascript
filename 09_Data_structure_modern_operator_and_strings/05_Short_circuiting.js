"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (stater, main) {
    return [this.starterMenu[stater], this.mainMenu[main]];
  },

  orderDelivery: function ({
    status,
    time,
    location,
    starterIndex,
    mainIndex,
  }) {
    console.log(
      status,
      time,
      location,
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex]
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your dilicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (...numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);
  },
};

console.log(0 || "Zain");
console.log("" || 23);
console.log("23" || undefined);
console.log("hey" || "hoiii");
console.log(false || "" || null || 45);

restaurant.numGuest = 15;
// const guest = restaurant.numGuest || 10;

// Nullishing coalesing operator : null & undefined (NOT: '' or 0)
const guest = restaurant.numGuest ?? 10;
console.log(guest);

// console.log(0 && "Zain");
// console.log(12 && 16);
// console.log("score" && 23 && true && null && "hello");

// restaurant.orderPizza && restaurant.orderPizza(10, 26);
