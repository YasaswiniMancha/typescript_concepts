let score:number | string = 22
score =44
score ="1234"

type myUser={
    name:string,
    id:number
}

type admin={
    username:string
    id:number
}

let yash : myUser | admin ={name:"yash", id:123}

yash={username:"yashu", id:123}


getDbId(5)
getDbId("5")

function getDbId(id:number |string){
    console.log(`db id is: ${id}`)
    if(typeof id === "string" ){
        id.toLowerCase()
    }
    
}




const data :  number[] =[1,2,3]
const data1:  string[]=["1","2","3"]
const data2:  (number|string|boolean)  [] = ["1",2,true]
//const data3: any [] = ["1",2,true]

let seatAllotment:"aisle" |"middle" |"window"

seatAllotment="aisle"

//seatAllotment="crew"  doens't work


