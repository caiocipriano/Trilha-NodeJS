import { UserData } from "@/entites"
import { Either, right } from "@/shared"
import { RegisterUserOnMailingList } from "@/usercases"
import { MailServiceError } from "@/usercases/errors/mail-service-error"
import { RegisterAndSendEmail } from "@/usercases/register-and-send-email/register-and-send-email"
import { UserRepository } from "@/usercases/register-user-on-mailing-list/ports"
import { EmailOptions, EmailService } from "@/usercases/send-email/ports/email-service"
import { SendEmail } from "@/usercases/send-email/send-email"
import { InMemoryUserRepository } from "../regsiter-user-on-mailing-list/repository"

describe('Register and send email to user', () => {
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

  class MailServiceMock implements EmailService {
    public timesSendWasCalled = 0
    async send (emailOptions: EmailOptions): Promise<Either<MailServiceError, EmailOptions>> {
      this.timesSendWasCalled++
      return right(emailOptions)
    }
  }
    test('', async ()=>{
        const users: UserData[] = []
        const repo: UserRepository = new InMemoryUserRepository(users)
        const registerUseCase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
        const mailServiceMock = new MailServiceMock()
        const sendEmailUseCase: SendEmail = new SendEmail(mailOptions, mailServiceMock)
        const registerAndSendEmailUseCase: RegisterAndSendEmail =
          new RegisterAndSendEmail(registerUseCase, sendEmailUseCase)
        const name = 'any_name'
        const email = 'any@email.com'
        const response: UserData = (await registerAndSendEmailUseCase.perform({ name, email })).value as UserData
        const user = repo.findUserByEmail('any@email.com')
        expect((await user).name).toBe('any_name')
        expect(response.name).toBe('any_name')
        expect(mailServiceMock.timesSendWasCalled).toEqual(1)
    })
    test('should not register user and send him/her an email with invalid email', async () => {
      const users: UserData[] = []
      const repo: UserRepository = new InMemoryUserRepository(users)
      const registerUseCase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
      const mailServiceMock = new MailServiceMock()
      const sendEmailUseCase: SendEmail = new SendEmail(mailOptions, mailServiceMock)
      const registerAndSendEmailUseCase: RegisterAndSendEmail =
        new RegisterAndSendEmail(registerUseCase, sendEmailUseCase)
      const name = 'any_name'
      const invalidemail = 'invalid_email'
      const response = (await registerAndSendEmailUseCase.perform({ name: name, email: invalidemail })).value as Error
      expect(response.name).toEqual('InvalidEmailError')
    })
  
    test('should not register user and send him/her an email with invalid name', async () => {
      const users: UserData[] = []
      const repo: UserRepository = new InMemoryUserRepository(users)
      const registerUseCase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
      const mailServiceMock = new MailServiceMock()
      const sendEmailUseCase: SendEmail = new SendEmail(mailOptions, mailServiceMock)
      const registerAndSendEmailUseCase: RegisterAndSendEmail =
        new RegisterAndSendEmail(registerUseCase, sendEmailUseCase)
      const invalidName = 'a'
      const email = 'any@mail.com'
      const response = (await registerAndSendEmailUseCase.perform({ name: invalidName, email: email })).value as Error
      expect(response.name).toEqual('InvalidNameError')
    })
})