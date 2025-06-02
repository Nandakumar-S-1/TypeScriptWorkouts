//this object have 4 properties, ive created a new type which is newTodo with excluding
//id, so for that newTodo type only 3 properties are considered.but it doesnt affect original Todo.

interface Todo{
    id:number
    name:string
    description:string
    completed:boolean
}
type newTodo = Omit<Todo,"id">;

let task : newTodo ={
    name:"Typing task",
    description:"Do it before 10  am",
    completed:false
}
console.log(task);

