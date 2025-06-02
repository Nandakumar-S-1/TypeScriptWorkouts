// //implicit .INFERing 

// let num=10
// num="ashika"

// //explicit 

// let nums :number =10
// nums="ashika"

//////////////////////////////////////////////////
// //normal array declaration

// let n=["a",1]
// n=[2,3]

// // array declaration with type

// let arr :number[] =[1,2,3]
// arr=["a","b"] 

// ////////////tuple
// //incorrect
// let names : [string,number,boolean]=[2,false,"e"]
// //correct
// let array :[string,number,boolean]=["a",1,true]
// ////////////////////////////////

////////////////////////////////////////////////
// //types of properties mentioned ,if any property type missmatch ,shows error
// let object:{a:number,b:string,c:boolean}={a:1,b:"belwin",c:1}

// //it the type is mentioned as an,does not throw an error
// let obj:any={a:1}
// obj={a:"ashika"}

////////////////function////////////////////////////
// function greet(message:string){
//     return message
// }
// greet(1)
// /////////////////////////read only. Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

// interface Todo{
//     title:string;
// }
// let todo :Readonly<Todo> ={
//     title:"Do Leetcode"
// }

// todo.title="do Typing task"

// //Cannot assign to 'title' because it is a read-only property.

//////////////////optional parameters///////////////////////
// function demo(num :number){
//     return num*num
// }
// demo()

//-------------

// function demo(num?:number ):number{
//     return (num ??0 )*( num ?? 0) 
// }
// demo(1)