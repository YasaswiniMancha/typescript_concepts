 

const User={
    name:"yash",
    email : "yash@gmail.com",
    isActive: true
}   //object that is created with these parameters




function createUser(name:string,isPaid:boolean){}
createUser("yash",false)


//In this version, the createUser1 function takes a single parameter user which is an object with the properties name, isPaid, and email.
function createUser1(user: { name: string; isPaid: boolean; email: string }) {}
  
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
function createCourse(): {name: string, price : number }{
    return{
        name:"typescript",
        price:999
    }
}


//type aliases
type User={
    name:string,
    email:string,
    isActive:boolean
}

function createUser2(user: User):User{
    return {name:"",email:"",isActive:true}
}

createUser2({name:"",email:"",isActive:true})


//another function for type aliases
type Point={
    x:number,
    y:number

}

function pointCoordinates(pt:Point){
    console.log("pointCoordinates of x value is",+pt.x);
    console.log("pointCoordinates of y value is",+pt.y);
}

pointCoordinates({x:100,y:200});


type User2={
    readonly id:string
    name:string,
    email:string,
    isActive:boolean
    creditCardDetails?:number 
}

var myUser:User2 = {
    id:"123",
    name:"yash",
    email:"yash@gmail.com",
    isActive:true
}

myUser.email = "yash@gmail.com"  //can be changed
//myUser.id="12345"   //It cannot be changed 

type cardNumber={
    cardNumber:number
}

type cardDate={
    cardDate:number
}

type cardCVV={
    cardCVV:number
}

type cardDetails= cardNumber & cardDate & {
     cvv: number
}



export{}