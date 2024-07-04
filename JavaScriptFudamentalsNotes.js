"use strict";
// Go to line 607 to know what that is there on line one
// Assign a value to a variable

// let (variable name) = (the value you want to assign to the variable);
// examples:
let js = "I am very cool";
let something = 96;
// (so here we declared a variable something and js and assigned it to there respective value)

// Logging things to the console

// (Is basicaly the print of JavaScript)
// console.log((the info you want to basicaly print on the console of the web page));
// examples:
console.log("Whats good, nerd");
console.log(107);

// Using both of there new thigns we can do
// example:

let hisName = "Shreyansh";
let hisAge = 14;
console.log(hisName);
console.log("His age is");
console.log(hisAge);

// Convention of naming variables
/*
camalCase, this the convention that is mostly used for JavaScript and it look something like this:
examples:
myJob,
myName,
myFirstJob
*/
// As you can see it started with a lower case letter and for the next letter in the variable is capitalized
// You don't need to do this but is good practice, for example in real world people say thanks, sorry etc but it is not really needed, its just a good practice

// The only charecters that can be used when naming a variable are all the alphabets, number, $, _
// A variable can't be started with a number
// And finnaly it is a good practice if your variable names are descriptive, which helps you better understand the value of the variable

// Value
// A value can only be a Object which looks something like this:

let me = {
  name: "Shreyansh",
};

// And everthing else is a Primitive which looks something like this:
let myName = "Shreyansh";
let myAge = 30;

// Primitive Data Types

// There are 7 Primitive Data Types

// 1. Number: Floating point numbers. Used for decimals and integers
//    example:
let randomNumber = 21;

// 2. String: of charecters. Used for test
//    example:
let exampleName = "Shreyansh";
//    (They have to be in single quotes or double quotes)

// 3. Boolean: Logical type that can only be true or false. Used for taking decisions
//    example:
let nightTime = true;
//    console.log(nightTime)

// 4. Undefined: Value taken by a variable that is not yet defined ("empty value")
//    example:
let sirName;
console.log(sirName);
//    This will return undefined in the console

// (No value is assigned to the Variable)

// 5. Null: Also means "empty value"
//    (Used in different circumstances)

// 6. Symbol: Value that is unique and cannot be changed

// 7. BigInt: Larger integers than the Number type can't hold

// typeof is a operator, and it tells the data type
// example:
console.log(typeof true);
// console.log(typeof (we can also use a variable here and the typeof tells us the data type of the value of the provided variable));
console.log(typeof 24);
console.log(typeof "this is a string value");

// there is a bug in JavaScript when you check the data type of Null
// example:
console.log(typeof null);

// null is a datatype but this returns object when it is logged to the console
// this is a bug and is not an indented function

// Comments

// A comment is something that is ignored and is not going to be exicuted, like deactivating a code so that the program doesn't run it

// Syntax of a comment:
// this is for one line
// you can use
/*
when you
want
to comment multiple
lines of code
and this is called
muti-line comment
*/

// Dynamic typing
// JavaScript has dynamic typing: We do not have to manuallu define the data type of the value stored in a variable. Instead, data types are determined automatically.
// example:
let javaScriptIsFun = true;
// we declared a variable named javaScriptIsFun, and its value is a Boolean

// to change the data type or to modify the value we can do this:
javaScriptIsFun = "Yes!";
// Notice that we don't need to put let now because the variable is already declared

// let, const amd var

// let allows you to declare a variable with a value and it is fine if you change the value of that variable later on in the program
// This in other terms is called "reassigning" or you may here people say "we mutated the variable age"
// example:
let age = 30;
age = 31;

// On the other hand a variable declared by const can't be changed and if tried so will give out a TypeError
// example:
const birthYear = 2000;
// if we do this:
// birthYear = 1999;
// This will give a error
// It is also very important to use const if your not going to change the value of the variable

// var is the old way of declaring variables and should be avoided, it is basicaly let, but it is very different in the servers
// example:
var job = "programmer";
job = "teacher";
// And var also lets us change the variable's value too

// Operator

// Arithmetic operations include multiplication (*), addition (+), subtraction (-), division (/), exponent (\*\*)
// example:
const addingExample = 100 + 24;
const subtractionExample = 100 - 24;
const multiplicationExample = 100 * 24;
const divisionExample = 100 / 24;
const powerExample = 100 ** 24;

// We can also use the plus operator to join strings
// example:
const firstName = "Shreyansh";
const lastName = "Vennamaneni";
console.log(firstName + " " + lastName);
// This will show "Shreyansh Vennamaneni" in the console
// The " " in the middle of the console log is important because it gives a space between the two words

// Assigment Operator
// The equal sign is an assigment operator.
// example:
let x = 10 + 14; // x is 24
x -= 14; // x = x -14 = 10
x *= 4; // x = x _ 4 = 16
x++; // x = x + 1 = 17
x--; // x = x - 1 = 16
x /= 4; // x = x / 4 = 4
console.log(x);

// Comparison operators
// The result of a Comparison operator return a Boolean value (true or false)
// example:
const ageTom = 10;
console.log(ageTom > 11);

