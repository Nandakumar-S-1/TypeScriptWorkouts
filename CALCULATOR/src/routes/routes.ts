import { Router } from "express";
import { CalculatorController } from "../controllers/calculatorControllerFun";
let router = Router()

router.get('/',CalculatorController.getDashboard)
router.post('/calculate',CalculatorController.calculate);

export default router