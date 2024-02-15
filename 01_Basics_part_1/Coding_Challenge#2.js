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

let higherBMI;

if (markBMI > johnBMI) {
    higherBMI = `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`;
} else{
    higherBMI = `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`;
}

console.log(`Mark's BMI: ${markBMI}`, `John's BMI: ${johnBMI}`);
console.log(higherBMI);

