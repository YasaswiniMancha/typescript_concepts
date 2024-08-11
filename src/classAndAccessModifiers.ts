// class classEx{

//     public email:string
//     private name:string //by default private
//     private readonly city:string="Jaipur"

//     constructor(email:string,name:string){
//         this.name=name;
//         this.email=email;
        
//    }
// }
//also can be used as below (preferable)

class classEx{
 
    //private courseCount=1

    protected   courseCount=1


    readonly city:string="hyderabad"
    constructor(
        public email:string,
        public name:string,
        private userId:string
    ){
    }

    private deleteToken(){
        console.log("token deleted")
    }
// constructor(public email:string,  public name:string,private userId:string){}
//both are same

  get getAppleEmail(){
    return `apple${this.email}`
  }
  
  get countOfCourse():number{
         return this.courseCount
  }

  set countOfCourse(courseNum){ //should no return type for setters
    if(courseNum<=1){
        throw new Error("course count should be greater than 1")
    }
    this.courseCount=courseNum
  }

}


class subClassEx extends classEx {
      isFamily:boolean =true
      changeCourse(){
        this.countOfCourse=4
      }
}


const balu=new ourUser("balu@gmail.com","balu")  //outside of class
//balu.city="hyd"

//balu.deleteToken() //not accessible due to private property

