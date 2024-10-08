"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 9;
}
function provideId(id) {
    if (!id) {
        console.log("please provide the id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(strs);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return {}; //else cond
}
//instance of narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getShape(s) {
    if (s.kind === "circle") {
        return Math.PI * s.radius ** 2;
    }
    return s.side * s.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const defaultforshape = shape;
            return defaultforshape;
    }
}
