import {z} from "zod";



export const MessageSchema = z.object({
      content :z.string.min(10, {message: ' Content must be at least of 10 character'}).max(300,"Content must be no longer then 300 character "),
    createdAt: 

})