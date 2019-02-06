// In this exercise we practice using variables and pasisng them
// to functions (as parameters) and from functions (as return values)

// in JS we work with several kinds of variables.
// There are several ways to declare varaiables, but we will always use
// this structure:
// var name = value;

// you can also declare several variables at once:
// var name1 = value1,
//     name2 = value2,
//     name3 = value3;
// note the commas on the first 2 lines, and the semi-colon on the last

// Here are the variable types you are likely to encounter in the course:
// - strings are sequences of letters or other characters
// - numbers are treated by JS as numbers, not as strings
// - booleans are either true or false
// - arrays are collections of values, usually written as [value0, value1, value2]
// - objects are complex variables with internal structure.
// Objects are quite a bit more complex than the other variable types and we will
// discuss them later.


// Problem 1
// write a function "hello" that always returns the string "Hello!"

function hello () {
  return `Hello!`; // should return "Hello!"
  // if you want you can declare a string variable first
  // or in this case you can just return the string directly
  // with something like "return 'Hello!'"
}


// Problem 2
// Improve your initial function by accepting a parameter
// "name" and returning a string "Hello, [insert name]!"

function greeting(name) {
  // use the '+' operator to combine
  // strings.  So for instance, if I wanted to
  // say goodbye, I might write
  // var parting = "Goodbye, " + name + ".";
  // (but of course, I actually want to say hello.)
}

// Problem 3
// write a function that takes three parameters and returns an array
// consisting of the three parameters together

function returnArray (first, second, third) {
  // you can define the array using "new Array ()" or just "[ , , ]"
  // don't forget to return it
}


// Problem 4
// write a function that, when passed a single argument (an array of 3 or more elements)
// returns a sentence of the form "first second was a third", so, e.g.,
// splitArray(["Italo", "Calvino", "novelist"])
// should return
// "Italo Calvino was a novelist."

function splitArray (thisArray) {
  // remember you can access individual elements of an array with
  // array[0]
  // array[1]
  // etc.

}

// Problem 5
// A. Write a simple function that takes two arguments.  Subtact the second number from the first.
// Return the result
function subtract(number1, number2) {
  // subtract number2 from number1, and return the result.
}


//B. Write a slightly more complex number that only performs the subtraction after testing to be
// sure that both parameters are numbers. If so, return the result. If not, return the string
// "I can only subtract numbers."

function carefulSubtract (first, second) {
  // test to be sure that both first and second are numbers.
  // if so, return the result. Otherwise, return the string
  // "I can only subtract numbers."
  return first - second;
}



// Problem 6
// Write a simple function that does the following:
// if the parameter is a string, return the string followed by the additional text " yay!"
// if the parameter is a number, return the *square* of the number
// if the parameter is null, return the string "sorry, I can't do anything with a null value."
// for any other type, return "I don't know how to use that kind of variable."
function typeTester (unknown) {
  // use an if/else construction, a switch/case , or any other branching logic. Remember to
  // return a value. 
}



// DO NOT MODIFY -- FOR AUTOMATED TESTING ONLY
// MODIFYING THIS CODE WILL ALMOST CERTAINLY CAUSE YOUR TESTS TO BREAK
// AND YOUR ASSIGNMENT TO FAIL!
var exports;

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  exports = module.exports = {};
}
else {
  exports = window.skeleton = {};
}

let functions = [hello, greeting, returnArray, splitArray,
  subtract, carefulSubtract, typeTester];

for (let i in functions) {
  exports[functions[i].name] = functions[i]; // get the name as string first!
}

// console.log(exports);
// exports.hello = hello;
// exports.greeting = greeting;
// exports.returnArray = returnArray;
// exports.splitArray = splitArray;
