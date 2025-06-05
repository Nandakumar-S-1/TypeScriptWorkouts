 class Car {
    brand : string
    
    constructor(brand : string){
      this.brand = brand
    }
    showBrand(){
      console.log(`car brand is: c ${this.brand}`)
    }
  }
  let car1 = new Car("Toyota")
  car1.showBrand()

  /////////////////////////////////////

  interface Person{
    name:string;
    age:number
}

class Student implements Person{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.age = age;
        this.name =name
    }
    showout(){
        console.log(`${this.name} age is :${this.age}`)
    }
}
let c1 = new Student("abhi",22)
c1.showout()
 

//   // Method Overriding
  
// class Parent {
//     greet(){
//       console.log("helloo from parent")
//     }
//   }
//   class child extends Parent{
//     greet(){
//       console.log("heloo from child")
//     }
//   }
  
//   let c = new child()
//   c.greet()


//   //method overloading


//   class MathOperation{
//     add (a:number,b:number,c?:number):number{
//       if(c){
//         return a+b+c
//       }else{
//         return a+b
//       }
//     }
//   }
//   let math = new MathOperation()
//   console.log(math.add(1,2,3))
//   console.log(math.add(1,2))

//   // class Logger {
//   //   log(message: string): void;
//   //   log(id: number): void;
//   //   log(value: string | number): void {
//   //     console.log("Logged:", value);
//   //   }
//   // }
  
//   // const logger = new Logger();
//   // logger.log("Hello");
//   // logger.log(123);
  


//   //encapsulation

  
// class Person {
//     private name :string
//     constructor(name:string){
//       this.name = name
//     }
//     getName(){
//       return this.name
//     }
//   }
  
//   let p1 = new Person("john")
//   console.log(p1.getName())


//   //inheritance

//   class Animal {
//     sound :string
  
//     constructor(sound : string){
//       this.sound = sound
//     }
//     makeSound(){
//       console.log(this.sound)
//     }
//   }
  
//   class Dog extends Animal{
//     constructor(){
//       super("wooffff")
//     }
//   }
  
//   let dog = new Dog()
//   dog.makeSound()

// //multiple inheritance
//   interface A {
//     methodA(): void;
//   }
  
//   interface B {
//     methodB(): void;
//   }
  
//   class C implements A, B {
//     methodA(): void {
//       console.log("Method A");
//     }
  
//     methodB(): void {
//       console.log("Method B");
//     }
//   }
//   const obj = new C();
//   obj.methodA(); // Output: Method A    
//     obj.methodB(); // Output: Method B

    
//   //polymorphism

//   class Shape {
//     draw(){
//       console.log("drawing a shape")
//     }
//   }
//   class Circle extends Shape{
//     draw(){
//       console.log("drawing a circle")
//     }
//   }
  
//   let s1 = new Shape()
//   s1.draw()

  
// let c1 = new Circle();
// c1.draw();

// //abstract class


// // abstract class vehicle {
// //     abstract move() : void
// //   }
// //   class Car extends vehicle{
// //     move(){
// //       console.log("car is moving")
// //     }
// //   }
// //   let myCar = new Car()
// //   myCar.move()


// // interface Vehicle{
// //   move():void
  
// // }
// // class Car implements Vehicle{
// //     move(){
// //         console.log("car is moveing")
// //     }
// // }
// // const mycar =new Car()
// // mycar.move()


// //static method

// // class utility {
// //     static pi = 3.14
  
// //     static square(num :number){
// //       return num * num
// //     }
// //   }
  
// //   console.log(utility.pi)
// //   console.log(utility.square(5))




// //acces modifiers

// // class Student {
// //   public name: string;
// //   private id: number;
// //   protected marks: number;

// //   constructor(name: string, id: number, marks: number) {
// //     this.name = name;
// //     this.id = id;
// //     this.marks = marks;
// //   }

// //   public showName() {
// //     console.log(this.name);     // ✅
// //     console.log(this.id);       // ✅
// //     console.log(this.marks);    // ✅
// //   }
// // }

