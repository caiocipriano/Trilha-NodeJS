import { User } from "@/entites"
import { Either, left, Left, Right, right } from "@/shared"
import { MailServiceError } from "@/usercases/errors/mail-service-error"
import { EmailOptions, EmailService } from "@/usercases/send-email/ports/email-service"
import { SendEmail } from "@/usercases/send-email/send-email"

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
  class MailServiceErrorStub implements EmailService {
    async send (emailOptions: EmailOptions): Promise<Either<MailServiceError, EmailOptions>> {
      return left(new MailServiceError())
    }
  }
  
  describe('Send email to user', () => {
    describe('Send email to user', () => {
      test('should email user with valid name and email address', async () => {
        const mailServiceStub = new MailServiceStub()
        const useCase = new SendEmail(mailOptions, mailServiceStub)
        const user = User.create({ name: toName, email: toEmail }).value as User
        const response = (await useCase.perform(user)).value as EmailOptions
        expect(response.to).toEqual(toName + '<' + toEmail + '>')
      })
    
      test('should return error when email service fails', async () => {
        const mailServiceErrorStub = new MailServiceErrorStub()
        const useCase = new SendEmail(mailOptions, mailServiceErrorStub)
        const user = User.create({ name: toName, email: toEmail }).value as User
        const response = await useCase.perform(user)
        expect(response.value).toBeInstanceOf(MailServiceError)
      })
    })
  })