// This will return false
// All the Comparison operators are >, <, >=, <=, ==

// we can store the result of a Comparison in a variable which is more useful
// example:
const isTom11 = ageTom > 11;

// Operator Precedence

// example:
const now = 2024;
const ageTim = now - 2000;
const ageSam = now - 2004;
console.log(now - 2000 > now - 2004);

// So here "now - 2000 > now - 2004" instead of going from left to right JavaScript has a proper order to do things like this so if it went form left to right it would be false because lets see it "now - 2000" is going to be 24 and if it checks that to now it is not bigger than 2024 so it would be false but it doesn't do that and returns two by doing the subtractions first.
// This is because of the operation precedence

let z, y;
z = y = 24 - 10 - 4; // x = y = 10, and the assigment operators are executed from right to left so y = 10 and then x = y(10) so x = 10
console.log(x, y);

// here when we are trying to find the average we have to use the Parentheses to make sure the addition is done first else because the multiplication will have higher precedence
const averageAge = (ageTim + ageSam) / 2;
console.log(averageAge);
console.log(ageSam, ageTim);

// Strings and Template Literals

const nameExample = "Anshu";
const hisJob = "Progarmmer";
const myBirthYear = 2010;
const currentYear = 2024;

const anshu =
  "I'm " +
  nameExample +
  ", a " +
  (currentYear - myBirthYear) +
  " year old " +
  hisJob +
  "!";
console.log(anshu);

// Instead of doing ^ that there is a better way to get the same result
// Template Literals Syntax
// example:

const anshuNew = `I'm ${nameExample}, a ${
  currentYear - myBirthYear
} year old ${hisJob}!`;
console.log(anshuNew);

// when we want to use a variable in a string all we have to do is put a $ sign and then {} and the variable name inside it
// but another thing is we also have to use `` (backtakes)

// we can also use the `` backtakes for normal strings which don't have a variable in them
//  for example:
console.log(`This works`);

// To write multipul lines in one string we have to use \n\ everytime you wanted to start a new line

console.log("This \nis a \nstring \nwith \nmultipul\nLINES");
// or to make it more clear when reading the code do this
console.log(
  "This \n\
is a \n\
string \n\
with \n\
multipul\n\
LINES"
);

// But there is a better way to do this using template strings
// Example:

console.log(`This is
a
multipul line string
using
Template Literal`);

// If / else Statements

const alexAge = 19;
const steveAge = 15;

// To check if the age is 18 or more we can use this syntax
// Example:
const isAlexOldEnough = alexAge >= 18;
const isSteveOldEnough = steveAge >= 18;
// this will return a boolean value
// In Alex's cause this cause it will give true

// An if statement will run the code in the curly brackets if whatever is in the Parentheses returns true if it is false it won't run the code in the curley brakets
if (isAlexOldEnough) {
  console.log("Alex can get a Driving License 🚗");
}
// because isAlexOldEnough is true, it will run the code in the curley brakets

// But Steve isn't old enough so we have to do something when the block of code in the if statement doesn't run
// this is where the else block is usefull
if (isSteveOldEnough) {
  console.log("Steve can get a Driving License 🚗");
} else {
  const yearsLeft = 18 - steveAge;
  console.log(`Steve is too yound. Wait another ${yearsLeft} years 😅`);
}

// This kind of structure (if else) is called if else control structure
// There are other control structures in JavaScript

// Another Example:

