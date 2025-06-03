import { Operation } from "./operation";
import { OperationType } from "../enums/OperationTypes";

export class Mod extends Operation{
    calculate(): number {
        return this.firstNumber % this.secondNumber
    }
    retrieveOperationType(): OperationType {
        return OperationType.Modulus
    }
}