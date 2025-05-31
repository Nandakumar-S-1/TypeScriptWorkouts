import { Request,Response,NextFunction } from "express";
import userModel  from "../model/userModel";
// import bcrypt from "bcrypt"
import * as bcrypt from "bcrypt";
import { promises } from "dns";

let securePassword = async(password:string)=>{
    try {
        let passHash = await bcrypt.hash(password,10)
        return passHash
    } catch (error) {
        console.log(error);
        throw error;
    }
}

let getSignupPage=async(req:Request,res:Response)=>{
    try {
        if(req.session.user){
            return res.redirect('/')
        }else{
            return res.render('signup')
        }
    } catch (error) {
        console.log("error while loading signup page",error);
                
    }
}

let signup = async(req:Request,res:Response):Promise<void>=>{
    try {
        let {name,email,phone,password}=req.body

        if(!name || !email || !phone || !password){
            res.status(400).json({success:false,message:'All fields are required to siginup'})
            return
        }

        let existingUser = await userModel.findOne({email})
        if(existingUser){
            res.status(409).json({success:false,message:"User with email is alreday registered"})
            return
        }
        let securePass =await securePassword(password)
        let user = new userModel({
            name,email,phone,password:securePass,isAdmin:false,isBlocked:false
        })

        let userData=await user.save()


        if(userData){
            req.session.user =userData.id
            res.redirect('/');

            // res.status(200).json({success:true,message:"registration succesful"})
        }else{
        res.status(500).json({ success: false, message: "Registration failed" });
        }

    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

let getLogin = async (req:Request,res:Response) => {
    try {
        if(!req.session.user){
           return  res.render("login",{message:null});
        }else{
            return res.redirect('/home')
        }
        
    } catch (error) {
        console.log(error);
        res.render("login", { message: "An error occurred while loading the login page" });
    }
}

let login = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        let {email,password}=req.body
        let user= await userModel.findOne({email})
        if(!user){
            res.json({success:false,message:'email not found'})
            return
        }

        if(user.isBlocked==true){
            res.json({success:false,message:'This user is currently blocked'})
            return
        }

        let isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            res.status(401).render('login',{message:'Incorrect password'})
            return
        }

        req.session.user=user.id
        res.redirect('/')
        // res.json({success:true,message:'Login Succesful'})

    } catch (error) {
        console.error(error);
        next(error); 
    }
}

let logout =async(req:Request,res:Response):Promise<void>=>{
    try {
        req.session.destroy((err)=>{
            if(err){
                console.log("failed to destroy the session ",err);
                res.status(500).send("error occured  while logging out")
                return                
            }
            res.redirect('/login')
        })
    } catch (error) {
        console.error("Error during logout:", error);
        res.status(500).send("An unexpected error occurred.");
    }
}

let loadHome=async(req:Request,res:Response)=>{
    try {
        if(req.session.user){
            let userData=await userModel.findById(req.session.user)
            console.log(userData,"userDataa");
            if(userData){
                res.render('home',{user:userData})
            }else{
                res.redirect('/')
            }
        }else{
            res.redirect('/')
        }
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
}



export default {
    getSignupPage ,
    signup,
    getLogin,
    login,
    logout,
    loadHome
}





// let editFields = async (req:Request,res:Response):Promise<void>=>{
//     try {
//       let userId=req.params.id
//       let {name,email,phone} = req.body

//       let user = await userModel.findById(userId)

//       if(!user){
//         res.status(404).send("user not found")
//         return
//       }

//       user.name = name
//       user.email = email
//     //   user.phone = phone
//       await user.save()

//       res.render('userEdit',{user,message:'Profile updated successfully'})
//     } catch (error) {
        
//     }
// }