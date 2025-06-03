import { Operation } from "./operation";
import { OperationType } from "../enums/OperationTypes";

export class Sub extends Operation{
    calculate(): number {
        return this.firstNumber - this.secondNumber
    }
    retrieveOperationType(): OperationType {
        return OperationType.Subtraction
    }
}