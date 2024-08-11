"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    name: "yash",
    email: "yash@gmail.com",
    isActive: true
}; //object that is created with these parameters
function createUser(name, isPaid) { }
createUser("yash", false);
//In this version, the createUser1 function takes a single parameter user which is an object with the properties name, isPaid, and email.
function createUser1(user) { }
let newUser1 = { name: "yash", isPaid: false, email: "yash@.com" };
createUser1(newUser1);
//If you want to keep the createUser1 function as it is (expecting three separate arguments)
// you need to pass the properties of the newUser1 object separately when calling the function.
//then use the below syntax 
//   function createUser1(name: string, isPaid: boolean, email: string) {
//   }
//   let newUser1 = { name: "hitesh", isPaid: false, email: "h@h.com" };
//   createUser1(newUser1.name, newUser1.isPaid, newUser1.email);
//syntax: function  name():{}{}   //first{} isfunction definition and second {} is function return type 
function createCourse() {
    return {
        name: "typescript",
        price: 999
    };
}
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });
function pointCoordinates(pt) {
    console.log("pointCoordinates of x value is", +pt.x);
    console.log("pointCoordinates of y value is", +pt.y);
}
pointCoordinates({ x: 100, y: 200 });
var myUser = {
    id: "123",
    name: "yash",
    email: "yash@gmail.com",
    isActive: true
};
myUser.email = "yash@gmail.com"; //can be changed
