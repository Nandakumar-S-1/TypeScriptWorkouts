import userModel from "../model/userModel";
import { Request, Response, NextFunction } from "express";

const userAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (req.session.user) {
            const user = await userModel.findOne({ _id: req.session.user, isAdmin: false });
            if (user) {
                return next();
            } else {
                return res.redirect('/login');
            }
        } else {
            return res.redirect('/login');
        }
    } catch (error) {
        console.log('error in user authentication', error);
        res.status(500).send('Internal server error');
    }
};

const adminAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.session.user) {
            return res.redirect('/admin/login');
        }
        const user = await userModel.findById(req.session.user);

        if (user && user.isAdmin) {
            return next();
        } else {
            return res.redirect('/admin/login');
        }
    } catch (error) {
        console.error("Error in adminAuth middleware:", error);
        res.status(500).send("Internal server error");
    }
};

export default { userAuth, adminAuth };

// import userModel from "../model/userModel";
// import { Request,Response,NextFunction } from "express";

// let userAuth = async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
//     try{
//         if(req.session.user){
//             let user=await userModel.findOne({_id:req.session.user},{isAdmin:false});
//             if(user){
//                 return next()
//             }else{

//                 return res.redirect('/login')
//             }
//         }else{
//             return res.redirect('/login')
//         }
//     }catch(error){
//         console.log('error in user authentication',error);
//         res.status(500).send('Internal server error')
//     }
// }

// let adminAuth = async(req:Request,res:Response,next:NextFunction)=>{
//     try {
//         if(!req.session.user){
//             return res.redirect('/admin/login')
//         }
//         let user=await userModel.findById(req.session.user)

//         if(user && user.isAdmin){
//             next()
//         }else{
//             return res.redirect('/admin/login')
//         }
//     } catch (error) {
//         console.error("Error in adminAuth middleware:", error);
//         res.status(500).send("Internal server error");
//     }
// }

// export default {userAuth,adminAuth}
