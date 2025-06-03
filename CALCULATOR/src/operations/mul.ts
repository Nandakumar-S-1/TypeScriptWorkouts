import { Operation } from "./operation";
import { OperationType } from "../enums/OperationTypes";

export class Mul extends Operation{
    calculate(): number {
        return this.firstNumber * this.secondNumber
    }
    retrieveOperationType(): OperationType {
        return OperationType.Multiplication
    }
}