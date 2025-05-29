import { Request,Response,NextFunction } from "express";
import userModel from "../model/userModel"
// import bcrypt from "bcrypt"
import * as bcrypt from "bcrypt";

// let securePassword = async (password:string)=>{
//     try{
//         let hashPass = await bcrypt.hash(password,10)
//         return hashPass;
//     }catch(error){
//         console.log(error);        
//     }
// }

let loadLoginPage =async (req:Request,res:Response)=>{
    try {
        return res.render("adminLogin")
    } catch (error) {
        console.log(error);
    }
}

let login = async (req:Request,res:Response):Promise<void>=>{
    try {
        let {email,password}=req.body
        let userData = await userModel.findOne({email:email})

        if(userData){
            let passwordMatch =await bcrypt.compare(password,userData.password)
            if(passwordMatch){
                if(userData.isAdmin==false){
                    res.status(403).json({success:false,message:"Access to this page is limited, only admins are allowed"})
                }else{
                    req.session.user =userData.id;
                    res.status(200).json({success:true})
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Server Error"})
    }
}

let loadDashboard =async (req:Request,res:Response):Promise<void>=>{
    try {
        let admin=req.session.user
        if(!admin){
            res.redirect('/admin/login')
            return
        }
        let adminData = await userModel.find({isAdmin:true})

        let users =await userModel.find({isAdmin:false})

        console.log("admin",adminData,"user",users);
        res.render('dashboard',{admin:adminData[0],users})
    } catch (error) {
        console.log(error,"loadDashboard error");
        res.status(500).send("something wrong while loading the dashboard")
    }
}

let blockUser =async(req:Request,res:Response):Promise<void>=>{
    try{

    let userId = req.params.id
    console.log("user id to block/unblock ",userId);
    let user= await userModel.findById(userId)

    if(!user){
        res.redirect('/admin')
        return
    }

    user.isBlocked=!user.isBlocked
    await user.save()

    console.log(`user with ${userId} is now ${user.isBlocked ? 'blocked' : 'unblocked'}`);
    

    res.redirect('/admin')
 } catch(error){
        console.log("error in block user",error);
        
        res.redirect('/admin')
    }
}

let logout = async (req: Request, res: Response): Promise<void> => {
    try {
        req.session.destroy((err)=>{
            if(err){
                console.log("error while  destroying the session",err);
                return res.redirect('/admin')
            }
            res.clearCookie('connect.sid')
            res.redirect('/admin/login')
        })
    } catch (error) {

    }
}

let loadEditUser = async(req:Request,res:Response)=>{
    try {
        let userId = req.params.id
        let user=await userModel.findById(userId)
        if(!user){
            return res.redirect('/admin')
        }

        res.render('adminEdit',{user,successMessage:''})

    } catch (error) {
        console.error(error);
        res.redirect('/admin');
    }
}

let editUser = async(req:Request,res:Response)=>{
    try {
        let userId=req.params.id;
        let {name,email,phone} =req.body

        await userModel.findByIdAndUpdate(userId,{name,email,phone})
        let updateUser = await userModel.findById(userId)

        res.render('adminEdit',{
            user:updateUser,
            successMessage: "User successfully updated"
        })

    } catch (error) {
        console.error("error while editting user",error);
        res.redirect('/admin');
    }
}

export default {
    loadLoginPage,
    login,
    loadDashboard,
    blockUser,
    logout,
    loadEditUser,
    editUser
}