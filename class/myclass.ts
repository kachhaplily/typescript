// an interface 

interface address{
    city:string;
    state:string;
    pincode:number;
    country:string;
}

class student{
    id:number;
    // #id is private variable or use  private property
   protected name:string;
    address:address;
    static getsize():number{
        return 50
    }
    constructor(id:number,name:string,address:address){
        this.id=id;
        this.name=name;
        this.address=address;
    }

    getName():string{
        return `${this.name} address is  ${this.address}`

    }
}

let lily=new student(1,"lily",{city:"vadodara",country:"india",pincode:320012,state:"gujrat"})

console.log(student.getsize()); //you can access only static by the class name not need to create an instance.

console.log(lily.getName())
class school extends student{
    constructor(id:number,name:string,address:address){
        super(id,name,address)
    }
}
let fake = new school(2,"fake",{city:"ahmedabad",country:"india",pincode:320012,state:"gujrat"})
// console.log(fake.name) can not access bcoz name is protected 
