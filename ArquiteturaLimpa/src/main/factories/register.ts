import { RegisterUserController } from "@/controllers/register-user-controller";
import { RegisterUserOnMailingList } from "@/usercases";
import { InMemoryUserRepository } from "test/user-cases/regsiter-user-on-mailing-list/repository";

export const makeRegisterUserController = ():RegisterUserController=>{
    const inMemoryUserRepository = new InMemoryUserRepository([])
    const registerUserOnMailingListUseCase = new RegisterUserOnMailingList(inMemoryUserRepository)
    const registerUserController = new RegisterUserController(registerUserOnMailingListUseCase)
    return registerUserController;
}