class ourUser{

    email:string
    name:string
    readonly city:string="Jaipur"

    constructor(email:string,name:string){
        this.name=name;
        this.email=email;
   }
}

const yasaswini=new ourUser("yash@gmail.com","yash")
//yasaswini.city="hyd"

