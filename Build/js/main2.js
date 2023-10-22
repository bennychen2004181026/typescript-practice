"use strict";
// Typescript casting and assertion
// Tell TypeScript compiler about how to interpret types and it comes into play when we work with the Dom(document object model)
//convert to more or less specific
let ab = 'hello';
let bb = ab; //less specific
let cb = ab; //more specific
// in a TypeScript file with JSX syntax (.tsx), angle bracket syntax for type assertions is not allowed because it conflicts with JSX elements. In these situations, you should use the as keyword for type assertions instead.
let d = 'world';
let e = 'world';
const addOrCancat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
//if without assertion, TS will consider myVal is just not good with only string while the expected returning is a union with number and string. So we can use as assertion to let TS know the returning is a string type
let myVal = addOrCancat(2, 2, 'concat');
//Be careful TS sees no problem here but a string is returned
let nextVal = addOrCancat(2, 2, 'concat');
// bad takes because it overwrite the rule of TS
10;
//The DOM
//HTMLImageElement | null
const img = document.querySelector('img');
//HTMLElement | null
//Using ! as a non null asserion to tell TS this is not a null type
const myImg = document.getElementById('#img');
//I can tell TS this is a HTMLImageElement by using angle bracket ahead
const nextImg = document.getElementById('#img');
//Because we explicitly tell TS this is an image element by using as HTMLImageElement above,so the warning of "may be a null" will gone
img.src;
//'myImg' is possibly 'null'if we take off the non null asserion ! mark
myImg.src;
