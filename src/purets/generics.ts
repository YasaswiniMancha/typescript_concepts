const scores:Array<number> = []
const names:Array<string> = []

function identifyOne(val:boolean |number):boolean | number {
    return val
}

// function identifyThree<Type>(val:Type):Type{
//     return val
// }
//Above code can also be written as below



// Type T in TypeScript is a placeholder for a generic type. It allows functions, classes, or interfaces to be used with any type while maintaining type safety. 
// Using T (or any generic type parameter) provides flexibility in your code and ensures that the type information is preserved and checked at compile time.
//Generic Parameter T: T is a placeholder for the type of elements in the products array.
//Usage: When you call getSearchProducts, TypeScript infers the type of T based on the array you pass.


function identifyThree<T>(val:T):T{
    return val
}

const result = identifyOne(true)

interface Bottle{
    brand: string,
    type:  number
}

// 
function getSearchProducts<T>(products: T[]): T  {
    //do some db operations
    const myIndex=3  
       return products[myIndex]
}

const getMoreSearchProducts =  <T>(products: T[]): T=> {
    //do some db operations
    const myIndex=4 
       return products[myIndex]
}

const productNumbers = getSearchProducts([1, 2, 56, 4, 5]);   // T is inferred as number
const productStrings = getSearchProducts(["a", "b", "c", "d"]); // T is inferred as string


interface Database{
    connection:string,
    username:string,
    password: String
}


function firstFunction<T,U extends Database> (valOne:T,valTwo:U) {
     return{
        valOne,valTwo
     }
}

//calling function
firstFunction("sampleDb",{
    connection: "localhost",
    username: "admin",
    password: "password123"
}
)



function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return {
       valOne,
       valTwo
    }
}

anotherFunction(3,"er")



interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject:string
}

class Sellable<T>{
    public cart: T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}