interface user{
    name:string;
    age?:number;
    id:number;
    email:string;
}

let User :user={name:"lily",age:23,email:"abc@gmai8l.com",id:1}
console.log(User)


interface user2  extends user{
    standard:string;
}
let User2:user2={name:"abc",age:12,email:"abc@gmail.com",id:2,standard:"5th"}
console.log(User2)


// ? after variable make it optional variable age?
