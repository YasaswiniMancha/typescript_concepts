//An array is a type of data structure where we store the elements of a similar data type.
 //In an array, we can store only a fixed set of elements. We can also use it as an object.
//homogenous collection
//The array is index-based storage, where the first element stored at index 0.


//syntax using square braces -> let array_name[:datatype] = [val1,val2,valn..]  
let arrname : string[]=['yash','yasaswini']
console.log(arrname)

//syntax using generic array type-> let array_name: Array<elementType> = [val1,val2,valn..]  
let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];  
console.log(fruits);




const superHeroes: string[] = []

superHeroes.push('Batman')


const superPowers:number[] =[]

superPowers.push(100)

const heroPower: Array<number> = []

type User={
    name:string,
   isActive:boolean
}
const allUsers:User[]=[]
allUsers.push({name:'yash',isActive:false})





const MLModels: number[][]=[
   [245,986,345], []
]

console.log("ml models",MLModels)



//Array Object
//Array objects allow us to store multiple values in a single variable. 
//We can create an array by using the Array object. The Array constructor is used to pass the following arguments for array creation.
let arr:string[] = new Array("apple", "2300", "Java", "Abhishek");   

//Passing Arrays to Functions

//We can pass arrays to functions by specifying the array name without an index.

function display(arr_values:string[]) {  
   for(let i = 0;i<arr_values.length;i++) {   
      console.log(arr[i]);  
   }    
}  
//Calling arrays in function  
display(arr);  





//methods in arrays

// 1. concat()	It is used to joins two arrays and returns the combined result.
// 2.	copyWithin()	It copies a sequence of an element within the array.
// 3.	every()	It returns true if every element in the array satisfies the provided testing function.
// 4.	fill()	It fills an array with a static value from the specified start to end index.
// 5.	indexOf()	It returns the index of the matching element in the array, otherwise -1.
// 6.	includes()	It is used to check whether the array contains a certain element or not.
// 7.	Join()	It is used to joins all elements of an array into a string.
// 8.	lastIndexOf()	It returns the last index of an element in the array.
// 9.	Pop()	It is used to removes the last elements of the array.
// 10.	Push()	It is used to add new elements to the array.
// 11.	reverse()	It is used to reverse the order of an element in the array.
// 12.	Shift()	It is used to removes and returns the first element of an array.
// 13.	slice()	It returns the section fo an array in the new array.
// 14.	sort()	It is used to sort the elements of an array.
// 15.	splice()	It is used to add or remove the elements from an array.
// 16.	toString()	It returns the string representation of an array.
// 17.	unshift()	It is used to add one or more elements to the beginning of an array.
//18.  map()   It is an elegant way to apply a transformation to each element of an array and collect the results in a new array.
//19.  filter() It is used to create a new array with all elements that pass a test implemented by the provided function and 
//is a powerful tool for selectively extracting elements from an array based on a given condition.
//reduce()  It is commonly used to perform operations like summing up all values, calculating the product of all values, or transforming an array into a single value.
//splice() It changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Define an array of nums
let nums: number[] = [10, 20, 30, 40, 50];

// Adding elements to the array
nums.push(60); // Adds 60 to the end of the array
nums.unshift(0); // Adds 0 to the beginning of the array

console.log('After push and unshift:', nums); // Output: [0, 10, 20, 30, 40, 50, 60]

// Removing elements from the array
nums.pop(); // Removes the last element (60)
nums.shift(); // Removes the first element (0)

console.log('After pop and shift:', nums); // Output: [10, 20, 30, 40, 50]

// Finding elements in the array
const index = nums.indexOf(30); // Finds the index of the first occurrence of 30
console.log('Index of 30:', index); // Output: 2

const includesForty = nums.includes(40); // Checks if 40 is in the array
console.log('Array includes 40:', includesForty); // Output: true

// Transforming elements in the array
const doublednums = nums.map(num => num * 2);
console.log('Doubled nums:', doublednums); // Output: [20, 40, 60, 80, 100]

// Filtering elements in the array
const filterednums = nums.filter(num => num > 25);
console.log('Filtered nums (greater than 25):', filterednums); // Output: [30, 40, 50]

// Reducing elements in the array by adding each element in array
const addVar = nums.reduce((acc, num) => acc + num, 0);
console.log('addVar of nums:', addVar); // Output: 150

// Slicing and splicing the array
const slicednums = nums.slice(1, 4); // Slices from index 1 to index 3 (end index is not included)
console.log('Sliced nums:', slicednums); // Output: [20, 30, 40]

const splicedNums= nums.splice(2, 1, 35); // Removes 1 element at index 2 and adds 35 at that position
console.log('After splice:', splicedNums); // Output: [10, 20, 35, 40, 50]

// Concatenating arrays
const morenums = [70, 80];
const concatenatednums = nums.concat(morenums);
console.log('Concatenated nums:', concatenatednums); // Output: [10, 20, 35, 40, 50, 70, 80]

// Sorting the array
const sortednums = concatenatednums.sort((a, b) => a - b);
console.log('Sorted nums:', sortednums); // Output: [10, 20, 35, 40, 50, 70, 80]

// Reversing the array
const reversednums = sortednums.reverse();
console.log('Reversed nums:', reversednums); // Output: [80, 70, 50, 40, 35, 20, 10]

// Joining elements into a string
const joinedString = nums.join(', ');
console.log('Joined string:', joinedString); // Output: 10, 20, 35, 40, 50





// Define an array of numbrs
let numbrs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// Use fill to replace part of the array with a static value
const fillex= numbrs.fill(0, 3, 5); // Fills elements from index 3 to 4 with 0
console.log('After fill:', fillex); // [1,2,3,0,0,6,7,8,9,10]


 numbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use every to check if all elements are greater than 0
const allGreaterThanZero = numbrs.every(num => num > 0);
console.log('All elements greater than 0:', allGreaterThanZero); // Output: true

 numbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use lastIndexOf to find the last occurrence of an element
const lastIndexOfSix = numbrs.lastIndexOf(6);
console.log('Last index of 6:', lastIndexOfSix); // Output: 5


 numbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use toString to convert the array to a string
const arrayAsString = numbrs.toString();
console.log('Array as string:', arrayAsString); // Output:Array as string: 1,2,3,4,5,6,7,8,9,10


   numbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use copyWithin to copy part of the array within the same array
const copywithinnums=numbrs.copyWithin(0, 5, 7); // Copies elements at index 5 and 6 to the start of the array
console.log('After copyWithin:', copywithinnums); // Output: [6, 7, 3, 4, 5, 6, 7, 8, 9, 10]