// // const s = new Student("Abi", 101, 90);
// // console.log(s.name); // ✅
// // // console.log(s.id); // ❌ Error: private
// // // console.log(s.marks); // ❌ Error: protected


// //getters and setters

// // class Employee {
// //   private _salary: number = 0;

// //   get salary(): number {
// //     return this._salary;
// //   }

// //   set salary(value: number) {
// //     if (value >= 0) {
// //       this._salary = value;
// //     }
// //   }
// // }

// // const emp = new Employee();
// // emp.salary = 5000;
// // console.log(emp.salary); // 5000
//  //Infer types (Implicit types)

// // let userNAME = "John Doe";
// // let subscribers = 399_000;
     
// //defining types explicitly

// // let userName: string = "John Doe";
// // let subscribers: number = 399_000;
// // let isActive: boolean = true;
// // let skills :string[]= ["HTML", "CSS", "JavaScript"];
// // let count : number [] = [1, 2, 3, 4, 5];
// // let emptyArray :[] = [];

// // let userDetails: {name:string; age:number;salary:number} ={
// //      name : "John Doe",
// //      age :49,
// //      salary :2000
// // }




// //  Interface

// // interface  Details {
// //     name: string;
// //     age: number;
// //     salary: number;
// //     getName: () => void;
// // }

// // let userDetails: Details ={
// //      name : "John Doe",
// //      age :49,
// //      salary :2000,
// //         getName: function () {
// //             console.log(this.name);
// //         }
// // }

// // Type 

// // type Details ={
// //     name: string;
// //         age: number;
// //         salary: number;
// //         getName: () => void;
// // }

// // let userDetails: Details ={
// //      name : "John Doe",
// //      age :49,
// //      salary :2000,
// //         getName: function () {
// //             console.log(this.name);
// //         }
// // }


// //union/optional types

// // type Details ={
// //     name: string;
// //         age: number|string;
// //         salary: number;
// //         getName?: () => void;
// // }

// // let userDetails: Details ={
// //      name : "John Doe",
// //      age :49,
// //      salary :2000,
// //         getName: function () {
// //             console.log(this.name);
// //         }
// // }

// // //union
// // let skills: (string|number)[] = ["HTML", "CSS", "JavaScript",19,34,55];

// // //optional
// // let salary: number | undefined = 2000;

// // interface Details {
// //     salary?: number;
// // }
// // let emp :Details={salary:2444}


// //functions


// // type Details ={
// //     name: string;
// //         age: number|string;
// //         salary: number;
// //         getName?: () => void;
// // }

// // let userDetails: Details ={
// //      name : "John Doe",
// //      age :49,
// //      salary :2000,
// //         getName: function () {
// //             console.log(this.name);
// //         }
// // }

// // function getUserName(userDetails:Details) {
// //     return userDetails.age
// // }

// // getUserName(userDetails);
// //---------------------------------------------------
// // function names ({name, age, salary}: {name:string; age:number; salary:number}) {
// //     return name
// // }
// // names({name:"John Doe", age: 49, salary: 2000})

// // interface Details {
// //     name:string;
// //     age:number;
// //     salary:number;
// // }

// // function names ({name}:Details){
// //     return name;
// // }
// // console.log(names({name:"John Doe", age: 49, salary: 2000}))


// //Named types
// // type status = "active" | "inactive" | "pending";

// //generics--------------------------------------------

// // function getage<T>(age:T):T {
// //     return age;
// // }
// // console.log(getage('49'))
// // console.log(getage(30))
// //----------------------------------
// // type userDetail ={
// //     name:string;
// //     age :number
// // }


// // type adminDetail ={
// //     firstname:string;
// //     role :string
// // }

// // const userDetails:userDetail ={
// //     name:'abijit',
// //     age:23,
// // }


// // const adminDetails:adminDetail ={
// //     firstname:'abijit',
// //     role:'admin',
// // }

// // function getDetails<T>(details:T):T{
// //     return details
// // }
// // const uservalue = getDetails<userDetail>(userDetails)
// // const adminvalue = getDetails<adminDetail>(adminDetails)

// // console.log(uservalue)
// // console.log(adminvalue)
// //------------------------------------------------------------



