"use strict";
const yashu = {
    dbId: 12, email: "email", userId: 1234,
    gitHubToken: "1234", //have to include also this parameter 
    startTrail: () => {
        return "trail started";
    }, //implementing function1
    getCoupon: (name, value) => {
        return value + 2;
    } //implementing function2
};
yashu.email = "yashu@gmail.com";
//yashu.dbId = 1232
console.log(yashu);
