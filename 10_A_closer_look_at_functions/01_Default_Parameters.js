"use strict";

const prayer = function (
  namaz = "please enter name",
  totalRakats = "please spacify",
  farz = 4,
  sunnat = 2
) {
  const prayerData = {
    namaz,
    totalRakats,
    farz,
    sunnat,
  };

  console.log(prayerData);
};

prayer("Fajr", 4, 2, 2);
prayer("Duhr", 8, 4);
prayer(undefined, 7, 3);
prayer("Isha", 11);
