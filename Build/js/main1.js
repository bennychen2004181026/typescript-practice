"use strict";
let x;
let y;
x = "hello"; // Valid
x = 42; // Valid
// x = true;  // Error
y = [10, 20]; // Valid
// Using the User type alias in a function
function getUserInfo(user) {
    return `ID: ${user.id}, Name: ${user.name}`;
}
const user = { id: 1, name: "Alice" };
console.log(getUserInfo(user)); // Output: "ID: 1, Name: Alice"
//Type Aliases vs Interfaces:
//Although type aliases and interfaces look similar, there are subtle differences:
// Interfaces can be merged using declaration merging, but type aliases can't.
// Interfaces can be implemented by classes, but type aliases can't.
// Type aliases can use computed properties.
// Literal types
let myName;
// This type only the values in the union can be assigned to the variable
let userName;
// if assign another value of the union, error emerge
userName = "Amy";
//function
const add = (a, b) => {
    return a + b;
};
//if we didn't need to return any then the type should be specified as void.
// void type is for function that do not have an explicit return or not return any value
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
// logMsg(add('2',3)) TS still check the type even we are calling a function inside another function
//Anonymous Function Expressions
let subtract = function (c, d) {
    return c - d;
};
// multiply is an alises of mathFunction
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
let multiply1 = function (c, d) {
    return c * d;
};
logMsg(multiply1(2, 2));
//optioanl parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
//we could not set default value on type or interface
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2)); //7
logMsg(addAll(2, 3)); //5
logMsg(sumAll(2, 3)); //7
logMsg(sumAll(undefined, 3)); //15, although the first param is default,it still need a undefined argument
//Rest Parameters
//the content of rest operator should come at the end all of other required parameters, the parameters ahead are required
const total = (a, ...nums) => {
    //Because we already define the parameters and return type, so the prev and curr does not need to define type
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3)); //15
//never type 
//never typs is for functions that explicitly throw errors or has an infinite or endless looping inside
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//if the i condition is not applied, the type will be never, and if it applied, it will be void type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type check
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//never type is useful when we type guards to check the type of ouor parameters and return explicit error
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
