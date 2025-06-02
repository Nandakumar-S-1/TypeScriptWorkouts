//we can create a new type that contains only  specific properties from a set of properties

interface Todo{
    id:number,
    title:string;
    description:string
    completed:boolean
}

type doingTask = Pick<Todo,"title"|"completed">

let todos :doingTask={
    title:"do leetcode",
    completed:true
}

console.log(todos);
