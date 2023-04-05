// number datatype
var age = 25;
var salary = 5000.50;
console.log(age + salary);
// string data type 
var myname = "John";
var message = 'Hello, world!';
console.log(myname);
// boolean 
var isDone = false;
var isLoggedIn = true;
// array 
var numbers = [1, 2, 3, 4, 5];
var names = ['Alice', 'Bob', 'Charlie'];
names.forEach(function (element) {
    console.log(element);
});
// object 
var person = { name: 'lily', age: 30 };
console.log(person.name);
// any 
var dynamicValue = 42;
dynamicValue = 'Hello';
console.log(dynamicValue);
// tuple :In TypeScript, a tuple is a specific type that represents ,an array with a fixed number of elements of different types, where the type and order of the elements are known. It allows you to define an array with a specific structure and enforce the types of its elements at specific positions.
var myTuple;
// Assign values to the tuple
myTuple = ["hello", 123, true];
// Access elements of the tuple
console.log(myTuple[0]); // Output: "hello"
console.log(myTuple[1]); // Output: 123
console.log(myTuple[2]); // Output: true
var c = 1 /* color.blue */;
console.log(c);
