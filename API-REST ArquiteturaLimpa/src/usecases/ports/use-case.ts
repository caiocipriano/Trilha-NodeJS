export interface UseCase{
    perform(request:any):Promise<any> //Request > Corpo do hadle na controller
}