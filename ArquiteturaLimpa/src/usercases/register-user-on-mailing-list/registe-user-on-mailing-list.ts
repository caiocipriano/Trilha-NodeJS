import { right } from './../../shared/either';
import { InvalidNameError } from './../../entites/errors/invalid-name-error';
import { InvalidEmailError } from '../../entites/errors/invalid-email-error';
import { Either, left } from '../../shared/either';
import { UserData } from './../../entites/user-data';
import { UserRepository } from './ports/user-repository';
import { User } from '../../entites/user';
export class RegisterUserOnMailingList{
    private readonly userRepo: UserRepository
    constructor(userRepo:UserRepository){
        this.userRepo=userRepo
    }

   public async registerUserOnMailingList(request:UserData):
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