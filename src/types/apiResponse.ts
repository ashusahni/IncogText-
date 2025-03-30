import { Message } from "@/model/User";


export interface ApiResponse {
    success: boolean;
    message: string;
    isAcceptionMessage?: boolean
    messages?: Array<Message>

}