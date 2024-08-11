"use strict";
//   ---Spreading Arrays = The spread operator can be used to copy elements from one array to another or combine multiple arrays.
//Copying Arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
//Combining Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
// ---Spreading Objects= The spread operator can also be used to copy properties from one object to another or merge multiple objects.
//Copying Objects
const originalObject = { a: 1, b: 2 };
const copiedObject = Object.assign({}, originalObject);
console.log(copiedObject); // Output: { a: 1, b: 2 }
//Merging Objects
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = Object.assign(Object.assign({}, object1), object2);
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
//Overriding Properties
//When merging objects, properties in later objects will overwrite those in earlier objects if they have the same key.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign(Object.assign({}, obj1), obj2);
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }
//Cloning an Array with Modification
const numbers = [1, 2, 3, 4, 5];
const numbersWithExtra = [...numbers, 6];
console.log(numbersWithExtra); // Output: [1, 2, 3, 4, 5, 6]
//Updating Properties in an Object
const person = { name: 'Alice', age: 25 };
const updatedPerson = Object.assign(Object.assign({}, person), { age: 26 });
console.log(updatedPerson); // Output: { name: 'Alice', age: 26 }
//Spreading Typed Arrays
const numArray = [1, 2, 3];
const newArray = [...numArray, 4];
console.log(newArray); // Output: [1, 2, 3, 4]
const person_ = { name: 'Bob', age: 30 };
const updatedPerson_ = Object.assign(Object.assign({}, person_), { age: 31 });
console.log(updatedPerson_); // Output: { name: 'Bob', age: 31 }
