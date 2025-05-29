export class Player{
    name:string
    score:number
    
    constructor(name:string){
        this.name=name
        this.score=0
    }
    addPoints(points:number):void{
        this.score +=points
        console.log(`${this.name} have earned ${points} points. 
            The total score is now : ${this.score}`);
        
    }
}