import { resend } from "@/lib/resend";
// import VerificationEmail from "../../emails/VerificationEmail"
import { ApiResponse } from "@/types/apiResponse";
import { promises } from "dns";

export async function sendVerificationEmail(email:string,username:string,verifyCode:string): Promise <apiResponse> {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'anoymous email verification',
            react: VerificationEmail({ username, otp:verifyCode }),
          });
      
          if (error) {
            return Response.json({ error }, { status: 500 });
          }
      
          return Response.json(data);
        return {success: true, message:"verification mail send successfully"}
    } catch (error) {
        console.log('error sending email')
        return {success: false, message: "failed to send verification mail"}
    }
}

function EmailTemplate(arg0: { firstName: string; }) {
  throw new Error("Function not implemnted.");
}
