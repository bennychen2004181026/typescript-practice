"use strict";
// Generics
// Generics allows you to write reusable and flexible code without sacrificing type safety. With generics, you can write functions and classes that work with different types while still retaining the type information.
// const stringEcho = (arg:string):string =>arg
// It does not only work with string type, and now it work with any type that pass into this function 
const echo = (arg) => arg;
const isObj = (arg) => {
    //checking three things here:1.is an object. 2.is not an array. 3. is not null
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true)); //false
console.log(isObj('John')); //false
console.log(isObj([1, 2, 3])); //false
console.log(isObj({ name: 'John' })); //true
console.log(isObj(null)); //false
const isTrue = (arg) => {
    // check if the array is empty as well
    if (Array.isArray(arg) && !arg.length) {
        //double exclamation mark is a shorthand way to convert any value to its boolean representation in JavaScript and TypeScript. 
        return { arg, is: false };
    }
    // check if the object is empty as well
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false)); //{arg:false,is:false}
console.log(isTrue(0)); //{arg:0,is:false}
console.log(isTrue(true)); //{arg:true,is:true}
console.log(isTrue(1)); //{arg:1,is:true}
console.log(isTrue('Ben')); //{arg:'Ben,is:true}
console.log(isTrue('')); //{arg:'',is:false}
console.log(isTrue(null)); //{arg:null,is:false}
console.log(isTrue(undefined)); //{arg:undefined,is:false}
console.log(isTrue({})); //{arg:{},is:false}
console.log(isTrue({ name: 'Ben' })); //{arg:{name:'Ben'},is:true}
console.log(isTrue([])); //{arg:[],is:false}
console.log(isTrue([1, 2, 3])); //{arg:[1,2,3],is:true}
console.log(isTrue(NaN)); //{arg:NaN,is:false}
console.log(isTrue(-0)); //{arg:false,is:false}
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'Ben' }));
//Object literal may only specify known properties, and 'name' does not exist in type 'HasID'.
// console.log(processUser({name:'Ben'}))
//T is similar to an user object here,K will be the keys of T of that user object
const getuserProperty = (users, key) => {
    return users.map(user => user[key]);
};
const userArray = [
    {
        'id': 1,
        'name': 'Leane Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'address': {
            'street': 'Kulas light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
                'lat': '-37.3159',
                'lng': '81.1496'
            }
        },
        'phone': '1-770-736 x56442',
        'website': 'hildegard.org',
        'company': {
            'name': 'Deckow-Crist',
            'catchPhrase': 'Multi-layered client-server neural-net',
            'bs': 'harness real-time e-markets'
        }
    },
    {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'email': 'Shanna@elissa.tv',
        'address': {
            'street': 'Victor Plains',
            'suite': 'Suite 879',
            'city': 'Wisokyburgh',
            'zipcode': '90566-7771',
            'geo': {
                'lat': '-43.9509',
                'lng': '-34.4618'
            }
        },
        'phone': '101-692-6593 x09125',
        'website': 'anastasia.net',
        'company': {
            'name': 'Deckow-Crist',
            'catchPhrase': 'Proactive didactic contingency',
            'bs': 'synergize scalable supply-chains'
        }
    }
];
console.log(getuserProperty(userArray, 'email')); //['Sincere@april.biz','Shanna@elissa.tv']
console.log(getuserProperty(userArray, 'username')); //['Bret','Antonette']
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
//we can specify the type by add <string> right behind the StateObject
const store = new StateObject('John');
console.log(store.state); //John
store.state = 'Dave';
// store.state = 12//Type 'number' is not assignable to type 'string'.Because we assigned a string to state when creating this object and is not going to accept another type of state
const myState = new StateObject([15]);
myState.state = (['Dave', 42, true]);
console.log(myState.state); //['Dave',42,true]
