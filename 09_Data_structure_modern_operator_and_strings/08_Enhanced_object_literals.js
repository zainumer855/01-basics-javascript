"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [`weekday-${2 + 3}`]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // openingHoursObj: openingHours, // old way of adding object
  openingHours, // new way of adding object

  // old way of writing method
  // order: function (stater, main) {
  //   return [this.starterMenu[stater], this.mainMenu[main]];
  // },

  // new way of writing method
  order(stater, main) {
    return [this.starterMenu[stater], this.mainMenu[main]];
  },

  orderDelivery({ status, time, location, starterIndex, mainIndex }) {
    console.log(
      status,
      time,
      location,
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex]
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your dilicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(...numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);
  },
};

// object litrals means the syntax of creating objects - {}

// we can enhanced object litrals in 3 ways

// first to add an object in another object as a property
// second writing methods as an property without using 'function' keyword
// we can compute values directly inside an object

// see restaurant object
console.log(restaurant);
