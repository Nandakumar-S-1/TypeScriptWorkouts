import { Operation } from "../operations/operation";
import { OperationType } from "../enums/OperationTypes";
import { Add } from "../operations/add";
import { Sub } from "../operations/sub";
import { Mul } from "../operations/mul";
import { Div } from "../operations/div";
import { Mod } from "../operations/mod";
import { Request,Response } from "express";
import Calculation,{ ICalculation } from "../models/calc";


export class CalculatorController{
    //static is used to call the method directly.without static , i need to create an instance of the class to call the function
    static async getDashboard(req:Request,res:Response):Promise<void>{
        // the async function always returs a promise. Void is used here because the function does not returns any value. It sends respone through res.render.
        let CalcHistory :ICalculation[] =await Calculation.find().sort({createdAt:-1}).limit(5)
        res.render('frontent',{CalcHistory,result:null,error:null})
    }

    static async calculate(req:Request,res:Response):Promise<void>{
        try {
            let {num1,num2,operation}=req.body

            if(!num1 || !num2){
                throw new Error("Enter 2 numbers to calculate")
            }

            let fst=parseFloat(num1)
            let sec=parseFloat(num2)

            if(isNaN(fst) || isNaN(sec)){
                throw new Error("Enter valid inputs")
            }

            let o:Operation
            switch (operation) {
                case 'add':
                    o=new Add(fst,sec)                    
                    break;
                case 'sub':
                    o=new Sub(fst,sec)
                    break
                case 'mul':
                    o=new Mul(fst,sec)
                    break
                case 'div':
                    o=new Div(fst,sec)
                    break
                case 'mod':
                    o=new Mod(fst,sec)
                    break
                default:
                    throw new Error('The Operation is Invalid')
            }
            let result = o.calculate()

            await Calculation.create({
                firstNumber:fst,
                secondNumber:sec,
                operation:o.retrieveOperationType(),
                output:result
            })

            let CalcHistory :ICalculation[] = await Calculation.find().sort({createdAt:-1}).limit(5)
            res.render('frontent',{CalcHistory,result,error:null})
        } catch (error:any) {
            let CalcHistory :ICalculation[]= await Calculation.find().sort({createdAt:-1}).limit(5)
            res.render('frontent',{CalcHistory,result:null,error:error.message})
        }
    }
}

