function detectType(val :number |string ){
      if(typeof val === "string"){
        return val.toLowerCase()
      }
      return val+9
}





function provideId(id:string){
    if(!id){
        console.log("please provide the id")
        return
    }
    id.toLowerCase()
}






function printAll(strs: string| string[]| null){
      if(strs){
        if(typeof strs === "object"){
          for(const s of strs){
          console.log(strs)
          }
        }else if(typeof strs === "string"){
           console.log(strs)
        }
      }
}





//narrowing
interface USer{
   name:string,
   email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin: boolean
}

function isAdmin(account:USer | Admin){
   if("isAdmin" in account){
    return account.isAdmin
   }
   return {}  //else cond
}

//instance of narrowing

function logValue(x: Date |string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }
}








type Fish={swim:()=>void}

type Bird={fly:()=>void}

function isFish(pet:Fish |Bird) :pet is Fish{
       return (pet as Fish).swim!==undefined
}

function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    } else{
        pet
        return "bird food"
    }
}







interface circle{
    radius: number
    kind: "circle"
}

interface square{
    kind: "square"
    side: number
}

interface rectangle{
    kind: "rectangle",
    length:number,
    width:number
}

type Shape =circle|square 


function getShape(s:Shape){
    if(s.kind==="circle"){
        return Math.PI * s.radius ** 2
    }
    return s.side * s.side
}







type anotherShape= circle |rectangle|square

function getArea(shape: anotherShape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

       case "rectangle":
           return shape.length * shape.width

        default:
            const defaultforshape: never = shape
            return defaultforshape
    }
}