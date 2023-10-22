// Type Aliases
type stringOrNumer = string | number

type stringOrNumerArray = (string | number)[]


type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

type UserId = stringOrNumer

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