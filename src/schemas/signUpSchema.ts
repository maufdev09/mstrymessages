import {z} from "zod";



export const signUpSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters" })
        .max(20, { message: "Username must be at most 20 characters" })
        .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),
    email: z
        .string()
        .email({ message: "Invalid email address" }),
    // message: z.array(
    //     z.object({
    //         content: z.string({ required_error: "Message content is required" }),
    //         createdAt: z.date({ required_error: "Message creation date is required" }),
    //     })
    // ).optional(),
    password:z.string().min(6,{message:"password must be at least 6 characters"})
});
