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

const [menu1, , menu3, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(menu1, menu3, others);

const { sat, ...weekDays } = restaurant.openingHours;

// console.log(sat, weekDays);

// restaurant.orderPizza(2, 3);
// restaurant.orderPizza(2, 3, 4, 5);
// restaurant.orderPizza(2, 3, 4, 5, 6, 7, 8, 4);

const numArr = [2, 4, 8, 6];
console.log(...numArr);
restaurant.orderPizza(...numArr);
