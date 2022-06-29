import { RegisterAndSendEmailController } from "@/controllers/register-user-controller";
import { MongodbUserRepository } from "@/external/repository/mongodb/mongodb-user-repository";
import { RegisterUserOnMailingList } from "@/usercases";

export const makeRegisterUserController = ():RegisterAndSendEmailController=>{
    const mongodbUserRepository = new MongodbUserRepository()
    const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(mongodbUserRepository)
    const registerUserController = new RegisterAndSendEmailController(registerUserOnMailingListUseCase)
    return registerUserController;
}