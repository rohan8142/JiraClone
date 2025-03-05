import {z} from "zod";

export const loginSchema  = z.object({
    email : z.string().email(),
    password: z.string().min(1, "Required"),
});


export const signUpSchema = z.object({
    name : z.string().min(2, "Please Enter a valid name"),
    email: z.string().email(),
    password: z.string().min(6,"Please enter minimum of 6 characters")

})