
const person = { name: "joe", age: 80, veteran: false };

const { name, ...rest } = person;

console.log(name); // "joe"
console.log(rest); //{ age: 80, veteran: false }