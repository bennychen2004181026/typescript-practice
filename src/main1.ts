// Type Aliases
type stringOrNumer = string | number

type stringOrNumerArray = (string | number)[]


type Guitarist = {
    name: string,
    active?: boolean,
    // use type definition in another type definition
    albums: stringOrNumerArray
}

type UserId = stringOrNumer

// interface consider the PostId as classes or objects rather than the TS type
// interface PostId = stringOrNumer doesn't work

//Type aliases in TypeScript allow you to create new names for types. Type aliases are sometimes similar to interfaces, but can name primitive types, union types, tuple types, and any other types that you'd otherwise have to write by hand. 

type StringOrNumber = string | number;
type Coordinate = [number, number];

let x: StringOrNumber;
let y: Coordinate;

x = "hello";  // Valid
x = 42;       // Valid
// x = true;  // Error

y = [10, 20];  // Valid
// y = [10, '20']; // Error

type User = {
    id: number;
    name: string;
};

// Using the User type alias in a function
function getUserInfo(user: User) {
    return `ID: ${user.id}, Name: ${user.name}`;
}

const user: User = { id: 1, name: "Alice" };

console.log(getUserInfo(user)); // Output: "ID: 1, Name: Alice"

//Type Aliases vs Interfaces:
//Although type aliases and interfaces look similar, there are subtle differences:

// Interfaces can be merged using declaration merging, but type aliases can't.
// Interfaces can be implemented by classes, but type aliases can't.
// Type aliases can use computed properties.


// Literal types
let myName: "Ben"

// This type only the values in the union can be assigned to the variable
let userName: "Dave" | "John" | "Amy"
// if assign another value of the union, error emerge
userName = "Amy"


//function
const add = (a: number, b: number): number => {
    return a + b
}
//if we didn't need to return any then the type should be specified as void.
// void type is for function that do not have an explicit return or not return any value
const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("Hello!")
logMsg(add(2, 3))

// logMsg(add('2',3)) TS still check the type even we are calling a function inside another function

//Anonymous Function Expressions
let subtract = function (c: number, d: number): number {
    return c - d
}
//Predefine a function type if it will be applied many times
type mathFunction = (a: number, b: number) => number

// multiply is an alises of mathFunction
let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// interface version, when considered as classes and being able to be extended
interface mathFunction1 {
    (a: number, b: number): number
}

let multiply1: mathFunction1 = function (c, d) {
    return c * d
}

logMsg(multiply1(2, 2))


//optioanl parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') { return a + b + c }
    return a + b
}

//default param value
//we could not set default value on type or interface
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))//7
logMsg(addAll(2, 3))//5
logMsg(sumAll(2, 3))//7
logMsg(sumAll(undefined, 3))//15, although the first param is default,it still need a undefined argument

//Rest Parameters
//the content of rest operator should come at the end all of other required parameters, the parameters ahead are required
const total = (a: number, ...nums: number[]): number => {
    //Because we already define the parameters and return type, so the prev and curr does not need to define type
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))//15

//never type 
//never typs is for functions that explicitly throw errors or has an infinite or endless looping inside
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}
//if the i condition is not applied, the type will be never, and if it applied, it will be void type
const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

//custom type check
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}
//never type is useful when we type guards to check the type of ouor parameters and return explicit error
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}
