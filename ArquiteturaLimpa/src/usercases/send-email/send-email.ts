import { User, UserData } from "@/entites"
import { InvalidEmailError, InvalidNameError } from "@/entites/errors"
import { Either, left } from "@/shared"
import { MailServiceError } from "../errors/mail-service-error"
import { UseCase } from "../ports"
import { EmailOptions, EmailService } from "./ports/email-service"

export class SendEmail implements UseCase {
    private readonly emailOptions: EmailOptions
    private readonly emailService: EmailService
  
    constructor (emailOptions: EmailOptions, emailService: EmailService) {
      this.emailOptions = emailOptions
      this.emailService = emailService
    }
    
    async perform (user: User):
    Promise<Either<MailServiceError, EmailOptions>> {
    const greetings = 'E aí <b>' + user.name.value + '</b>, beleza?'
    const customizedHtml = greetings + '<br> <br>' + this.emailOptions.html
    const emailInfo: EmailOptions = {
      host: this.emailOptions.host,
      port: this.emailOptions.port,
      username: this.emailOptions.username,
      password: this.emailOptions.password,
      from: this.emailOptions.from,
      to: user.name.value + '<' + user.email.value + '>',
      subject: this.emailOptions.subject,
      text: this.emailOptions.text,
      html: customizedHtml,
      attachments: this.emailOptions.attachments
    }
    return await this.emailService.send(emailInfo)
  }
}