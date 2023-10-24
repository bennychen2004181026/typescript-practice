"use strict";
// Index Signatures
const todaysTrasactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTrasactions.Pizza); //-10
console.log(todaysTrasactions['Pizza']); //-10
let prop = 'Pizza';
console.log(todaysTrasactions[prop]); //No index signature with a parameter of type 'string' was found on type 'TransactionObg'.
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        //with Index Signatures being defined above, it does not appear warning in TS
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaysTrasactions));
//Index signature in type 'TransactionObg' only permits reading.
// todaysTrasactions.Pizza = 40
//TS can not see if the property exists
console.log(todaysTrasactions['Ben']); //undefined
//create an object student from Student inderface
const student = {
    name: 'Ben',
    GPA: 3.5,
    classes: [100, 200]
};
// Because we define the interface with optional property with undefined,so TS does not know if the specific property exist
//console.log(student.test)
for (const key in student) {
    // if the above Index signature is not defined in interface, then we use assertion as to notice TS
    //the keyof here is for creating a union type of above
    console.log(`${key}:${student[key]}`);
}
Object.keys(student).map(key => {
    //use typeof to inform TS what the type is for specific property
    //becasu we are using Object not the interface, so is the student not the Student
    console.log(student[key]);
});
//Because we don't return any here so use the void type.
// keyof will be defined as string literal
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name'); //Student name: Ben
const monthlyIncomes = {
    salary: 20000,
    bounus: 2000,
    sidehustle: 600
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
const users1 = {
    '1': 'Alice',
    '2': 'Bob',
    '3': 'Charlie'
};
// This is equivalent to
const users = {
    '1': 'Alice',
    '2': 'Bob',
    '3': 'Charlie'
};
//2: Mapping Enum to Values
var Fruit;
(function (Fruit) {
    Fruit["Apple"] = "apple";
    Fruit["Orange"] = "orange";
    Fruit["Mango"] = "mango";
})(Fruit || (Fruit = {}));
const colors = {
    [Fruit.Apple]: 'red',
    [Fruit.Orange]: 'orange',
    [Fruit.Mango]: 'yellow'
};
//In this example, PersonRecord will have all the same keys as Person, but each property will be of type string.
const personRecord = {
    name: 'Alice',
    age: '30',
    address: 'Wonderland'
};
