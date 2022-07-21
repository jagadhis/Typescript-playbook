
var message:string = "hello typescript"
console.log(message);

var a:number = 27
console.log(a);

var b:boolean = true;
console.log(b);


function Add(a:number,b:number){
    return a+b;
}
console.log(Add(10,20))

//Array in typeScript Examples
interface Arr{
 id:number;
 name:string;
 rollno:number;
 subject:string;
   
}

var examples:Arr  = {
    id:0,
    name:"jagadhis",
    rollno:1,
    subject:"Javascript"

}


var Hello:Arr = {
    id:1,
    name:"Ram",
    rollno:2,
    subject:"Typescript"
}


console.log(examples)
console.log(Hello)

