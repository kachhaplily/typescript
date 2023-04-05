
function add (num1:number,num2:number,num4?:number){
    return num1+num2;

    // num4 is optionmal perameter 
}
let result:number= add(12,544);
console.log(result)

const sub=(a:number,b:number)=>{
    return a-b;
}
let subt:number= sub(8549,544);
console.log(subt);

function getitem<T>(item:T[]):T[]{
    return  new Array<T>().concat(item);

}
let concateresult=getitem<number>([3.5,7,8]);
let concatsting=getitem<string>(["a","b","c"])

console.log(concateresult);