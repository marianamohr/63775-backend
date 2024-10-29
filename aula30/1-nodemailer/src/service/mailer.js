const nodemailer = require("nodemailer");

class Mailer {
  constructor(config) {
    this.transport = nodemailer.createTransport(config);
  }
  async sendEmail({ to, subject, text }) {
    await this.transport.sendMail({
        from: "Coderhouse <maricoder2024@gmail.com>",
        to: to,
        subject: subject,
        html: text,
        attachments: [],
      });
  }
  async sendImagem({ to, subject, cid,filename }) {
   const pathImage =  __dirname + `/../images/${filename}`
   console.log(pathImage)
    await this.transport.sendMail({
        from: "Coder Tests <maricoder2024@gmail.com>",
        to: to,
        subject: subject,
        html: `<div> <h1> Teste com Imagem! </h1> <img src='cid:${cid}'/></div>`,
        attachments: [
          {
            filename: filename,
            path: pathImage,
            cid: cid,
          },
        ],
      });
  }
}


module.exports = Mailer