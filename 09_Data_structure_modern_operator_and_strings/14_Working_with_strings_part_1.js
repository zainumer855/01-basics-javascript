"use strict";

const town = "Gulistan Colony 1";

// console.log(house[0]);
// console.log(house[1]);
// console.log(house[2]);
console.log("14W"[1]);

console.log(town.indexOf("n"));
console.log(town.lastIndexOf("n"));
console.log(town.indexOf("Colony"));
console.log(town.lastIndexOf("colony"));

console.log(town.slice(1));
console.log(town.slice(5, 9));
console.log(town.slice(-2));
console.log(town.slice(1, -1));

console.log(town.slice(0, town.indexOf(" ")));
console.log(town.slice(town.lastIndexOf(" ") + 1));

const houseGate = (...houseNo) => {
  for (const house of houseNo) {
    const housePosition = house.slice(-1);
    // if (housePosition === "B" || housePosition === "C") console.log("Family🤩");
    // else console.log("Relatives😛");
    console.log(
      housePosition === "B" || housePosition === "C"
        ? "Family🤩"
        : "Relatives😛"
    );
  }
};

const house = ["24WA", "25WB", "26WC", "27WD"];

houseGate(...house);

const [, myHome, ...others] = house;
console.log(myHome, others);