// // type userDetail ={
// //     name:string;
// //     age :number
// // }


// // type adminDetail = userDetail &{    userdetails nte admindetails lek merge akkii
// //     role :string;
// // }

// // const userDetails:userDetail ={
// //     name:'abijit',
// //     age:23,
// // }


// // const adminDetails:adminDetail ={
// //     name:'abijit',
// //     role:'admin',
// //     age:45
// // }

// // function getDetails<T>(details:T):T{
// //     return details
// // }
// // const uservalue = getDetails<userDetail>(userDetails)
// // const adminvalue = getDetails<adminDetail>(adminDetails)

// // console.log(uservalue)
// // console.log(adminvalue)

// //-------------------------------------------------------------

// // type userDetail ={
// //     name:string;
// //     age :number
// // }


// // type adminDetail = userDetail --- admindetails lek userdetails kodut

// // const userDetails:userDetail ={
// //     name:'abijit',
// //     age:23,
// // }


// // const adminDetails:adminDetail ={
// //     name:'abijit',
// //     age:45
// // }

// // function getDetails<T>(details:T):T{
// //     return details
// // }
// // const uservalue = getDetails<userDetail>(userDetails)
// // const adminvalue = getDetails<adminDetail>(adminDetails)

// // console.log(uservalue)
// // console.log(adminvalue)

// //-------------------------------------------------------------



// // interface userDetail {
// //     name:string;
// //     age :number
// // }


// // interface adminDetail extends userDetail {}

// // const userDetails:userDetail ={
// //     name:'abijit',
// //     age:23,
// // }


// // const adminDetails:adminDetail ={
// //     name:'abijit',
// //     age:45
// // }

// // function getDetails<T>(details:T):T{
// //     return details
// // }
// // const uservalue = getDetails<userDetail>(userDetails)
// // const adminvalue = getDetails<adminDetail>(adminDetails)

// // console.log(uservalue)
// // console.log(adminvalue)




// //ennums

// // enum StatusType{
// //   pending =1,
// //   complete,
// //   failed
// // }
// // function getstatus (message:string,status:StatusType){
// //     console.log(status)
// // }
// // getstatus(StatusType.complete)

// //enum
// // enum Color  {red=3, green, blue}
// // let c:Color = Color.green
// // console.log(c);

// // as const 

// // let userName  = 'debug media' as const
// // userName = 'debug media'

// //keyof/typeof


// // type Person = { name: string; age: number };
// // type Keys = keyof Person;

// // type person ={
// //   name :string,
// //   age:number
// // }
// // type personkeys = keyof person
// // let key :personkeys[] =["name","age"]
// // console.log(key)

// // utility 
// // type user ={
// //     name :string;
// //     age :number
// // }
// // const userDetails :Readonly<user>={
// //     name:'dadsasd',
// //     age:44
// // }
// // userDetails.name
// // userDetails.age =323

// //Partial

// // type user ={
// //     name :string;
// //     age :number
// // }
// // const userDetails :Partial<user>={
// //     name:'dadsasd',
// //     age:44
// // }

// //required 

// // type user ={
// //     name :string;
// //     age ?:number
// // }
// // const userDetails :Required<user>={
// //     name:'dadsasd',
// //     age:44
// // }

// //pick

// // type user ={
// //     name :string;
// //     age :number;
// //     salary:number
 
// // }
// // const user :Pick<user,'name'|'age'>={
// //     name:'dadsasd',
// //     age:44
// // }

// //omit

// // type user ={
// //     name :string;
// //     age :number;
// //     salary:number
 
// // }
// // const user :Omit<user,'salary'>={
// //     name:'dadsasd',
// //     age:44
// // }


// //union nte case il 
// //exclude

// // type StatusType ='pending'|'completed'|'failed'
// // const status :Exclude<StatusType ,'pending'> = ''





// //  Inheritance
// // class animal {
// //     speak():void{
// //         console.log("Animal speaks");
        
// //     }
// // }
// // class Cat extends animal{
// //     speak():void{
// //         console.log("Cat barks");
// //     }
// // }
// // const myCat = new Cat()
// // myCat.speak()


