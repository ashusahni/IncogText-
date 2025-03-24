import {z} from  'zod'

export const usernamevalidation = z.string().min(2, "must have two char").max(20, "user name must have fewer than 20 char")

export const signupSchema = z.object({
    username: usernamevalidation,
    email: z.string().email({message:"invalid email"}),
    password: z.string().min(6,{message:"password must be atleast 6 char"})
})
