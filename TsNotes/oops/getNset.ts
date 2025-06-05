class Cars{
    private _speed:number=0

    get getSpeed():number{
        return this._speed
    }
    set setSpeed(val:number){
        if(val<0){
            throw new Error("Speed cannot be negative")
        }
        this._speed=val
    }

}

let cars=new Cars()
console.log(cars.getSpeed);

cars.setSpeed=100

console.log(cars.getSpeed);