const randomBirthYear = 2010;
// we have to define century here because anything defined in the if or else block can't be used outside (kind of like the function in python)
let century;
if (randomBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Type Conversion and Coercion

// Type conversion is when we manually convert from one type to another
// Type Coercion is when JavaScript atomatically converts the types for us
// They may sound alike but they are different

// Type Convertion

const inputYear = "1991";
// Here we are converting a string to a number by using the function 'Number' (similar to int() in python)
console.log(Number(inputYear));
console.log(inputYear + 18);
// but here we are only logging the converted version but to get the answer we want we either have to save the converted number in the variable or just convert it when adding it to 18
console.log(Number(inputYear) + 18);

// But if we try to convert a string to a number which has charecters that are not numbers we get NaN
// Example:
console.log(Number("Shreyansh"));
// Result: NaN, standing for Not A Number, and means invalid number
// But the type is still number somehow
console.log(typeof NaN);
// Result: number

// we can also convert Numbers to Strings too
// Example:
console.log(String(24));
// so to convert it we have to use the String function similar to the Number function

// So these are manual convertion (Type Convertion)

// Type Coercion
// Example:
console.log("I am " + 23 + " years old"); // string + number + string, the number is being converted to a string automaticaly behind the scenes
// When there is a operation between a string and a number the number will be converted to a string

// But not all the operators convert the data type to string example:
console.log("23" - "10" - 7);
// So when there is subtraction operator the string is converted to a number
// Another example:
console.log("32" * "2");
// So here the string is converted to number and a string is converted to a number whenever a **, / and * operators are used
console.log("32" ** "2");
console.log("32" / "2");

// An Example:

let n = "1" + 1; // "11"
n = n - 1; // n (11) - 1 = 10
console.log(n);

// A trick to know if a value is number or a String on the console is by checking its cooler if it is white it is a string and if it is purple is it a number

// Truthy and Falsy Values

// Falsy values are values that are not exactly false but will become false when we try to convert them to a boolean
// There are 5 falsy values, which are:
// 0, ""(Empty string), undefined, null, NaN
// And everything else are truthy values, which means anything else will be true when converted into a boolean
// Few Examples:
console.log(Boolean(undefined)); // -> false
console.log(Boolean(null)); // -> false
console.log(Boolean("Shreyansh")); // -> true
console.log(Boolean("")); // -> false
console.log(Boolean(10)); // -> true
console.log(Boolean({})); // -> true

// But we never really use Boolean function, so the convertion to boolean is always implicit not explicit, or in other words is always type coercion
// But when does type coercion converted a type to boolean
// Logical operators, and another is logical context in a condition of an if else statement
// Example:
const money = 0;
// So here in the if statement if a given value to the if statement is not a boolean JavaScript will try an convert it to a boolean, so in this cause the value will be false because 0 is one of the 5 falsy values
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log(
    "You should get a job, Brokey, L. jk, but you should still get a job"
  );
}
// Another use case to check if a variable is defined
// Example:
let height;
// height's value here is undefined because it has no value and undefined is 1 of the 5 falsy values so it is going to become false when put in the if else statement so the else statement is going to be executed
if (height) {
  console.log("Yo, LETS go Height Is DEFINED");
} else {
  console.log("Height is UNDEFINEd");
}
// But the problem here is if height is assigned to 0, which indeed is a avlue but it is a falsy value, but this is a bug in our code cause we should have accounted this situation

// Equality Operators

// triple equal
const checkAge = 18;
// If both of the values beside === are same it will return true, else it is false
if (checkAge === 18) console.log("You just became an adult :D"); // we don't need curely brackets if there is only one line of code in the if statement and the line goes as shown

// there is also double equal
// the difference is triple equal is called a strict equality operator, because ir does not perform type coercion so it only returns ture when both values are exactly the same
// The double equal is called the loose equality operator, and it does type coercion
// Example:

const strictEquality = "100" === 100;
console.log(strictEquality);
// this is going to be false because they are not the same because 100 string and 100 number are different and type coercion is not performed
// But on the other hand type coercion is performed when it is a loose equality
const looseEquality = "100" == 100;
console.log(looseEquality);
// This is going to be true
// So everything that is strictly equal is also loosly equal
// We should always avoid using ==, and if we need type coercion, we should just do manual convertion

// Prompt

// To ask the user a prompt on the web page we can use the function prompt
// Example:

// let favoriteNumber = prompt("What's your favorite number?"); // this is commented so I don;t get bambarded with prompts everytime I run this script
let favoriteNumber = 24;
console.log(favoriteNumber);

if (favoriteNumber == 24) {
  // '23' == 23, because loose equality
  console.log("Cool! 24 IS A GREAT NUMBER, GOOD JOB (Loose)");
}
// But as said it is not a good practice to use == so we should use ===

favoriteNumber = Number(favoriteNumber);
console.log(favoriteNumber);
if (favoriteNumber === 24) {
  console.log("Cool! 24 IS A GREAT NUMBER, GOOD JOB (Strict)");
}

// More conditions to an if else statement

// We can add an else if block
// Example:

if (favoriteNumber === 24) {
  console.log("Cool! 24 IS A GREAT NUMBER, GOOD JOB (Strict)");
} else if (favoriteNumber === 10) {
  console.log("10 is a GREAT NUMBER");
} else if (favoriteNumber === 4) {
  console.log("NICE CHOICE");
} else {
  console.log("Number is not 24, 10, or 4. Thats a Bum");
}

// So after the if the if statement is not executed then the else if in order is executed if that also is false and doesn't run the code inside it, it continues with all the else if statement going in the order form top to bottom and there can be as many else if statements as we want
// If all of these don't run then the else block is going to be executed

// There is also an opposite version for ===, and ==

if (favoriteNumber !== 24) {
  // !== is the strict version and != is the loose version
  console.log("WHY NOT 24! CHANGE IT NOW :) else "); // this block of code will only be executed if the number is not equal to 24 and thats what ! means, "not"
}

// Boolean Logic: The AND, OR & NOT operators

// What the AND operator does is it will only return true only if both the statements are true
// What the OR operator does is it will return true if one of the statement is true
// The NOT operator if for example A is true NOT A will be false, and if A is false NOT A is true
// Examples:

let hasDriversLicense = true; // A
let isNotDumb = true; // B
// For the AND operator the syntax is && so to check we do something like (A && B), example of using it:
console.log(hasDriversLicense && isNotDumb);
hasDriversLicense = false;
// For the OR operator the syntax is || and in this cause A is false and be is true so it should return true
console.log(hasDriversLicense || isNotDumb);
// The NOT operator is the ! mark
console.log(!hasDriversLicense);
// The NOT inverts the value so this should be false

