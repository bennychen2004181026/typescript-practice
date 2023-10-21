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