// // function fetchData(): Promise<string> {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("Data fetched using Promise!");
// //     }, 1000);
// //   });
// // }

// // fetchData().then(data => {
// //   console.log(data);
// // });


// // function fetchDataAsync(): Promise<string> {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("Data fetched using async/await!");
// //     }, 1000);
// //   });
// // }

// // async function getData() {
// //   const data = await fetchDataAsync();
// //   console.log(data);
// // }

// // getData();


// // getData();

// //Function Overloading:
// // function fetchData(id:number):number;
// // function fetchData(id:string):string;

// // function fetchData(id :any):any{
// //     return id
// // }

// // console.log(fetchData(443))




// //unknown vs any

// function handleInput(input: unknown) {
//     if (typeof input === "string") {
//       console.log("String length:", input.length);
//     } else if (typeof input === "number") {
//       console.log("Square:", input * input);
//     }else if(typeof input ==="boolean"){
//       console.log(input)
//     }else if(Array.isArray(input) ){
//       console.log(input)
//     } else {
//       console.log("Unknown type");
//     }
//   }
//   handleInput("hello");
//   handleInput(7);
//   handleInput(true);
//   handleInput([1, 2, 3]);
//   handleInput(null);
//   handleInput({ name: "Abhi" });



//   function add (num1 :number ,num2?:number):number{
//     if(num2){
//       return num1+num2
//     }else{
//       return num1
//     }
//   }
//   console.log(add(3,3))
  
  

//   function adds (...num:number[] ):number{
//   return num.reduce((acc,curr)=>acc+curr,0)
//   }
//   console.log(adds(1,2,3,4,5))
  
  
//   interface faces {
//     name:number
//   }
//   let user :faces ={
//    name :34
//   }


//   //decorators

//   function First() {
//     console.log("First factory");
//     return function (target: any) {
//       console.log("First decorator");
//     };
//   }
//   @First()
//   class Demo {}

//   //maped types]
  
// // type Readonly<T>={
// //   readonly[k in keyof T]?:T[k]
// // }
// // type ReadonlyUser<T> = {
// //   readonly [K in keyof T]: T[K];
// // };

// // type ReadonlyUserInfo = ReadonlyUser<User>;

// // const readonlyUser: ReadonlyUserInfo = {
// //   name: "Abhijith",
// //   age: 22,
// //   isAdmin: false
// // };

// // readonlyUser.age = 23; ❌ Error: Cannot assign to 'age' because it is a read-only property.

// //condiytional types

// // type IsString<T> = T extends string ? "Yes" : "No";

// // type A = IsString<string>;  // 'Yes'
// // type B = IsString<number>;  // 'No'
//  // // Define the type of the response
// // interface Post {
// //     userId: number;
// //     id: number;
// //     title: string;
// //     body: string;
// //   }
  
// //   // Fetch data from a public API
// //   async function fetchPosts(): Promise<void> {
// //     try {
// //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// //       const posts: Post[] = await response.json();
      
// //       // Log the first post
// //       console.log("First Post Title:", posts[0].title);
// //     } catch (error) {
// //       console.error("Error fetching posts:", error);
// //     }
// //   }
  
// //   fetchPosts();
  

// // interface Post {
// //     userId: number;
// //     id: number;
// //     title: string;
// //     body: string;
// //   }
  
// //   function fetchPostsPromise(): void {
// //     fetch('https://jsonplaceholder.typicode.com/posts')
// //       .then((response) => response.json())
// //       .then((posts: Post[]) => {
// //         console.log("First Post Title:", posts[0].title);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching posts:", error);
// //       });
// //   }
  
// //   fetchPostsPromise();
  

// // function fetchData(): Promise<string> {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve("Data fetched using Promise!");
// //       }, 1000);
// //     });
// //   }
  
// //   fetchData().then(data => {
// //     console.log(data);
// //   });
  

// // function fetchDataAsync(): Promise<string> {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve("Data fetched using async/await!");
// //       }, 1000);
// //     });
// //   }
  
