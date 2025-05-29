import {Router} from "express";
import userController from "../controller/userController";
import auth from "../middleware/auth"

let router=Router()

router.get('/',auth.userAuth,userController.loadHome)
router.post('/logout',userController.logout)
router.get('/login',userController.getLogin)
router.post('/login',userController.login)
router.get('/signup',userController.getSignupPage)
router.post('/signup',userController.signup)


export default router