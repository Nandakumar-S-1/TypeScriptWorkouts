import { Operation } from "./operation";
import { OperationType } from "../enums/OperationTypes";

export class Add extends Operation{
    calculate(): number {
        return this.firstNumber + this.secondNumber
    }
    retrieveOperationType(): OperationType {
        return OperationType.Addition
    }
}