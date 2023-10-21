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