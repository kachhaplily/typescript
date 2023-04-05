class student{
    id:number;
    // #id is private variable or use  private property
   protected name:string;
    address:string;
    static getsize():number{
        return 50
    }
    constructor(id:number,name:string,address:string){
        this.id=id;
        this.name=name;
        this.address=address;
    }

    getName():string{
        return `${this.name} address is  ${this.address}`

    }
}

let lily=new student(1,"lily","vadodara");

console.log(student.getsize()); //you can access only static by the class name not need to create an instance.

console.log(lily.getName())
class school extends student{
    constructor(id:number,name:string,address:string){
        super(id,name,address)
    }
}
let fake = new school(2,"fake","adi")
// console.log(fake.name) can not access bcoz name is protected 
