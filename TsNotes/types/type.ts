//type keyword is used to create custom types

type STUDENT={
    id:number
    name:string
    age:number
    email?:string
    isPassed?:boolean
}

function DA(st1:STUDENT){
    return `${st1.name},${st1.age}`
}
DA({id:1,name:"Ashika",age:22})
console.log(DA({id:1,name:"Ashika",age:22}));

//here i created a new type just like number,string, boolean etc, which is  Student