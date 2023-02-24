// This is to learn the basics of JavaScript including Variables and Data Types, Operators and Expressions, Control Structures
// Start this repository if it helps you

// Working with Arithmetic Operators
var result = 16;
resultAdd = 16 + 2;
resultSub = 16 - 3;
resultProd = 2 * 2;
resultDiv = 7 / 3;
resultMod = 1 % 3;

console.log(resultAdd);
console.log(resultSub);
console.log(resultProd);
console.log(resultDiv);
console.log(resultMod);

// Working with Comparison Operators
if (result > 15) {
  console.log("Result is higher than 15");
} else if (result < 15) {
  console.log("Result is lower than 15");
} else if (result == 1) {
  console.log("Result is equal to 1");
} else {
  console.log("Result is not equal to nothing");
}

// Working with Logical Operators
if (resultAdd && resultProd < 15) {
  console.log("Result Add and Result Sub is lower than 15");
} else {
  console.log("Result Add and Result Sub is higher than 15.");
}

// Assignment Operators
if ((resultSub) => 13) {
  resultSub += 5;
  console.log("Result sub is now: " + resultSub);
}

// Working with For Loops
for (var initial = 0; initial < 10; initial++) {
  console.log("Number increment using for loop 10 times");
}

// Working with While Loops
let testResult = 0;

while (testResult < 10) {
  console.log("Test result increment using while loop 9 times");
  testResult++;
}

// Working with Switch Statements

let japanBeauty = "Cherry Blossoms";

switch (japanBeauty) {
  case "Cherry Blossoms":
    console.log("Beautiful flowers");

    break;

  case "Pagoda":
    console.log("Heritage beauty");

    break;

  case "Winter":
    console.log("Skii");

    break;

  default:
    console.log("Invalid");

    break;
}

// EXERCISE: Try this yourself
// 1. use if/else to check if number is even or odd
// 2. use for loop to print numbers 10 to 16
// 3. use while loop to print numbers 50 to 100
