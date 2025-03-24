import mongoose, {Schema, Document} from "mongoose"
import { unique } from "next/dist/build/utils";
import { Content } from "next/font/google";


export interface Message extends Document{
    content : string
    createdAt: Date
}

const messageSchema: Schema<Message>= new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


export interface User extends Document{
    username : string
    verifyCodeExpiry: Date
    password: string
        email: string
        verifyCode: string
        isVerified: boolean
        acceptingMessage: boolean
        messages: Message[]
}

const userSchema: Schema<User>= new Schema({
    username: {
        type: String,
        required: [true, "user name is required"],
        trim: true,
        unique: true
    },
    email: {
        type :String,
        required: [true, "email is requried"],
        unique: true,
        match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "please add a valid email"]
        
    },

    password:{
        type: String,
        required: [true, "password is required"]
    },
    verifyCode:{
        type: String,
        required: [true, "verify code is required"]
    },
    verifyCodeExpiry:{
        type: Date,
        required: [true, " verifycode expiry  is required"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    messages: [messageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema)

export default UserModel