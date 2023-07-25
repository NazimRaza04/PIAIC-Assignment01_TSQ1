"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//a.  Tests for equality and inequality with strings
let a = "PIAIC";
let b = "PIAIC";
if (a == b) {
    console.log("The strings are equal.");
}
else {
    console.log("The strings are not equal.");
}
if (a !== b) {
    console.log("The strings are equal.");
}
else {
    console.log("The strings are not equal.");
}
//b. Tests using the lower case function
let c = "PIAIC";
console.log(c == "PIAIC");
console.log(c == "piaic");
//c.  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equality and inequality
let d = 1;
let e = 1;
if (d == e) {
    console.log("The numbers are equal.");
}
else {
    console.log("The numbers are not equal.");
}
let f = 1;
let g = 3;
if (f == g) {
    console.log("The numbers are equal.");
}
else {
    console.log("The numbers are not equal.");
}
//greater than
let h = 10;
let i = 5;
if (h > i) {
    console.log("10 is greater than 5");
}
else {
    console.log("10 is less than 5.");
}
//less than
let j = 5;
let k = 10;
if (j < k) {
    console.log("5 is less than 10");
}
else {
    console.log("5 is greater than 10.");
}
//greater than or equal to
let myAge = 20;
if (myAge >= 18) {
    console.log("You are allowed");
}
else {
    console.log("You are not allowed");
}
//less than or equal to
if (myAge <= 18) {
    console.log("You are allowed");
}
else {
    console.log("You are not allowed");
}
//d. • Tests using "and" and "or" operators
let haveCoupanCode = true;
let billAmount = 1000;
let result = haveCoupanCode && billAmount >= 1000;
console.log(result);
let haveCoupanCode2 = false;
let billAmount1 = 1000;
let result2 = haveCoupanCode2 && billAmount1 >= 1000;
console.log(result2);
let isSubscribed = false;
let billAmount3 = 1000;
let result3 = isSubscribed || billAmount3 >= 1000;
console.log(result3);
let isSubscribed1 = false;
let billAmount4 = 900;
let result4 = isSubscribed1 || billAmount4 >= 1000;
console.log(result4);
//e. • Test whether an item is in an array
let w = [0, 1, 2, 3, 4];
if (w.includes(0)) {
    console.log("Number 0 is in array");
}
else {
    console.log("Number 0 is not in array");
}
//f. • Test whether an item is not in a array
let z = [1, 2, 3, 4];
if (z.includes(5)) {
    console.log("Number 5 is in array");
}
else {
    console.log("Number 5 is not in array");
}
