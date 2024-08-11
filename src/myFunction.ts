// This function takes a number as an argument and returns the number plus 2.
function addTwo(num: number):number {
    return num + 2;
}


// This function takes a string as an argument and returns the string in uppercase.
function getUpper(val: string) {
    return val.toUpperCase();
}

// This function takes a name, email, password, and a boolean indicating if the user is paid. 
// It doesn't have any implementation yet.
function signUpUser(name: string, email: string, password: string, isPaid: boolean) {
    // Implementation can be added here
}

// This is an arrow function that takes a name, email, password, and a boolean indicating if the user is paid. 
// It defaults the isPaid parameter to false. It doesn't have any implementation yet.
let loginUser = (name: string, email: string, password: string, isPaid: boolean = false) => {
    // Implementation can be added here
}

// This function is commented out. It is intended to return true if the input number is greater than 5, 
// otherwise it returns the string "200 Ok".
// function getValue(myVal:number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 Ok"
// }

// This arrow function takes a string as an argument and returns an empty string.
const getHello = (s: string): string => {
    return " ";
}

// This is an array of hero names.
const heros = ["thor", "spiderman", "ironman"];


heros.map((hero: string) => {
    return `hero is ${hero}`;  //callback
});

// This function takes a string error message and logs it to the console. 
// It has a return type of void, indicating it doesn't return a value.
function consoleError(errMsg: string): void {
    console.log(errMsg);
}

// This function takes a string error message and throws a new Error with that message. 
// It has a return type of never, indicating it will never return (it always throws an error).
function handleError(errMsg: string): never {
    throw new Error(errMsg);
}

// Example calls to the functions defined above.
addTwo(23);
getUpper("yash");
signUpUser("yash", "yash@gmail.com", "password", true);
loginUser("yash", "yash.com", "password", true);

// This is used to indicate that the file is a module and to avoid global scope conflicts.

