"use strict";

function calAge(birthyear) {
  const age = 2024 - birthyear;
  console.log(age);

  function printAge() {
    const output = `I am ${age}, My name is ${firstName} and my birth year is ${birthyear}`;
    console.log(output);

    if (birthyear >= 2000 && birthyear <= 2009) {
      var text = `You were in school, ${firstName}`;
      //   console.log(text);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(add(2, 3));

    console.log(text);
  }
  printAge();
}

const firstName = "Zain";
calAge(2001);
