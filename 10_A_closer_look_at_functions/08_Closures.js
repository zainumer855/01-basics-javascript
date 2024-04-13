"use strict";

const secureBooking = function () {
  let passengers = 0;
  return function () {
    passengers++;
    console.log(
      `${passengers} ${passengers === 1 ? "passenger" : "passengers"}`
    );
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 555;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();

console.dir(f);

const boardPassenger = function (numPass, waitTime) {
  const perGroup = numPass / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${numPass} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000);

  console.log(`Boarding will start at ${waitTime} seconds.`);
};

// boardPassenger(150, 3);

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
