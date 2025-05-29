import mongoose from "mongoose";

export interface user extends mongoose.Document{
    name:string;
    email:string
    password:string
    phone: number;
    isAdmin:boolean
    isBlocked:boolean
}

let userSchema = new mongoose.Schema<user>({
    name:{
        type:String,
        required:true
    },
     email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        required: true,
      },
      isBlocked: { 
        type: Boolean,
        default: false
      }
})

export default mongoose.model<user>("User",userSchema)