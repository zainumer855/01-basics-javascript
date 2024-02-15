'use strict' // treat all our js code by new version

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const markBMI = markWeight / markHeight**2; 
const johnBMI = johnWeight / johnHeight**2;
const markHigherBMI = markBMI < johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
