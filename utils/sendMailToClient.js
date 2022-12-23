const nodemailer = require("nodemailer");

const sendMailToUser = async (email, subject, htmlContent) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transport.sendMail({
      from: email,
      to: email,
      subject: subject,
      html: htmlContent,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendMailToUser;
