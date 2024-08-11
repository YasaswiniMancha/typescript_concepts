"use strict";
//A Tuple is an array which store multiple fields belong to different data types.
//It represents the heterogeneous collection of values and can also be passed as parameters in a function call.
//syntax   let tuple_name = [val1,val2,val3, ...val n];  
let arrTuple = [101, "yash", 105, "abhi"];
console.log("tuple1: ", arrTuple);
// Operations on Tuple
// A tuple has two operations: Push()   and Pop()
arrTuple.push(9765, '234rsdf');
console.log("tuple1 after push : ", arrTuple); // o/p: [101, 'yash', 105, 'abhi', 9765, '234rsdf']
arrTuple.pop();
console.log("tuple1 after pop : ", arrTuple); // o/p: [101, 'yash', 105, 'abhi', 9765]
//we can also declare a tuple like this
let arrTuple2 = [];
arrTuple2[0] = 101;
arrTuple2[1] = 105;
console.log("tuple2: ", arrTuple2);
//Tuples are mutable, which means we can update or change the values of tuple elements.
// To modify the fields of a Tuple, we need to use the index of the fields and assignment operator. 
