'use strict';

// let hasALicense = false;
// const passedTest = true;

// if (passedTest) hasALicense = true;
// if (hasALicense) console.log('I can drive!');

// // const interface = 'Audio';
// // const private = 123;
// // const if = 456;

// function logger() {
//   console.log('My name is Bradley!');
// }

// // Calling / Invoking / Running a Function

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Our juice contains ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const OrangeJuice = fruitProcessor(0, 5);
// console.log(OrangeJuice);

// const num = Number('555');

// Function Declaration

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1997);

// Function Expression

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(2000);

console.log(age1, age2);
