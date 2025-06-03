import { Operation } from "./operation";
import { OperationType } from "../enums/OperationTypes";

export class Div extends Operation{
    
    calculate(): number {
        if (this.secondNumber ===0){
            throw new Error("Division by zero is not allowed");
        }
        return this.firstNumber / this.secondNumber
    }
    retrieveOperationType(): OperationType {
        return OperationType.Division
    }
}