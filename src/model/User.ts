import  mongoose, {Schema,Document} from "mongoose";



export interface Message extends Document {
    content: string;
    createdAt: Date;

}


const MessageSchema:Schema<Message>= new Schema({
    
        content: {
            type: String,
            required: [true, 'Message content is required'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: [true, 'Message creation date is required'],
        },
    
})


export interface User extends Document {
    
    username: string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified: boolean;
    isAcceptingMessage:boolean;
    message:Message[];
}

const UserSchema = new Schema<User>({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\..+/, 'Please use a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    verifyCode: {
        type: String,
        required: [true, 'Verification code is required'],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'Verification code expiry date is required'],
    },
    isVerified: {
        type: Boolean,
        default:false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    message: [MessageSchema],
});


const UserModel= (mongoose.models.User as mongoose.Model<User>)|| mongoose.model<User>("User", UserSchema)

export default UserModel;