// //   async function getData() {
// //     const data = await fetchDataAsync();
// //     console.log(data);
// //   }
  
// //   getData();
//  // function fetchData(): Promise<string> {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve("Data fetched using Promise!");
// //       }, 1000);
// //     });
// //   }
  
// //   fetchData().then(data => {
// //     console.log(data);
// //   });
  

// // function fetchDataAsync(): Promise<string> {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve("Data fetched using async/await!");
// //       }, 1000);
// //     });
// //   }
  
// //   async function getData() {
// //     const data = await fetchDataAsync();
// //     console.log(data);
// //   }
  
// //   getData();
//  // type Users = Record<string, number>;
// // const userAges: Users = { Abhijith: 25, Babu: 30 };
//  //maped types]
  
// // type Readonly<T>={
// //   readonly[k in keyof T]?:T[k]
// // }
// // type ReadonlyUser<T> = {
// //   readonly [K in keyof T]: T[K];
// // };

// // type ReadonlyUserInfo = ReadonlyUser<User>;

// // const readonlyUser: ReadonlyUserInfo = {
// //   name: "Abhijith",
// //   age: 22,
// //   isAdmin: false
// // };

// // readonlyUser.age = 23; ❌ Error: Cannot assign to 'age' because it is a read-only property.
//  // type person ={
// //   name :string,
// //   age:number
// // }
// // type personkeys = keyof person
// // let key :personkeys[] =["name","age"]
// // console.log(key)
//  // //union
// // let skills: (string|number)[] = ["HTML", "CSS", "JavaScript",19,34,55];
//  //   Tuples

// //   Definition: Defines an array with fixed length and types.

// //   let user: [string, number] = ["Abhijith", 25];
// //  Utility types ellam nokatto 

// // Readonly 
// // Pick 
// // Omit
// // Required 
// // Partial
//  //   Enums

// //   Definition: Enums define a set of named constants.

// //   enum Status {
// //     Pending,
// //     InProgress,
// //     Completed
// //   }
  
// //   let taskStatus: Status = Status.InProgress;
// //   console.log(taskStatus); // Output: 1 (Enums are indexed by default)
//  // utility 
// // type user ={
// //     name :string;
// //     age :number
// // }
// // const userDetails :Readonly<user>={
// //     name:'dadsasd',
// //     age:44
// // }
// // userDetails.name
// // userDetails.age =323

// //Partial

// // type user ={
// //     name :string;
// //     age :number
// // }
// // const userDetails :Partial<user>={
// //     name:'dadsasd',
// //     age:44
// // }

// //required 

// // type user ={
// //     name :string;
// //     age ?:number
// // }
// // const userDetails :Required<user>={
// //     name:'dadsasd',
// //     age:44
// // }

// //pick

// // type user ={
// //     name :string;
// //     age :number;
// //     salary:number
 
// // }
// // const user :Pick<user,'name'|'age'>={
// //     name:'dadsasd',
// //     age:44
// // }

// //omit

// // type user ={
// //     name :string;
// //     age :number;
// //     salary:number
 
// // }
// // const user :Omit<user,'salary'>={
// //     name:'dadsasd',
// //     age:44
// // }




///////////////////
// type narrowing 
// function getId(Id:string|null){
//   if(!Id){
//     console.log("Provide a valid Id")
//     return
//   }
//   return Id.toLowerCase()
// }


// // //instance of
// function getDate(val:Date | string){
//   if(val instanceof Date){
//     console.log(val.toUTCString());
//   }else{
//     console.log(val.toLowerCase());
//   }
// }


////////////////////////discriminated union

interface Circle{
  kind:"circle"
  radius:number
}
interface Square{
  kind:"square"
  side:number
}


type Shape =Circle | Square

// function getArea(shape:Shape){
//   if(shape.kind==='circle'){
//    return Math.PI *shape.radius **2
//   }
//   return shape.side *shape.side
// }
//////////////////////////////////

function getArea(shape:Shape){
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius **2
    case "square":
      return shape.side * shape.side
    default :
      let _defaultShape :never =shape
      return _defaultShape
  }
}