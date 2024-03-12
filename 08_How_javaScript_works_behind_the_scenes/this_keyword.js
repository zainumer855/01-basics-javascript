"use strict";
console.log(this);

function calcAge(birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
}

calcAge(2001);

const calcAgeExp = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAgeExp(1999);

const calcAgeArrow = (birthYear) => {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAgeArrow(1889);

const zain = {
  year: 2001,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};

zain.calcAge();

const ali = {
  year: 2009,
};

ali.calcAge = zain.calcAge;
ali.calcAge();

const f = zain.calcAge;
f();
