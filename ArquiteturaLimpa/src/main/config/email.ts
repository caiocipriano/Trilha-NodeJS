import { EmailOptions } from "@/usercases/send-email/ports/email-service"

const attachments = [{
  filename: 'clean-architecture.pdf',
  path: 'https://github.com/caiocipriano/Trilha-NodeJS.git'
}]

export function getEmailOptions (): EmailOptions {
  const from = 'Caio Cipriano | theUdemy <caio@udemy.com.br>'
  const to = ''
  const mailOptions: EmailOptions = {
    //Trocar por variaveis
    host: 'process.env.EMAIL_HOST',
    port: 6703,
    username: 'process.env.EMAIL_USERNAME',
    password: 'process.env.EMAIL_PASSWORD',
    from: from,
    to: to,
    subject: 'Mensagem de teste',
    text: 'Texto da mensagem',
    html: '<b> Texto da mensagem </b>',
    attachments: attachments
  }
  return mailOptions
}