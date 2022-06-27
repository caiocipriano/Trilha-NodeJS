import { UseCase } from '@/usercases/ports';
import { InvalidNameError,InvalidEmailError } from '@/entites/errors';
import { Either,left,right } from '@/shared';
import { UserData,User } from '@/entites';
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports';

export class RegisterUserOnMailingList implements UseCase{
    private readonly userRepo: UserRepository
    constructor(userRepo:UserRepository){
        this.userRepo=userRepo
    }

   public async perform(request:UserData):
   Promise<Either<InvalidEmailError|InvalidNameError,UserData>>{
    const userOrError:Either<InvalidNameError|InvalidEmailError,User> = User.create(request)
    if(userOrError.isLeft()){
        return left(userOrError.value)
    }

    if(!(await this.userRepo.exist(request))){
        await this.userRepo.add(request)
    }
    return right(request)
   }
}