"use strict";

const town = "Gulistan Colony 1";

// console.log(town.toLowerCase());
// console.log(town.toUpperCase());

const passenger = "zAiN";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const price = "&2500";
const priceDoller = price.replace("&", "$");
console.log(priceDoller);

const randomText =
  "When you alone doing coding at 1:08 trying to improve your problem solving skills solving";
const word1 = randomText.replace("solving", "hal krna");
const word2 = randomText.replace(/solving/g, "hal krna");
// const word3 = randomText.replaceAll("solving", "hal krna");
// console.log(word1, word2);

const plane = "AirBus 350";
console.log(plane.includes("AB"));
console.log(plane.includes("350"));
console.log(plane.startsWith("A"));

if (plane.startsWith("Air") && plane.endsWith("352")) console.log(plane);

const boarding = (...e) => {
  for (const str of e) {
    const eSmall = str.toLowerCase();
    if (
      eSmall.includes("knife") ||
      eSmall.includes("gun") ||
      eSmall.includes("drugs")
    ) {
      console.log("Alert! you are not allowed");
    } else {
      console.log("Welcome aboard!");
    }
  }
};

const baggege = [
  "A man with gun for safty",
  "A women with Knife",
  "A boy having drugs",
  "Family with 3 luggage",
];

boarding(...baggege);
