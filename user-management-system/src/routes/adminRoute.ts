import {Router} from "express"
import adminController from "../controller/adminController"
import auth from "../middleware/auth"

let router =Router();


router.get('/login',adminController.loadLoginPage)
router.post('/login',adminController.login)
router.get('/',auth.adminAuth,adminController.loadDashboard)
router.patch('/block-user/:id',auth.adminAuth,adminController.blockUser)
router.post('/logout',auth.adminAuth,adminController.logout)
router.get('/edit-user/:id',auth.adminAuth,adminController.loadEditUser)
router.put('/edit-user/:id',auth.adminAuth,adminController.editUser)
export default router