
var message:string = "hello typescript"
console.log(message);

var a:number = 27
console.log(a);

var b:boolean = true;
console.log(b);


export interface sample{
    id:number;
    name?:string;
}
//Array in typeScript Examples
interface Arr{
    [index:number] : number;
   
}

var examples:Arr  = {
    100:10
}

console.log(examples)