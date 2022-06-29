import { Either, left, right } from "@/shared";
import { MailServiceError } from "@/usercases/errors/mail-service-error";
import { EmailOptions, EmailService } from "@/usercases/send-email/ports/email-service";

export class NodemailerEmailService implements EmailService{
    async send (options: EmailOptions): Promise<Either<MailServiceError, EmailOptions>> {
        try {
          const transporter = nodemailer.createTransport({
            host: options.host,
            port: options.port,
            auth: {
              user: options.username,
              pass: options.password
            }
          })
          await transporter.sendMail({
            from: options.from,
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html,
            attachments: options.attachments
          })
        } catch (error) {
          return left(new MailServiceError())
        }
        return right(options)
      }
    }