"use strict";

const runOnce = function () {
  console.log("will never run again");
};

runOnce();

(function () {
  console.log("will never run again");
})();

(() => console.log("will NEVER run again"))();
