import { UseCase } from '@/usercases/ports';
import { UserData,User } from '@/entites';
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports';

export class RegisterUserOnMailingList implements UseCase{
    private readonly userRepo: UserRepository
    constructor(userRepo:UserRepository){
        this.userRepo=userRepo
    }

   public async perform(request:User):Promise<UserData>{
    const name = request.name.value
    const email = request.email.value
    const userData = { name, email }
    if (!(await this.userRepo.exist(userData))) {
        await this.userRepo.add(userData)
      }
    return userData
   }
}