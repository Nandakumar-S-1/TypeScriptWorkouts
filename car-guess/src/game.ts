import * as readline from "readline";
import { CarDetails,SportsCar,LuxuryCar } from "./models/car";
import { Player } from "./models/player";

export class Game{
    private cars : CarDetails[];
    private player: Player;
    private rl: readline.Interface

    constructor(player:Player){
        this.cars=[
            new SportsCar("Lamborgini","Italy"),
            new SportsCar("Porsche","Germany"),
            new SportsCar("McLaren","England"),
            new LuxuryCar("LandRover","UK"),
            new LuxuryCar("Mercedes","Germany")
        ]
        this.player=player
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    async start():Promise<void>{
        console.log(`Welcome to car brand guessing game, ${this.player.name}`);
        for(let car of this.cars){
            await this.playRound(car)
        }
        console.log(`Game over.
            your final score is : ${this.player.score}`);
            this.rl.close();
    }
    private async playRound(car:CarDetails):Promise <void>{
        return new Promise((resolve)=>{
            console.log(`\n--NEW ROUND--`);
            console.log(`clue for this car is : ${car.getClue()}`);
            this.rl.question("Guess the car Brand Correctly: ",(guess:string)=>{
                if(guess.trim().toLowerCase()===car.brand.toLowerCase()){
                    console.log(`Correct answer 🎉`);
                    this.player.addPoints(10);
                }else{
                    console.log(`Wrong answer, The correct answer is ${car.brand}`);
                }
                resolve()
            })
        })
    }
}