if (hasDriversLicense && isNotDumb) {
  console.log("This person can drive");
} else {
  console.log("Don't drive, it won't be a good idea");
}

let isTired = true; // C
console.log(hasDriversLicense && isNotDumb && isTired); // you can just do the same for the or just add || at the end and the variable

if (hasDriversLicense && isNotDumb && !isTired) {
  // we are inverting the value of isTired because if it is true and then the person shouldn't drive, so we have to make it false then making the boverall value false so the person is not driving, so the ! is said the person can only drive if they have a driving license, is not dumb, not (!) is tired, because they shouldn't drive if are tired
  console.log("This person can drive");
} else {
  console.log("Don't drive, it won't be a good idea");
}

// Switch Statement

// Is a better and less complicated if else statement if we only want to compare one value to multipul different options

const day = "monday";

// Example Switch Statement:

switch (day) {
  case "monday": // day === "moday", so we are asking if the day === to monday, monday or what ever value is after case, and the day comes from the value we put after the switch in the brackets at the start. this is like one if in the if else structure, and anything written after the colon and if it is indented it is going to run if the case is true, in this case it is true so whatever code is in the block is going to run
    console.log("Today is Monday");
    break; // this is important so the next cases are not going to be executed
  case "tuesday": // You can have as many case as you want
    console.log("Fast code");
    break;
  case "wednesday": // here if I don't provide any value it is going to be the same as the next case's code
  case "thursday":
    console.log("Break today"); // this is for wednesday and thursday
    break;
  case "friday":
    console.log("YEah FridaY");
    break;
  case "satuday":
  case "sunday":
    console.log("WEEKEND :)");
    break;
  default: // this is going to be executed when none of the case's run, like the else statement
    console.log("Not a Valid day!");
}

// How this would look in an if else statement

if (day === "monday") {
  console.log("Today is Monday");
} else if (day === "tuesday") {
  console.log("Fast code");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Break today");
} else if (day === "friday") {
  console.log("YEah FridaY");
} else if (day === "saturday" || day === "sunday") {
  console.log("WEEKEND :)");
} else {
  console.log("Not a Valid Day!");
}

// Difference between statements and Expressions

// Expressions when something produces a value
// Example:
3 + 4;
1991;
true && !false;
("Huh");

// A statement is a bigger piece of code and does not produces a value
// Example of an statement
if (24 > 10) {
  const str = "Oh... Thats kinda cool I guess..."; // So this doesn't reall produce anything so it is a statement and this is more like an action, but the string is a expression
}

// For example in a template literal we can only instert expression
// So it won't work if we put an if else statement in there
// Example

console.log(`I'm ${2037 - "1991"} years old`); // this is an expression so this works
// console.log("This won't work ${if (24 > 10) {
//     const str = "Oh... Thats kinda cool I guess..."
// }}")

// Conditional (Ternary) Operator

// This opertator allows us to write something simlar to the if else statement, but all in one line

// Example:
const ageVarible = 2;
// The ? mark is what tells that to check if the sspression before it is true and if it is the code after the ? will be executed and yes there can only be one line of code that an run if the condition is true
ageVarible >= 18
  ? console.log("I am Above Age AND CAN dring Wine") // this colon is important because the next line after this is the else statement basically
  : console.log("I like to drink water"); // this is like the else statement which mandatory
// But one this is we can only do one thing if the condition is true
// This is called a ternary operator, (and if it is operator it is also an expression) because it has 3 parts

// But a better way to use this operator
const whatDrink = ageVarible >= 18 ? "Wine" : /*Else*/ "Water";
console.log(whatDrink);

// How this would be if done by a if else statement

let whatDrink2; // we have to define it here if we want to use this outside the if else block
if (ageVarible >= 18) {
  whatDrink2 = "wine";
} else {
  whatDrink2 = "water";
}
console.log(whatDrink2);
// This does the same as the two lines of code if we use a ternary operator

// Also we can have conditions inside of a template literal, because this operator is indeed a expression
// Unlike a if else statement

console.log(
  `I will have a glass of ${
    ageVarible >= 18 ? "Wine" : "Water"
  } please. Thank you.`
);

// Section 2

// Strict Mode is a special mode in JavaScript that makes the script more secure
// to do that all we have to do is write
("use strict");
// But this has to be on the very first line and yes this won't work if this is on any other line
// Example of some changes

let gotDriversLicense = false;
const passTest = true;

("if (passTest) gotDriverLicense = true;"); // If there is only one line of code in the if statement we can do this
// Also notice that I missspelled DriversLicense
if (hasDriversLicense) console.log("I can DRIVE :D  :D");
// If Strict mode is on we get Uncaught ReferenceError
// But without it nothing happens
// Another think it also does is it reservers words which may be added in the future, and when that update comes the code won't have a problem
// Some words are
// const interface = "Game";

// Funtions

// A function is like a variable but for chunks of code, which means one or more lines of code
// Example to make a function

function logger() {
  // we need to write function first then the name of the function after that which in this case is logger and the function is going to run all the lines of code the curely brakets
  console.log("My name is Shreyansh");
}

