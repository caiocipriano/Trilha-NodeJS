import { MissingParamError } from '@/controllers/errors/missing-param-error';
import { HttpRequest,HttpResponse } from '@/controllers/ports';
import { RegisterAndSendEmailController } from '@/controllers/register-user-controller';
import { UserData } from '@/entites';
import { InvalidEmailError, InvalidNameError } from '@/entites/errors';
import { Either, right } from '@/shared';
import { MailServiceError } from '@/usercases/errors/mail-service-error';
import { UseCase } from '@/usercases/ports';
import { RegisterAndSendEmail } from '@/usercases/register-and-send-email/register-and-send-email';
import { RegisterUserOnMailingList } from '@/usercases/register-user-on-mailing-list';
import { UserRepository } from '@/usercases/register-user-on-mailing-list/ports';
import { EmailOptions, EmailService } from '@/usercases/send-email/ports/email-service';
import { SendEmail } from '@/usercases/send-email/send-email';
import { InMemoryUserRepository } from 'test/user-cases/regsiter-user-on-mailing-list/repository';


const attachmentFilePath = '../resources/text.txt'
const fromName = 'Test'
const fromEmail = 'from_email@mail.com'
const toName = 'any_name'
const toEmail = 'any_email@mail.com'
const subject = 'Test e-mail'
const emailBody = 'Hello world attachment test'
const emailBodyHtml = '<b>Hello world attachment test</b>'
const attachment = [{
  filename: attachmentFilePath,
  contentType: 'text/plain'
}]

const mailOptions: EmailOptions = {
  host: 'test',
  port: 867,
  username: 'test',
  password: 'test',
  from: fromName + ' ' + fromEmail,
  to: toName + '<' + toEmail + '>',
  subject: subject,
  text: emailBody,
  html: emailBodyHtml,
  attachments: attachment
}

class MailServiceStub implements EmailService {
  async send (emailOptions: EmailOptions): Promise<Either<MailServiceError, EmailOptions>> {
    return right(emailOptions)
  }
}
describe('',()=>{
    const users: UserData[] = []
    const repo: UserRepository = new InMemoryUserRepository(users)
    const registerUseCase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
    const mailServiceStub = new MailServiceStub()
    const sendEmailUseCase: SendEmail = new SendEmail(mailOptions, mailServiceStub)
    const registerAndSendEmailUseCase: RegisterAndSendEmail =
      new RegisterAndSendEmail(registerUseCase, sendEmailUseCase)
    const controller: RegisterAndSendEmailController = new RegisterAndSendEmailController(registerAndSendEmailUseCase)
  
    class ErrorThrowingUseCaseStub implements UseCase {
      perform (request: any): Promise<void> {
        throw Error()
      }
    }
  
    const errorThrowingUseCaseStub: UseCase = new ErrorThrowingUseCaseStub()

    test('deve retornar status 200 para requisição de user valido', async()=>{
        const request:HttpRequest={
            body:{
                name:"AnyName",
                email:"any@email.com"
            }
        }
        const response:HttpResponse= await controller.handle(request)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(request.body)
    })

    test('deve retornar status 400 para requisição de nome valido', async()=>{
        const requestWithInvalidName:HttpRequest={
            body:{
                name:"A",
                email:"any@email.com"
            }
        }
        const response:HttpResponse= await controller.handle(requestWithInvalidName)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(InvalidNameError)
    })

    test('deve retornar status 400 para requisição de email valido', async()=>{
        const requestWithInvalidEmail:HttpRequest={
            body:{
                name:"Any Name",
                email:""
            }
        }
        const response:HttpResponse= await controller.handle(requestWithInvalidEmail)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(InvalidEmailError)
    })

    test('deve retornar status 400 para requisição faltando name', async()=>{
        const requestMissingName:HttpRequest={
            body:{
                email:"any@email.com"
            }
        }
        const response:HttpResponse= await controller.handle(requestMissingName)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(MissingParamError)
        expect((response.body as Error).message).toEqual("Missing Name in Request")
    })

    test('deve retornar status 400 para requisição faltando email', async()=>{
        const requestMissingEmail:HttpRequest={
            body:{
                name:"Any Name"
            }
        }
        const response:HttpResponse= await controller.handle(requestMissingEmail)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(MissingParamError)
        expect((response.body as Error).message).toEqual("Missing Email in Request")
    })

    test('deve retornar status 400 para requisição faltando email e nome', async()=>{
        const requestMissingEmail:HttpRequest={
            body:{
            }
        }
        const response:HttpResponse= await controller.handle(requestMissingEmail)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(MissingParamError)
        expect((response.body as Error).message).toEqual("Missing Email and Name in Request")
    })

    test('deve retornar status 500 para erro no servidor', async()=>{
        const request:HttpRequest={
            body:{
                name:"AnyName",
                email:"any@email.com"
            }
        }
        const controller:RegisterAndSendEmailController = new RegisterAndSendEmailController(errorThrowingUseCaseStub)
        const response:HttpResponse= await controller.handle(request)
        expect(response.statusCode).toBe(500)
        expect(response.body).toBeInstanceOf(Error)
    })
})