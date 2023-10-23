// Index Signatures

// interface TransactionObg {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

//It declears that we know all of the keys will be strings and all of the values will be numbers
interface TransactionObg {
    //the keys are usually strings but can not be boolean
    //the readonly protect the properties being modified
    readonly [index: string]: number
    // the following three properties are required and we can add more property in subtyping
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTrasactions: TransactionObg = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTrasactions.Pizza)//-10
console.log(todaysTrasactions['Pizza'])//-10

let prop: string = 'Pizza'
console.log(todaysTrasactions[prop])//No index signature with a parameter of type 'string' was found on type 'TransactionObg'.


const todayNet = (transactions: TransactionObg): number => {
    let total = 0
    for (const transaction in transactions) {
        //with Index Signatures being defined above, it does not appear warning in TS
        total += transactions[transaction]
    }
    return total
}

console.log(todayNet(todaysTrasactions))

//Index signature in type 'TransactionObg' only permits reading.
// todaysTrasactions.Pizza = 40

//TS can not see if the property exists
console.log(todaysTrasactions['Ben'])//undefined


///////////////////////////////

interface Student {

    //provide undefined when one of properties is optional
    // [ket: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}
//create an object student from Student inderface
const student: Student = {
    name: 'Ben',
    GPA: 3.5,
    classes: [100, 200]
}
// Because we define the interface with optional property with undefined,so TS does not know if the specific property exist
//console.log(student.test)

for (const key in student) {
    // if the above Index signature is not defined in interface, then we use assertion as to notice TS
    //the keyof here is for creating a union type of above
    console.log(`${key}:${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    //use typeof to inform TS what the type is for specific property

    //becasu we are using Object not the interface, so is the student not the Student
    console.log(student[key as keyof typeof student])
})

//Because we don't return any here so use the void type.
// keyof will be defined as string literal
const logStudentKey = (student: Student,
    key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')//Student name: Ben

///////////////////////////////////

// interface Incomes {
//     [key:string]:number
// }

type Streams = 'salary' | 'bounus' | 'sidehustle'
// Record<K, T> utility type constructs an object type where the keys are of type K and the values are of type T. It's a way to create a new type based on some existing types.

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 20000,
    bounus: 2000,
    sidehustle: 600
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}

//This is extremely useful when you want to map properties of an object to another type.

// 1: Basic Usage
type UserRecord = Record<string, string>;

const users1: UserRecord = {
    '1': 'Alice',
    '2': 'Bob',
    '3': 'Charlie'
};

// This is equivalent to
const users: { [key: string]: string } = {
    '1': 'Alice',
    '2': 'Bob',
    '3': 'Charlie'
};


//2: Mapping Enum to Values

enum Fruit {
    Apple = 'apple',
    Orange = 'orange',
    Mango = 'mango'
}

type FruitColors = Record<Fruit, string>;

const colors: FruitColors = {
    [Fruit.Apple]: 'red',
    [Fruit.Orange]: 'orange',
    [Fruit.Mango]: 'yellow'
};

//3.Transforming Property Types

type Person = {
    name: string;
    age: number;
    address: string;
}

type PersonRecord = Record<keyof Person, string>;
//In this example, PersonRecord will have all the same keys as Person, but each property will be of type string.
const personRecord: PersonRecord = {
    name: 'Alice',
    age: '30', // Note that age is now a string
    address: 'Wonderland'
};