// To use the function all we have to do is just write its name, and then parentheses
logger();
// When we run a function we can call it
// calling / running / invoking function
// we can use the function as many times as we want and the code in the function is going to runn everytime the function is called
logger();

// But they can also do a lot more than just reusing code
// It can receive and return data back
// Example

function fruitProcessor(
  apples,
  oranges
) /* everything passed in the parentheses are called parameters and they represent the input data in the function*/ {
  console.log(apples, oranges); // notice that we can basically use the parameters as they are variables
  const juice = `Juice with ${apples} apples amd ${oranges} oranges.`;
  return /* with this we can return any value from the function*/ juice; // we are here returning the variable juice
}

fruitProcessor(5, 0); // these 5 and 0 are going to be input so the 5 is going to be the number of apples and oranges are 0, this is determined by the order notice that apples are first so the first value provided when calling a function is going to be assigned to that parameter
// When the we run the function the returned value is replace by the line we call the function so we can store function when we are calling it so that we can use it
// Example:
const appleJuice = fruitProcessor(5, 0); // the returned value from the function is going to be stored the variable appleJuice
console.log(appleJuice); // or we could have also just directly logged the calling function on the console
// Example
console.log(fruitProcessor(5, 0));
// And we can also provide the function with different inputs so it gives us different outputs
// The value we provide is called an argument, and the parameter is the placeholder
// Example:
const appleOrangeJuice = fruitProcessor(5, 6);
console.log(appleOrangeJuice);

// And again we can run it as many times as we want
// Also if we never call the function it is just a waste because the code in it is never going to be executed
// These types of functions are called function decleration
// Example:
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(2010);
console.log(age1);

// Another type of function is function expression
// Example:

const calcAge2 = function (birthYear) {
  // Notice how we never gave it a name. So when we return the value that value is directly stored in the variable so the variable is the function now
  return 2024 - birthYear;
};
// Example of calling it:
const age2 = calcAge2(1991); // we use the variable name to call it
console.log(age2);
// And remember this function is an expression
// The big difference between the both of these functions is that you can call a declaration function before it is even made and it will still work

// There is anothing function which is called arrow function, this is kinda similar to the function , it actually is a function expression but is a special form

// Arrow Function Example:

const calcAge3 = (birthYear) => 2024 - birthYear;
// It works the same way to use the function
const age3 = calcAge3(2010);
console.log(age3);
// this is the simpliest form and it only has one parameter and one line of code

// const yearsUntilRetirement = birthYear => { // we also have to use curely brackets if we want more than one line of code
const yearsUntilRetirement = (birthYear, firstName) => {
  // we need parentheses here and more parameters if we want more parameters we want to use
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement; // we have to write the return here if we have more than one line of code in this type of function too
  return `${firstName} retires in ${retirement} years.`;
};

// console.log(yearsUntilRetirement(2010));
console.log(yearsUntilRetirement(2010, "Shreyansh"));

// Functions calling other function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// This ⬇️ is same as ⬆️
const cutFruitPieces = (fruit) => fruit * 4;

function fruitProcessorTwo(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // This is how we can use a function in another function
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples amd ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(4, 10));

// Arrays

// Example:
// There is a better way of doing this:
const name1 = "Deepika";
const name2 = "Venkateshwar";
const name3 = "Siddu";
const name4 = "Anshu";

// Array
const names = ["Deepika", "Vekateshwar", "Siddu", "Anshu"];
console.log(names);

// Another way to this

const years = new Array(1981, 1982, 2010, 2011); // this is just a different way of doing the same thing
// To so this we need to have new then Array then in the () we can put the values seperated with commas

console.log(names[0]); // this will give "Deepika" because arrays start with 0 so the array goes like this 0 1 2 3 ..
// so when we do this ^ it gives us the value of the index value of 0
// So we can also do this
console.log(names[2]); // this will give Siddu
// To get the number of items in a array we can do
console.log(names.length); // this will give 4 because there are 4 values
// we can use this to get the last element of the array
console.log(names[names.length - 1]); // we have to subtract one because length is not 0 based
// and in the [] we can put any expression
// we can also add elements to array
names[2] /*which is siddu*/ = "Prateek";
// we changed it to prateek
// we can still change the array even if it is a const because only primitive values are not change able if const is used but an array is not primitive
// but, we can't change the whi array, for example:
// names = ["idk", "lol"]

// Arrays can hold values with different types
// Example:

const shreyanshInfo = [
  "Shreyansh",
  "Vennamaneni",
  2024 - 2010 /*we can do subtracting indide it*/,
  "progarmmer",
  names,
]; // we can also put a array or even a variable in th array
console.log(shreyanshInfo);

// Exercise

function calcAgeExercse(birthYear) {
  return 2024 - birthYear;
}
const yearsArray = [1981, 1982, 1997, 2010, 2011];

console.log(calcAgeExercse(yearsArray));
// This won't work ^
// It gives not a number because we are trying to subtract an whole array from a number

// The coorect way to this:

