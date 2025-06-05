//when to use union


// function Demo(myval:number):boolean{
//     if(myval>5){
//         return true
//     }
//     return "ok"
// }

/////////////////////

// let statusCode :number | string =200

// statusCode =300
// statusCode ="404"
// statusCode =false

/////////////////////////////use case

// type User ={
//     id:number,
//     name: string
// }
// type Admin={
//     id:number
//     userName:string
// }
//  ////new user with name
// let newUser : User | Admin ={
//     id:111,name:"Devan"
// }

// //user became admin

// newUser ={id:111,userName:"Devanarayan"}

///////////////////////
// let codes :number[] =[100,201,302,403]
// let codess :string[] =["101","201","301","401"]

// //here string[] | number[] means the c can be either full of numbers or full of strings, cannot be mix and match
// let c : string[] |number[] =[101,"202"]

// //for mixed array it should be 

// let cod : (string|number) [] =[101,"202"]


/////////////


// function sun<T extends number>(arr:T[]):number{
//     let total=0
//     for(let i=0;i<arr.length;i++){
//         total+=arr[i]
//     }
//     return total
// }

// const result = sun([5, 10, 15, 20]);
// console.log(result); 


//////////////////const ab = [{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }];

type item={a:number}
let ab:item[]=[{ a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }, { a: 3 }];
let sum=0
ab.forEach(v=>sum+=v.a)
console.log(sum)