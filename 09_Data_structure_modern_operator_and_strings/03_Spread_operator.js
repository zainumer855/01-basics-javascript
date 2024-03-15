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
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menu);

const years = [1996, 2001, 2023, 2024, 2025];
// console.log(`Inflation years list ${...years}`);

const newRestaurantCopy = {
  ...restaurant,
  founder: "Guiseppa",
  foundedIn: 1988,
};

newRestaurantCopy.name = "Monal";

console.log(newRestaurantCopy.name);
console.log(restaurant.name);

const ingredients = ["a", "b", "c"];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
