import { RegisterAndSendEmailController } from "@/controllers/register-user-controller";
import { NodemailerEmailService } from "@/external/mail-services/nodemailer-email-service";
import { MongodbUserRepository } from "@/external/repository/mongodb/mongodb-user-repository";
import { RegisterUserOnMailingList } from "@/usercases";
import { RegisterAndSendEmail } from "@/usercases/register-and-send-email/register-and-send-email";
import { SendEmail } from "@/usercases/send-email/send-email";
import { getEmailOptions } from "../config/email";

export const makeRegisterUserController = ():RegisterAndSendEmailController=>{
    const mongodbUserRepository = new MongodbUserRepository()
    const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(mongodbUserRepository)
    const emailService = new NodemailerEmailService()
    const sendEmailUseCase = new SendEmail(getEmailOptions(), emailService)
    const registerAndSendEmailUseCase = new RegisterAndSendEmail(registerUserOnMailingListUseCase, sendEmailUseCase)
    const registerUserController = new RegisterAndSendEmailController(registerUserOnMailingListUseCase)
    return registerUserController;
}