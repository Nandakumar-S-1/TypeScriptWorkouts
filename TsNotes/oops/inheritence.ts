class User{
//   private name:string ="rohith"
  protected name:string  ="rohith"
  age:number =27
    getData(){
        return `${this.name} , ${this.age}`
    }
}

class newUser extends User{
    isApproved:boolean=true
    name="ash"
    getData(): string {
        return `name is ${this.name} and age is ${this.age}`
    }
}

let use= new newUser()
console.log(use.name);

use.name="belwin"
console.log(use.name);
