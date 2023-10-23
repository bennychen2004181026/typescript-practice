"use strict";
//class
class Coder {
    constructor(
    //use access modifiers like public, private, and protected directly in the constructor parameters. Doing this automatically initializes a class property with the same name and sets it to the value that's passed in.
    name, 
    //The readonly modifier in TypeScript is used for making properties immutable, meaning that once a value is set, it cannot be changed. It's a way to enforce that a property can only be set during the initialization phase inside the constructor of a class and not modified after that.
    music, age, 
    // Adding default value
    lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        //Because it's a private value
        return `Hello, I'm ${this.age}`;
    }
}
const Ben = new Coder('Ben', 'Rock', 18);
console.log(Ben.getAge()); //This is OK because we got the value inside the class
// console.log(Ben.age) warning: Property 'age' is private and only accessible within class 'Coder'
// console.log(Ben.lang)warning: Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
// console.log(Sara.age)
// console.log(Sara.lang)
//In TypeScript (and many other object-oriented programming languages), access modifiers are used to set the accessibility of class members (properties, methods). TypeScript supports three access modifiers:
//1.public: Members are accessible from any location. This is the default accessibility level for class members if you don't specify an access modifier.
class Animal {
    constructor(name) {
        this.name = name;
    }
}
//Here, 'name' is accessible from any code that has access to an instance of 'Animal'.
//2.private: Members are only accessible within the class that declares them. You can't access private members from subclasses or from outside the class.
class Animal1 {
    constructor(name) {
        this.name = name;
    }
}
const myAnimal = new Animal1("Dog");
//   In this example, trying to access name from outside the Animal class would result in a TypeScript compile-time error.
//3.protected: Members are accessible within the class that declares them and within subclasses. However, they're not accessible from other locations.
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal2 {
    bark() {
        // This is okay
        return `Woof! Woof! My name is ${this.name}`;
    }
}
//When a class implements an interface, the class must define all the properties, methods, and other members that the interface declares. If the class fails to do so, TypeScript will raise a compilation error.
class Guitarist1 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    //// Implement the `play` method as per the Musician interface
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist1('Jimmy', 'guitarist');
console.log(Page.play('strums'));
////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        //++on the left will increment first and make the first to be one, on the right will initialize it with 0
        this.id = ++Peeps.count;
    }
}
// The static keyword in a class definition in TypeScript (and also in many other programming languages like Java, C#, etc.) is used to define a static method or property that belongs to the class itself, rather than any particular object instance. A static member can be accessed directly on the class, without needing to create an instance of the class.
//Static methods are often used for utility functions that are relevant to all instances but don't require access to any instance-specific data or methods.
// Static properties could be used to maintain data that should be shared among all instances.
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count); //base on how many instance we have initialized, here woulb be 3
console.log(Amy.id); //3
console.log(Steve.id); //2
console.log(John.id); //1
////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    //define a getter method in an object or class. A getter is a method that gets the value of a specific property. When you access this property, the getter function is invoked automatically, and the value it returns is used as the value of the property.
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(e => typeof e === 'string')) {
            this.dataState = value;
            // becasu the setter can not return a value,so the return is empty
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep'];
console.log(myBands.data); //['Neil Young','Led Zep']
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data); //['Neil Young','Led Zep','ZZ Top']
// myBands.data = 'Van'Type 'string' is not assignable to type 'string[]'
