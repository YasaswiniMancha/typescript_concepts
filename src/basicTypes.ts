// In TypeScript, you work with types like string or number all the times.

// Important: It is string and number (etc.)  , NOT String, Number etc.

// The core primitive types in TypeScript are all lowercase! which is a type Casing




//In TypeScript, the three basic data types are numbers, strings, and booleans. Below, I’ll explain each of these types, how they are used, and provide some examples.

// 1. Numbers

//In TypeScript, the `number` type is used to represent both integers and floating-point values. TypeScript, like JavaScript, uses the IEEE 754 standard for representing numbers. This means that you can use all the arithmetic operations and methods available in JavaScript.

let integer: number = 42;
let floatingPoint: number = 3.14;
let hex: number = 0xff; // hexadecimal
let binary: number = 0b1010; // binary
let octal: number = 0o744; // octal

console.log({int:integer,floatingPoint:floatingPoint,hex:hex,binary:binary,octal:octal});

// Usage:
let sum: number = integer + floatingPoint; // Addition
let product: number = integer * 2; // Multiplication
let quotient: number = integer / 2; // Division
let remainder: number = integer % 3; // Modulus

console.log({ sum: sum, product: product, quotient: quotient, remainder: remainder });



//2. Strings

//The `string` type in TypeScript is used to represent textual data. String literals can be enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template strings.


let singleQuoteString: string = 'Hello, TypeScript!';
let doubleQuoteString: string = "Hello, TypeScript!";
let templateString: string = `Hello, TypeScript!`;

console.log({singleQuoteString:singleQuoteString, doubleQuoteString: doubleQuoteString, templateString:templateString})


//Template Strings:
//Template strings, enclosed in backticks, can include expressions embedded within `${}`.


let nameIs: string = 'John';
let greeting: string = `Hello, ${nameIs}!`; // Hello, John!

console.log({nameIs:nameIs,greeting:greeting}); //


//String Methods:
let upperCaseString: string = nameIs.toUpperCase(); // JOHN
let lowerCaseString: string = nameIs.toLowerCase(); // john
let concatenatedString: string = 'Hello, ' + name + '!'; // Hello, John!

console.log({upperCaseString:upperCaseString, lowerCaseString:lowerCaseString,concatenatedString:concatenatedString})

// 3. Booleans

//The `boolean` type is used to represent a logical value: `true` or `false`.


let isDone: boolean = false;
let isActive: boolean = true;

//Usage in Conditional Statements:
if (isDone) {
    console.log('Task completed!');
} else {
    console.log('Task not completed!');
}


// Boolean Operations:
let isOver18: boolean = true;
let hasParentalConsent: boolean = false;
let canSignUp: boolean = isOver18 || hasParentalConsent; // true if either condition is true
let isEligible: boolean = isOver18 && hasParentalConsent; // true only if both conditions are true
let isMinor: boolean = !isOver18; // negation

console.log({isOver18:isOver18,hasParentalConsent:hasParentalConsent,canSignUp:canSignUp,isEligible:isEligible,isMinor:isMinor})


//Type Assertions

//TypeScript allows you to assert the type of a value. This is useful when you know more about the type of a value than TypeScript does.


let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
console.log({someValue: someValue, strLength: strLength})


// Type Inference

//TypeScript can infer types based on the values assigned to variables. This means that you often don't need to explicitly specify the type.


let inferredNumber = 42; // inferred as number
let inferredString = 'Hello'; // inferred as string
let inferredBoolean = true; // inferred as boolean

console.log({inferredNumber:inferredNumber, inferredString:inferredString, inferredBoolean:inferredBoolean})


// - **Numbers**: Represent numerical values and support arithmetic operations.
// - **Strings**: Represent textual data and support various string operations.
// - **Booleans**: Represent true/false values and are often used in conditional logic.

// TypeScript's strong typing helps catch errors at compile time and provides better tooling support, such as auto-completion and refactoring, enhancing the development experience.