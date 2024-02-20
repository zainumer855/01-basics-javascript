'use strict';

/*
LECTURE: Functions

1. Write a function called 'describeCountry' which takes three parameters:

'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

// console.log(describeCountry('Pakistan', 245.2, 'Islamabad'));

/*
LECTURE: Function Declarations vs. Expressions

1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population

2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

const worldPopulation = 7900;

const percentageOfWorld1 = function(country, population){
    return `${country} has ${population} million people, so it's about ${(population/worldPopulation)*100}% of the world population.`;
}

// const pakPopulation = percentageOfWorld1('Pakistan', 245.2);
// const finLandPopulation = percentageOfWorld1('Finland', 6);
// const chinaPopulation = percentageOfWorld1('China', 1441);

// console.log(pakPopulation);
// console.log(finLandPopulation);
// console.log(chinaPopulation);


/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld2'
*/

const percentageOfWorld2 = (country, population) => `${country} has ${population} million people, so it's about ${(population/worldPopulation)*100}% of the world population.`;

const pakPopulation = percentageOfWorld2('Pakistan', 245.2);
const finLandPopulation = percentageOfWorld2('Finland', 6);
const chinaPopulation = percentageOfWorld2('China', 1441);

// console.log(pakPopulation);
// console.log(finLandPopulation);
// console.log(chinaPopulation);

/*
LECTURE: Functions Calling Other Functions

1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'

2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier

3. Call 'describePopulation' with data for 3 countries of your choice

*/
// const percentageOfWorld3 = (population) => (population/worldPopulation)*100;

const describePopulation = function(country, population){
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world's population.`
}

// console.log(describePopulation('Switerland', 8.8));


/*
LECTURE: Introduction to Arrays

1. Create an array containing 4 population values of 4 countries of your choice.

You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)

3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

const populations = [245.2, 8, 6, 1441];
if (populations[0] === 245.2) {
    // console.log(true);
}

const percentageOfWorld3 = population => (population/worldPopulation)*100;
// console.log(percentageOfWorld3(populations[0]))


const percentages = [
    percentageOfWorld3(populations[0]), 
    percentageOfWorld3(populations[1]), 
    percentageOfWorld3(populations[2]), 
    percentageOfWorld3(populations[3]),
];

// console.log(percentages);

/*

*/
