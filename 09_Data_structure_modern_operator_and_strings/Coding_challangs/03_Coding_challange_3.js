"use strict";

const toCamelCase = function (variableList) {
  // const camelCase = [];
  // let count = 1;
  // console.log(...variableList.entries());
  for (const [i, variable] of variableList.entries()) {
    // console.log(variable);
    const variableNames = variable.toLowerCase().split("_");
    const [first, second] = variableNames;
    const camelCase = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`.padEnd(20);
    console.log(camelCase + "✅".repeat(i + 1));
    // camelCase.push(
    //   variableList[0] +
    //     variableList[1].replace(
    //       variableList[1][0],
    //       variableList[1][0].toUpperCase()
    //     ) +
    //     " " +
    //     "✅".repeat(count++)
    // );
  }
};

const variableList = [
  "underscore_case",
  "fiRst_naMe",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
  "Zain_Umer",
];

toCamelCase(variableList);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightArr = flights.split("+");
console.log(flightArr);

const flightNum = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flightArr) {
  const [type, from, to, time] = flight.split(";");
  console.log(
    `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
      "_",
      " "
    )} from ${flightNum(from)} to ${flightNum(to)} at (${time.replace(
      ":",
      "h"
    )})`.padStart(50)
  );
}
