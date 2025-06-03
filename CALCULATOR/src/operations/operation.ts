import { OperationType } from "../enums/OperationTypes";

export abstract class Operation{
    protected firstNumber:number;
    protected secondNumber:number;

    constructor(num1:number,num2:number){
        this.firstNumber=num1
        this.secondNumber=num2
    }

    abstract calculate():number;
    abstract retrieveOperationType():OperationType
}