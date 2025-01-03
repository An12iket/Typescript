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
// creating function
function IsLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// Calling function while passing arguments to an object (i.e Interface)
IsLegal({
    firstname: "Aniket",
    lastname: "Chavan",
    age: 20
});
// Enums in TS
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed === Direction.up) {
        // do something
    }
}
doSomething(Direction.down);
console.log(Direction.up);
