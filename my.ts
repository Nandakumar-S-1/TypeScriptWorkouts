// class Car{
//     constructor(public brand:string){
//     }
//     getBrand(){
//         console.log(`the car is from the brand ${this.brand} `)
//     }
// }
// let c=new Car("Aston Martin")
// c.getBrand()

///////////////////////////

// interface User{
//     name:string
//     age:number
// }
// class student implements User{
//     constructor(public name:string,public age:number){
//     }
//     getData(){
//         console.log(`name is ${this.name} and age is ${this.age}`)
//     }
// }
// let st =new student("Ashika",22)
// st.getData()

////////////OVERIDING///////////////////////////

// class Parent{
//     greet(){
//         console.log(`Hello world`)
//     }
// }
// class child extends Parent{
//     greet(){
//         console.log(`Hello from child`)
//     }
// }
// let c=new child()
// c.greet()


///////////overloading///////////////////////

// class Sum{
//     add(a:number,b:number,c:number):number
//     add(a:string,b:string):string
//     add(a:any,b:any,c?:any):any{
//         if(typeof a==='string' && typeof b==='string'){
//             return a+b
//         }else{
//             return a+b+(c||0)
//         }
//     }
// }

// let s=new Sum()
// console.log(s.add(1,2,4))

///////////////Encapsulation////////////////////

// class Encapsule{
//     constructor(private name:string){
//     }
//     get getName():string{
//         return this.name
//     }
//     set setName(newName:string){
//         if(newName.length>0){
//             this.name=newName
//         }else{
//             throw new Error("Name cannot be empty")
//         }
//     }
// }
// let e = new Encapsule("ash")
// console.log(e.getName)
// e.setName="asw"
// console.log(e.getName)

/////////////////////////

// class Encap{
//     constructor(private name :string){
//     }
//     get Names():string{
//         return this.name
//     }
//     set Names(newName:string){
//         if(newName.length>0){
//             this.name=newName
//         }else{
//             throw new Error("Name cannot be empty")
//         }
//     }
// }

// let e=new Encap("belwin")
// console.log(e.Names)
// e.Names="devan"
// console.log(e.Names)

//////////inheritence

// class Animal{
//     constructor(protected sound:string){
//         console.log(`animal makes ${sound}`)
//     }
//     getSound(){
//         console.log(this.sound)
//     }
// }
// class Cat extends Animal{
//     constructor(){
//         super("meww")
//     }
// }
// let c = new Cat()

////////////////multiple

// interface length{
//     l:number
// }
// interface breadth{
//     b:number
// }
// class rect implements length,breadth{
//     constructor(public l:number,public b:number){
        
//     }
//     area():number{
//         return this.l * this.b
//     }
// }
// let r = new rect(2,5)
// console.log(r.area())


////////////////////////

// abstract class Vehicle{
//     abstract move():void
// }
// class Car extends Vehicle{
//     move(){
//         console.log("Car is moving")
//     }
// }
// let myCar=new Car()
// myCar.move()

// //////////////////

// interface Vehicle{
//     move():void
// }
// class Car implements Vehicle{
//     move(){
//         console.log('Car is moving')
//     }
// }
// let myCar=new Car()
// myCar.move()






////////////////////////

// class Student{
//    constructor(
//        public name:string,
//        private id:number,
//        protected mark:number){
//     }
//     public showData(){
//         console.log(`name is ${this.name} id is ${this.id} mark is ${this.mark}`)
//     }
// }

// class stud extends Student{
//     constructor(name:string,id:number,mark:number){
//         super(name,id,mark)
//     }
//     public showMark() {
//         console.log(`Mark is: ${this.mark}`); 
//     }
// }

// let st=new stud("dev",5,90)
// st.showMark()

///////////////////////

// interface Animal{
//     move():void
// }

// interface Bird  extends Animal{
//     fly():void
// }

// class Eagle implements Bird{
//     move(): void {
//         console.log('animal moves')
//     }
//     fly(): void {
//         console.log('its flying')
//     }
// }

// let e=new Eagle()
// e.fly()

////////////////////

//// dependency injection 

// class Engine{
//     start(){
//         console.log("starts")
//     }
// }
// class Car{
//     constructor(private engine:Engine){
//     }
//     start(){
//         this.engine.start()
//     }
// }
// let engine=new Engine()
// let c=new Car(engine)
// c.start()

///////////////////////
// intersection
// interface Person{
//     name:string
// }
// interface Employee{
//     id:number
// }
// type worker =Person & Employee

// let w:worker={
//     name:"Nandu",
//     id:5
// }
// console.log(w)

////////////////////////
