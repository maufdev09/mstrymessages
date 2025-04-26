import { ApiResponse } from './../types/ApiResponse';
import { resend } from "@/lib/resend";
import VerificationEmail from "../../Emails/verificationEmail";


export async function sendVerificationEmail(email:string,username:string,verifyCode:string): Promise<ApiResponse> {
    


try {

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: ' Mystry message | Verification code',
        react:VerificationEmail({username, otp: verifyCode})
      });

    
    return{success:true, message:"email sended succesfully"}

} catch (error) {
    console.error("Error is sending by verification Email");
    return{success:false, message:"Error is sending by verification Email"}
    
}


}