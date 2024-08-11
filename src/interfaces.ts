interface ourUserService{
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string

    startTrail():string  //declaring function1
    getCoupon(couponName:string,value:number):number //another way of declaring function2

}

interface ourUserService{
    gitHubToken:string   
}//reopening of interface , we can again use the interface name

interface Admin extends ourUserService{
    role:"admin"| "ta"|"leaner"
}

const yashu :ourUserService= {

    dbId:12, email:"email", userId:1234, 
    gitHubToken:"1234", //have to include also this parameter 


    startTrail: () => {
        return "trail started"
    }  ,  //implementing function1

    getCoupon: (name:"yashu",value:123) => {
        return  value+2
    } //implementing function2
}

yashu.email = "yashu@gmail.com"
//yashu.dbId = 1232

console.log(yashu)