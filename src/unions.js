"use strict";
let score = 22;
score = 44;
score = "1234";
let yash = { name: "yash", id: 123 };
yash = { username: "yashu", id: 123 };
getDbId(5);
getDbId("5");
function getDbId(id) {
    console.log(`db id is: ${id}`);
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
const data = [1, 2, 3];
const data1 = ["1", "2", "3"];
const data2 = ["1", 2, true];
//const data3: any [] = ["1",2,true]
let seatAllotment;
seatAllotment = "aisle";
//seatAllotment="crew"  doens't work
