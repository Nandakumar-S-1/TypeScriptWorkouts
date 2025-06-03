import mongoose,{Schema,Document} from "mongoose";
import { OperationType } from "../enums/OperationTypes";

//interface for calculation aka object structure
export interface ICalculation extends Document{
    firstNumber :number,
    secondNumber:number
    operation:OperationType;
    output:number,
    createdAt:Date
    updatedAt:Date;
}


let schemaForCalculator :Schema<ICalculation>=new Schema({
    firstNumber:{
        type:Number,
        required:true
    },
    secondNumber:{
        type:Number,
        required:true
    },
    operation:{
        type:String,
        required:true,
        enum:Object.values(OperationType)
    },
    output:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
})


export default mongoose.model<ICalculation>('Calculator',schemaForCalculator);