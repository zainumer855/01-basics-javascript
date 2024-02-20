'use strict';

/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)

2. Log their values to the console 
*/

const country = 'Pakistan';
const continent = 'Asia';
let population = 245209815;
// console.log(country, continent, population);


/*
LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet

2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console 
*/

let isIsland = true;
// const isTrue = true;
let language;
// console.log(typeof isIsland, typeof population, typeof country, typeof language, typeof isTrue);



/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)

2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

3. Try to change one of the changed variables now, and observe what happens
*/

language = 'Urdu';

// const language2;
// language2 = 'Urdu';
// console.log(language, language2)

// SyntaxError: Missing initializer in const declaration



language = 'Urdu';

/*
LECTURE: Basic Operators

1. If your country split in half, and each half would contain half the population, then how many people would live in each half?

2. Increase the population of your country by 1 and log the result to the console

3. Finland has a population of 6 million. Does your country have more people than Finland?

4. The average population of a country is 33 million people. Does your country have less people than the average country?

5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/

let halfPopulation = population/2;
// console.log(halfPopulation);

halfPopulation++;
// console.log(halfPopulation);

const finLandPopu = 6000000;
const hasMorePopu = finLandPopu < population;
// console.log(hasMorePopu);

let avgPopu = 33000000;
const isAvgPopu = avgPopu > population;
// console.log(isAvgPopu);

const pakPopu = '245 million';
let description = country + ' is in ' + continent + ', and its ' + pakPopu + ' people speak ' + language;
// console.log(description);


/*
LECTURE: Strings and Template Literals

1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax
*/

description = country + ' is in ' + continent + ', and its ' + pakPopu + ' people speak ' + language;
// console.log(description);

description = `${country} is in ${continent}, and its ${pakPopu} people speak ${language}`;
// console.log(description);


/*
LECTURE: Taking Decisions: if / else Statements

1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/
avgPopu = 33;
 population = 29;
 population = 245.2;
if (population > avgPopu) {
    // console.log("Pakistan's population is above average");
} else {
    // console.log(`Pakistan's population is ${avgPopu-population} million below average`)
}

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

2. Execute the operations to check if you were right
*/

// console.log('9' - '5') // -> 4 of Number
// console.log('19' - '13' + '17') // -> '617' of string
// console.log('19' - '13' + 17) // -> 23 of Number
// console.log('123' < 57) // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2) // -> 1143 of Number

/*
LECTURE: Equality Operators: == vs. ===

1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country have?');

2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1

4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)

5. Test the code with different values of 'numNeighbours', including 1 and 0.

6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?

7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1

8. Reflect on why we should use the === operator and type conversion in this situation
*/

// prompt('How many neighbour countries does your country have?');
const numNeighbours = '1';

if (numNeighbours == 1) {
    // console.log('Only 1 border!');
} else if (numNeighbours === 2) {
    // console.log('only 2 border!');
} else if (numNeighbours === 3) {
    // console.log('only 3 border!');
} else if (numNeighbours === 4) {
    // console.log('only 4 border!');
} else {
    // console.log('No borders');
}


/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way

2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.

3. Write an if statement to help Sarah figure out if your country is right for her.

You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('

5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)
*/

//2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
language = 'English';
population = 45;
isIsland = false;

if (language === 'English' && population < 50 && country !== isIsland) {
    // console.log('You should live in Pakistan :)');
} else {
    // console.log('Pakistan does not meet your criteria :(');
}


/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':

chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'

for all other simply log 'Great language too :D'
*/
language = 'urdu';
switch(language){
    case 'chinese':
    case 'mandarin':
        // console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        // console.log('2nd place in number of native speakers');
        break;
    case 'english':
        // console.log('3rd place');
        break;
    case 'urdu':
        // console.log('Number 4');
        break;
    case 'arabic':
        // console.log('5th most spoken language');
        break;
    default:
        // console.log('Invalid Language!');
}

/*
LECTURE: The Conditional (Ternary) Operator

1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!

2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/
population = 29;
const popuAboveOrLow = population > 33 ? "Pakistan's population is above average" : "Pakistan's population is below average";
// console.log(popuAboveOrLow);