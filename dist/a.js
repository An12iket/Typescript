"use strict";
// const x: number = 2;
// console.log(x);
// functions in TS
function greet(firstname) {
    console.log(`Hello ${firstname}`);
}
greet('Aniket');
function sum(num1, num2) {
    return num1 + num2;
}
const value = sum(1, 3);
console.log(value);
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal(16);
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
runAfter1s(function () {
    console.log("HELLO");
});
