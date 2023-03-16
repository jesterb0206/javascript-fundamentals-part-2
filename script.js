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

// // Function Declaration

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1997);

// // Function Expression

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(2000);

// console.log(age1, age2);

// Arrow Functions

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1970);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1997, 'Bradley'));
