"use strict";
const person1 = {
    name: 'Bob',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
let favouriteActivities = ['sports'];
console.log(person1.name);
for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
}
