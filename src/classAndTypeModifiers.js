"use strict";
// class classEx{
//     public email:string
//     private name:string //by default private
//     private readonly city:string="Jaipur"
//     constructor(email:string,name:string){
//         this.name=name;
//         this.email=email;
//    }
// }
//also can be used as below (preferable)
class classEx {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.courseCount = 1;
        this.city = "hyderabad";
    }
    deleteToken() {
        console.log("token deleted");
    }
    // constructor(public email:string,  public name:string,private userId:string){}
    //both are same
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get countOfCourse() {
        return this.courseCount;
    }
    set countOfCourse(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be greater than 1");
        }
        this.courseCount = courseNum;
    }
}
const balu = new ourUser("balu@gmail.com", "balu");
//balu.city="hyd"
//balu.deleteToken() //not accessible due to private property