const ageOne = calcAgeExercse(yearsArray[0]);
const ageTwo = calcAgeExercse(yearsArray[1]);
const ageThree = calcAgeExercse(yearsArray[2]);
console.log(ageOne, ageTwo, ageThree);

const ages = [
  calcAgeExercse(yearsArray[0]),
  calcAgeExercse(yearsArray[1]),
  calcAgeExercse(yearsArray[2]),
];
// We can make a new array with the value and we can put call funtion in a array until they return a value

// Array Operation (Methods)

const friends = ["Sohan", "Arnav", "Advaith", "Krishna", "Rithun"];
// push() method adds a element to the end of the array
// Exmaple:
// We need to have the name of the array we need to update then . then push(the element to add)
const newLenglth = friends.push("IDK");
console.log(friends);
// The push function also returns a value and it is the length of the new array after it pushes the element privided
console.log(newLenglth);

// There is also a method to add an element to the front of the array
// It is called unshift
// Example:
friends.unshift("Ben");
console.log(friends);
// Also this method also returns the length of the updated array

// to remove elements we have pop
// which removes the last element of the array
// Example:
const popped = friends.pop();
console.log(friends);
// This pop() method returns the element that was removed
console.log(popped); // which is "IDK"

// To remove the first element we can use shift()
// Example:
friends.shift();
console.log(friends);
// shift also returns the element removed

// we can also get the index of a value if we know the value of the element
// To do this we have to use the method indexOf()
// Example:
console.log(friends.indexOf("Arnav")); // which is 0
// if we ask for a element that is not in the array we get -1
console.log(friends.indexOf("IDK")); // -1 is the returned value

// includes returns true if the element provided to it is in the array else if it will return false
// Example
console.log(friends.includes("Krishna")); // will return true

// also if we add a 24
friends.push(24);
// And we check for the string "24" it will give false, so it does not do type coercion
// Example:
console.log(friends.indexOf("24"));

friends.pop(); // to remove 24 (last element)

// Objects

// object is also an data structure like arrays
// In arrays we can reference the elements/values by names but we can do that in objects
// Example:

// curely brakets are used to define a new object in this case
let shreyanshObject = {
  firstNameKey:
    /*this colon is very important after the key name. This is like a variable called a key < and this > is the value assigned to that*/ "Shreyansh", // commas are used to seperate each element
  lastNameKey: "Vennamaneni",
  ageKey: 2024 - 2010,
  jobKey: "Programmer",
  familyNamesKey: ["Venkateshwar", "Deepika", "Prateek", "Shreyansh"],
};
// There are many ways to make objects but when we use curely brakets it is called object literal Syntax
// The major difference between arrays and objects is that the order in objects don't matter when we want to retrive the elemets, but in arrays the order we specifi the elements is very important

console.log(shreyanshObject);
// When you print it the order is changed to alphabetically

// Dot and bracket Notation
// we can use dot like this

console.log(shreyanshObject.lastNameKey); // after the dot we want to write the name of the key, and this is going to print the value assigned to the key

// Braket Notation
// Example:

console.log(shreyanshObject["lastNameKey"]); // here we also need to put the key in the brakets in a string, but we can als put any expression in the brackets unlike the dot

const nameKey = "NameKey";
console.log(shreyanshObject["first" + nameKey]); // we can do this because it is an expression and produces a value

// when we try to get the value of a key that doesn't exist we get undefined

console.log(shreyanshObject.friendsKey);
// returns undefined

// Some more stuff we can do is something like this:

// const intrestedIn = prompt("What do u want?");
// console.log(shreyanshObject[intrestedIn]); // this will only work if we used bracket notation

// we can also use bracket notations to check if it exists

if (shreyanshObject["lastNameKey"]) {
  // it will return true if it exits so the block in the if statement will run
  console.log("His last name is " + shreyanshObject["lastNameKey"]);
}

// we can also add keys and values
// Example:

shreyanshObject.location = "United States";
// and we can also use square brackets
shreyanshObject["birthPlace"] = "India";

console.log(shreyanshObject);

// Challenge

console.log(
  `${shreyanshObject["firstNameKey"]} is a ${shreyanshObject.ageKey} old. And his parents names are ${shreyanshObject["familyNamesKey"][0]}, and ${shreyanshObject["familyNamesKey"][1]}, he also has a brother whose name is ${shreyanshObject["familyNamesKey"][2]}.`
);

// Object Methods

shreyanshObject = {
  firstNameKey: "Shreyansh",
  lastNameKey: "Vennamaneni",
  birthYearKey: 2010,
  jobKey: "Programmer",
  familyNamesKey: ["Venkateshwar", "Deepika", "Prateek", "Shreyansh"],
  hasDriversLicense: false,

  calcAge: function (birthYearKey) {
    // we can also add a function to a abject and when you do that it is called a method and to define it we need a : after the name and the rest is same as you can see
    return 2024 - birthYearKey;
  },
};

console.log(shreyanshObject.calcAge()); // this is how you can call it, with dot
console.log(shreyanshObject["calcAge"](2010)); // this is how you can call it, with the bracket notation

