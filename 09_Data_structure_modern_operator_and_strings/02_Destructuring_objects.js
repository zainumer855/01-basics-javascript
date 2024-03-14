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
};

restaurant.orderDelivery({
  status: "Ready to deliver",
  time: 45,
  location: "Gulistan Colony, FSD",
  starterIndex: 2,
  mainIndex: 1,
});

//destructuring objects
const { name, starterMenu, mainMenu } = restaurant;
// console.log(name, starterMenu, mainMenu);

// destructuring properties with different name
const {
  name: restaurantName,
  starterMenu: starter,
  mainMenu: main,
} = restaurant;
// console.log(restaurantName, starter, main);

// default value
const { menu = [], location: loc = [] } = restaurant;
// console.log(menu, loc);

// nested objects
const {
  fri: { open = -1, close: khuljaaa = -1 },
} = restaurant.openingHours;
// console.log(open, khuljaaa);
