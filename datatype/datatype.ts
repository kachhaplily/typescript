// number datatype

let age: number = 25;
let salary: number = 5000.50;

console.log(age+salary)

// string data type 
let myname: string = "John";
let message: string = 'Hello, world!';
console.log(myname);

// boolean 

let isDone: boolean = false;
let isLoggedIn: boolean = true;

// array 
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];

names.forEach(element => {
    console.log(element)
    
});

// object 
let person: { name: string, age: number } = { name: 'lily', age: 30 };
console.log(person.name)


// any 
let dynamicValue: any = 42;
dynamicValue = 'Hello';
console.log(dynamicValue)


// tuple :In TypeScript, a tuple is a specific type that represents ,an array with a fixed number of elements of different types, where the type and order of the elements are known. It allows you to define an array with a specific structure and enforce the types of its elements at specific positions.

let myTuple: [string, number, boolean];

// Assign values to the tuple
myTuple = ["hello", 123, true];

// Access elements of the tuple
console.log(myTuple[0]); // Output: "hello"
console.log(myTuple[1]); // Output: 123
console.log(myTuple[2]); // Output: true



// never :In TypeScript, the never type is used to represent a type that never occurs. It is a type that indicates that a value will never be assigned or a function will never return

// function throwError(message: string): never {
//     throw new Error(message);
//   }
  
//   const result: never = throwError("An error occurred."); // This function will never return a value
// console.log(result);  

// enum 
const enum color {
    red ,
    blue ,
    green
}
let c:color=color.blue
console.log(c)

