//type keyword is used to create custom types

type Student={
    id:number
    name:string
    age:number
    email?:string
    isPassed?:boolean
}

function data(st1:Student){
    return `${st1.name},${st1.age}`
}
data({id:1,name:"Ashika",age:22})
console.log(data({id:1,name:"Ashika",age:22}));

//here i created a new type just like number,string, boolean etc, which is  Student