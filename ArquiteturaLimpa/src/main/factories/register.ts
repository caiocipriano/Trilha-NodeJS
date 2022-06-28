import { RegisterUserController } from "@/controllers/register-user-controller";
import { MongodbUserRepository } from "@/external/repository/mongodb/mongodb-user-repository";
import { RegisterUserOnMailingList } from "@/usercases";

export const makeRegisterUserController = ():RegisterUserController=>{
    const mongodbUserRepository = new MongodbUserRepository()
    const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(mongodbUserRepository)
    const registerUserController = new RegisterUserController(registerUserOnMailingListUseCase)
    return registerUserController;
}