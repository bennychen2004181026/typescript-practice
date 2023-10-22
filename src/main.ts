let yourname = "Ben";
console.log(yourname);

let a: number = 12;
let b: number = 6;
// let b: string = "6"will throw error
let c: number = 2;

console.log(a / b);

console.log(c * b);

let meaningOfLife: number;
let isLoading: boolean;
// use | to inform TS this is a union type
let album: string | number;

meaningOfLife = 42;
isLoading = true;
album = 1984;

//Typescript knows what will be return base the type of number parameters
//If one of the arguments bing set to string, Typescript can infer that what
//will be returned as string
const sum = (c: number, d: number) => {
    return c + d;
};

let postId: string | number
// It's not limit to only one or two data types
let isActive: number | boolean | string
// regular expression type
let re: RegExp = /\w+/g


//let stringArr: string[]
let stringArr = ['one', 'two', 'three']
//let guitars: (string | number)[]
let guitars = ['Strat', 'Les Paul', 5150]
//let mixeData: (string | number | boolean)[]
let mixeData = ['EVH', 1984, true]
// if assign a different type for string in that
// string array, TS will throw error
stringArr[0] = 'John'
//  Because TS know this is a string array, so it's
//  ok to add a string. TS does not put a length limit.
stringArr.push('hey')

// TS does not limit the specific index type since it 
// know is included in the union types
guitars[0] = 1984
guitars.unshift('Jim')

// Type 'string | number' is not assignable to type 'string'.
// stringArr = guitars will throw error
// neither guitars = mixeData

// only strings array is assignable to Type 'string | number'
guitars = stringArr
mixeData = guitars

let test1 = []
// define the array to only allow string elements
// by string[] annotation
let bands: string[] = []
bands.push("abc")

//Tuple
//assign type to specific index and limit the length
//let myTuple: [string, number, boolean]
let myTuple: [string, number, boolean] = ['Ben', 18, true]
//let mixed: (string | number | boolean)[]
let mixed = ['John', 1, false]

// myTuple = mixed will throw an error because the mixed array
// may have fewer or more elements
mixed = myTuple

//myTuple[3] = 42 throws two errors:
//1. Type '42' is not assignable to type 'undefined'.
//2. Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
myTuple[1] = 42


//objects
let myObj: object
// since array is also a type of object
myObj = []
// The log result is object
console.log(typeof myObj)
//bands is a string array so it's ok to assign to myObj
myObj = bands
//And it's ok to assign an empty pairs curly brace
myObj = {}

const exampleObj = {
    prop1: "Ben",
    prop2: true
}
// Because the type of prop1 was assigned with type
exampleObj.prop1 = "Benny"

type Guitarist = {
    name: string,
    //only in Type Object definition can add a question mark behind
    //attributes to define it to be the following type or undefined
    //optional
    active?: boolean,
    // an array of union type of string and number only
    albums: (string | number)[]
}


let evh: Guitarist = {
    name: "Eddie",
    //because the active in type definition is either boolean or undefined
    //active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'IV']
}
// Beacuse they are both Guitarist type
evh = jp

// add properties through evh.years = 40 is not going to work
// because the type properties are already predefined

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello, ${guitarist.name}!`
}

console.log(greetGuitarist(jp))

// For type defining form we can use interface as well
// but no equal sign with interface
// interface would normally be used when it's defining object
// like a class
interface Member {
    name?: string
    no: Number
}

let member1: Member = {
    name: "Anne",
    no: 1
}

const greetMember = (member1: Member) => {
    if (member1.name) {
        // If apply a method on the undefined property, TS will
        // automatically add a question mark behind the property
        // To apply the condition check without question can remove the
        // question mark
        return `Hello, ${member1.name.toUpperCase()}!`
        // return `Hello, ${member1.name?.toUpperCase()}!`
    }
    //because it's return a union type :
    //const greetMember: (member1: Member) => string | undefined
    return 'Hello'
}

//Enum
// In TypeScript, an enum (short for "enumeration") is a special way
// to create named constants. It is essentially a custom data type that
// you can define, allowing you to use human-readable names for sets of
// numeric or string values. Using enum makes it easier to document intent
// or create a set of distinct cases. This can be particularly useful in a 
// project that involves lots of set values, where you'd like to ensure that 
// variables have one of a small set of possible values.

enum Grade {
    //U defalut by 0 because of index,if apply an integer,the following will adopt too
    U = 1,
    D,
    C,
    B,
    A
}
// result is 5
console.log(Grade.A)