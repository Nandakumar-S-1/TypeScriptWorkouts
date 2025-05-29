export interface CarDetails{
    brand:string,
    country:string,
    getClue():string
}
export class Car implements CarDetails{
    brand: string;
    country: string;
    constructor(brand:string,country:string){
        this.brand=brand
        this.country=country
    }
    getClue(): string {
        return `The Brand originated in ${this.country}`
    }
}

export class SportsCar extends Car{
    constructor(brand:string,country:string){
        super(brand,country)
    }
}
export class LuxuryCar extends Car{
    constructor(brand:string,country:string){
        super(brand,country)
    }
}