// but we don't need to provide the birthYearKey, because we can read it directly from the object and we can use this keyword for it
// Like this

shreyanshObject = {
  firstNameKey: "Shreyansh",
  lastNameKey: "Vennamaneni",
  birthYearKey: 2010,
  jobKey: "Programmer",
  familyNamesKey: ["Venkateshwar", "Deepika", "Prateek", "Shreyansh"],
  hasDriversLicense: false,

  calcAge: function () {
    return 2024 - this.birthYearKey; // all we have to do is write this.(the key in the object we want)
  },
};

console.log(shreyanshObject.calcAge()); // so this going to be the object name, because it takes the name of what you called the method from in this case it is shreyanshObject so if we print this it is going to be shreyanshObject, and shreyanshObject.birthYearKey is going to give you the value of bithYearKey
// This is how "this" works

// Another thing is we can also use this to store a value in the object for Exmaple:

shreyanshObject = {
  firstNameKey: "Shreyansh",
  lastNameKey: "Vennamaneni",
  birthYearKey: 2010,
  jobKey: "Programmer",
  familyNamesKey: ["Venkateshwar", "Deepika", "Prateek", "Shreyansh"],
  hasDriversLicense: false,

  calcAge: function () {
    this.ageKeyObject = 2024 - this.birthYearKey; // this is like adding a new key to the object, so now we also have a key called age which tell me my age
    return this.age;
  },
};

console.log(shreyanshObject.calcAge());
console.log(shreyanshObject.ageKeyObject);

// Challenge

