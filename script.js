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

// // Arrow Functions

// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1970);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years!`;
// };

// console.log(yearsUntilRetirement(1997, 'Bradley'));

// function cutFruit(fruit) {
//   return fruit * 5;
// }

// function fruitProcessor(apples, oranges) {
//   const piecesOfApple = cutFruit(apples);
//   const piecesOfOrange = cutFruit(oranges);
//   const juice = `Our juice contains ${piecesOfApple} pieces of apple and ${piecesOfOrange} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// // Coding Challenge #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // Test 1

// let dolphinScore = calcAverage(11, 22, 33);
// let koalaScore = calcAverage(44, 55, 66);

// const checkWinner = function (avgDolphin, avgKoala) {
//   if (avgDolphin >= 2 * avgKoala) {
//     console.log(`Dolphins win 🏆 (${avgDolphin} to ${avgKoala})`);
//   } else if (avgKoala >= 2 * avgDolphin) {
//     console.log(`Koalas win 🏆 (${avgKoala} to ${avgDolphin})`);
//   } else {
//     console.log('No team wins ...');
//   }
// };

// checkWinner(dolphinScore, koalaScore);
// checkWinner(1111, 2222);

// // Test 2

// dolphinScore = calcAverage(88, 44, 22);
// koalaScore = calcAverage(44, 22, 11);

// checkWinner(dolphinScore, koalaScore);

// const friends = ['Haneia', 'Noah', 'Rosa ❤️'];

// console.log(friends);

// const years = new Array(1969, 1970, 1997, 2000, 2001);

// console.log(friends[0]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = 'Rosalinda ❤️';

// console.log(friends);

// const bradley = ['Bradley', 'Jester', '26', 'Full Stack Developer', friends];

// console.log(bradley);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const birthYears = [1969, 1970, 1997, 2000, 2001];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[birthYears.length - 1]);

// console.log(age1, age2, age3, age4, age5);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3]),
//   calcAge(years[birthYears.length - 1]),
// ];

// console.log(ages);

// const friends = ['Haneia', 'Noah', 'Rosa ❤️'];
// const newLength = friends.push('Zachary');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Daniela');
// console.log(friends);

// const pop = friends.pop();
// console.log(pop);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Noah'));

// console.log(friends.includes('Noah'));
// console.log(friends.includes('Ben'));

// if (friends.includes('Haneia')) {
//   console.log('Bradley has a friend named Haneia!');
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [100, 500, 1000];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const bradley = {
//   firstName: 'Bradley',
//   lastName: 'Jester',
//   age: 26,
//   role: 'Full Stack Developer',
//   friends: ['Haneia', 'Noah', 'Rosa ❤️'],
// };

// const bradley = {
//   firstName: 'Bradley',
//   lastName: 'Jester',
//   age: 26,
//   role: 'Full Stack Developer',
//   friends: ['Haneia', 'Noah', 'Rosa ❤️'],
// };

// console.log(bradley.lastName);
// console.log(bradley['lastName']);

// const nameKey = 'Name';
// console.log(bradley['first' + nameKey]);
// console.log(bradley['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to know about Bradley? Choose between firstName, lastName, age, job, and friends.'
// );

// if (bradley[interestedIn]) {
//   console.log(bradley[interestedIn]);
// } else {
//   console.log(
//     'Not an option! Choose between firstName, lastName, age, job, and friends.'
//   );
// }

// bradley.location = 'Seattle';
// console.log(bradley);

// // Challenge

// // "Bradley has 3 friends, and his best friend is named Rosa ❤️"

// console.log(
//   `${bradley.firstName} has ${bradley.friends.length} friends, and his best friend is named ${bradley.friends[2]}`
// );

const bradley = {
  firstName: 'Bradley',
  lastName: 'Jester',
  birthYear: 1997,
  role: 'Full Stack Developer',
  friends: ['Haneia', 'Noah', 'Rosa ❤️'],
  hasADriverLicense: true,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      bradley.role
    }, and he has ${this.hasADriverLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(bradley.calcAge());

console.log(bradley.age);

console.log(bradley.getSummary());
