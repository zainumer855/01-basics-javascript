"use strict";

const flight = "LJH56";
const zain = {
  name: "Zain Umer",
  passport: 21346854132,
};

const checkFlight = function (flightNum, passenger) {
  flightNum = "GHY45";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 21346854132) {
    console.log("Checked In");
  } else {
    console.log("Wrong Passport");
  }
};

checkFlight(flight, zain);
console.log(flight);
console.log(zain);