shreyanshObject.getSummary = function () {
  return `${this.firstNameKey} ${this.lastNameKey}, is a ${
    this.ageKeyObject
  } Boy. And has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
};

console.log(shreyanshObject.getSummary());

// *Also Arrays are also objects but they have built in methods in arrays, that is why they can have methods too*

// Iteration: For Loop, this is also a control structure like if else control structure

// A for loop has a counter
// Example:
console.log("Lifting weights repetition 1");

// A for loop keeps running while the condition to the right is true after the first semi-colon
for (
  let rep = 1;
  rep <= 10;
  /*This is the condition that has to be true for the for loop to keep running*/ rep++ /*This will increase the value of rep by 1 everytime the loop runs so that this loop doesn't keep running for ever*/
) {
  console.log("Lifting weights repetition " + rep); // the rep variable can be used inside the for loop and it updates everytime so we the weight repetition also increases
}

// for (let rep = 1; rep <= 10; rep++) {
//     console.log("Lifiting weights repetition" + rep)
// }

// ^ same code without all the comments 😅, went a bit over kill 🤓

// More feautures of for loop
// we can loop through arrays with a for loops

let shreyanshArray = [
  "Shreyansh",
  "Vennamaneni",
  2024 - 2010,
  "progarmmer",
  ["Deepika", "Vekateshwar", "Siddu", "Anshu"],
];

// Example:

for (let i = 0; shreyanshArray.length - 1 >= i; i++) {
  // here "i" is basically like the index so we can get the element with the element's index
  console.log(shreyanshArray[i]);
}

// we can also create a new array based on the original array
// first we have to create an empty array at the start of the loop, which looks like this:

let typesArray = [];

for (let i = 0; shreyanshArray.length - 1 >= i; i++) {
  typesArray[i] = typeof shreyanshArray[i]; // here we areassigning typeof i index which is assigned to a element in shreyanshArray, and then that typeof is added to the typesArray in the same index
}
// But this is not the only way we can also use push()
console.log(typesArray);

typesArray = [];

for (let i = 0; shreyanshArray.length - 1 >= i; i++) {
  typesArray.push(typeof shreyanshArray[i]); // this is the same as the previous method
}
console.log(typesArray);

const yearsForLoop = [1991, 2007, 2010, 1981, 1982, 1997, 2011];
const agesArray = [];

for (let i = 0; yearsForLoop.length - 1 > i; i++) {
  agesArray.push(2024 - yearsForLoop[i]); // this is going to get the age of the person who was born at that year, and add it to agesArray
}

console.log(agesArray);

// Continue and break statements
// Continue is to exit the current iteration of the loop and continue to the next iteration
// Example:
console.log("----------- Only Strings ------------");
for (let i = 0; shreyanshArray.length - 1 >= i; i++) {
  if (typeof shreyanshArray[i] !== "string") continue; // so this means that if the current element is not a string then we are continuing which is going to skip to the next iteration
  console.log(shreyanshArray[i]);
}

// Break is used to completely stop the loop
// Example:
console.log("----------- Break with Number ------------");
for (let i = 0; shreyanshArray.length - 1 >= i; i++) {
  if (typeof shreyanshArray[i] === "number") break; // so this means that if the current element is a number then we are going to break which is going to end the loop
  console.log(shreyanshArray[i]);
}

// Looping Backwards and Loops in Loops
// Looping backwards, Example:

console.log("Done with break number");

shreyanshArray = [
  "Shreyansh",
  "Vennamaneni",
  2024 - 2010,
  "progarmmer",
  ["Deepika", "Vekateshwar", "Siddu", "Anshu"],
  true,
];

// Instead of going from 0 to 4
// we are gonna go from 4 to 0

for (let i = shreyanshArray.length - 1; i >= 0; i--) {
  // i-- means subtracting one for every iteration
  console.log(i, shreyanshArray[i]);
}

// Loop in a Loop
// Example:
// case: we have three different exerices which we want to repeat 5 times each

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----------- Starting Exercise ${exercise} ----------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log("Lifting weight repetition " + rep + " 💪🏾");
  }
}

// While Loops:

// This is a for loop
console.log("------------ For Loop ------------");

for (let rep = 1; rep <= 10; rep++) {
  console.log("Lifiting weights repetition" + rep);
}

// this is a while loop and it can only have the condition and nothing else in the brackets
// while (rep <= 10) {

// }

// but if we want to get the same result we have to do this:

console.log("------------ While Loop ------------");

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

// Another use:
// A use case could be we stop rolling a dice when we get a six, so a while loop is perfect because we don't know how long it is going to take us to get the six

// Math.random() gives us a random number in decimals between 0 and 1
// and multiplying it with 6 can give us a random number from 0 to 6
// But to move the decimal we have to use Math.trunc
// But we also have to add a 1 because a dice can roll 0

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

// Problem 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// Data:
const temperatureData = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the Problem:

// Question: What is temperature amplitude?
// Answer: Difference between highest and lowest temp

// Question: How to get max and min temp?
// Answer:

// Question: What to do when we encounter an error?
// Answer: Ignore the error

// 2) Breaking up into sub-problems

// TODO: When we get an sensor error which is a string we have to ignore it DONE
// TODO: Get the highest value in the array DONE
// TODO: Get the lowest value in the array DONE
// TODO: Subtract Min from Max, and return it DONE

const calcTempAmplitude = function (tempArray) {
  let max = tempArray[0];
  let min = tempArray[0];

  for (let i = 0; tempArray.length - 1 >= i; i++) {
    const curTemp = tempArray[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  const TempAmplitude = max - min;
  return TempAmplitude;
};

console.log(calcTempAmplitude(temperatureData));

// Problem 2:
// Function should now receive 2 arrays of temp

// 1) Understanding the problem

// Question: Should we merge the two arrays?
// Answer: Yes

// 2) Breaking up into sub-problems

// TODO: Merge 2 Arrays DONE

const calcTempAmplitude2 = function (tempArray1, tempArray2) {
  const tempArray = tempArray1.concat(tempArray2);
  let max = tempArray[0];
  let min = tempArray[0];

  for (let i = 0; tempArray.length - 1 >= i; i++) {
    const curTemp = tempArray[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  const TempAmplitude = max - min;
  return TempAmplitude;
};

console.log(calcTempAmplitude2(temperatureData, temperatureData));

// Problem
// Reversing a value that is passed into a function

// 1) Understanding the problem

// Question: What values can we reverse?
// Answer: Arrays, String, Number

// Question: What do we do with the values we can't reverse
// Answer: Give it back to the user saying we can reverse it

// 2) Breaking up into sub-problems

// TODO: Reverse a Array, if passed DONE

// TODO: Reverse a String, if passed DONE

// TODO: Reverse a Number, if passed DONE

// TODO: Check if we can reverse the value passed DONE

const reverse = function (value) {
  if (typeof value === "object") return value.reverse();
  else if (typeof value === "string") return value.split("").reverse().join("");
  else if (typeof value === "number")
    return Number(String(value).split("").reverse().join(""));
  else return "Can't reverse, can only be a String, Array, or a Number";
};
console.log(reverse("Reverse"));

const mesureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees Celsius: ")),        Don't wanna get annoyed by prompt
    value: 12,
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(mesureKelvin());

// There are also other ways to show thing in the console
console.log(10); // Log
console.warn("Warn"); // Warn
console.error("Error"); // Error
console.table(shreyanshObject); // Table

// Using a Debugger

const calcTempAmplitudeBug = function (tempArray1, tempArray2) {
  const tempArray = tempArray1.concat(tempArray2);
  let max = 0;
  let min = 0;

  for (let i = 0; tempArray.length - 1 >= i; i++) {
    const curTemp = tempArray[i];
    if (typeof curTemp !== "number") continue;

    // debugger; // whenever this line is runned the debugger will be opened
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  const TempAmplitude = max - min;
  return TempAmplitude;
};

console.log(calcTempAmplitudeBug(temperatureData, temperatureData));

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem

// Question: Should we use a for loop?
// Answer: Probably yes so that we can add the strings

// 2) Breaking up into sub-problems

// TODO: Make a for loop, which loops from an array DONE

// TODO: In each loop iteration add the strings, and put it in a variable DONE

const printForecast = function (arr) {
  let finalString = "";
  for (let i = 0; arr.length - 1 >= i; i++) {
    finalString += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  return finalString;
};

console.log(printForecast([12, 5, -5, 0, 4]));

// DOM and Events Fundamentals
