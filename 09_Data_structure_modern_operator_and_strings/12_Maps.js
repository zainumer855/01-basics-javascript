"use strict";

const car = new Map();
car.set("company", "Hundai");
car.set("name", "Sonata");
car.set("modal", 2024);
car.set(4, "Doors");

car.set("color", "grey").set(true, "Applied For").set(false, "Not For Sale");

const modal = 2024;
const color = "grey";
// console.log(car.get(modal === car.get("modal") && color == car.get("color")));

const arr = [1, 2];
car.delete(false);
car.set(arr, "specs");
console.log(car.has("name"));
console.log(car.size);
console.log(car.get(arr));
// car.clear();
// console.log(car);
