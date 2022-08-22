const nodemailer = require('nodemailer');

const mailer = async (email, subject, text) => {
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
      to: ['evanskwofie67@gmail.com', 'alhassanjamil0@gmail.com'],
      subject: subject,
      text: text,
    });

    console.log('Email delivered succesfully');
  } catch (error) {
    console.log(error.message);
  }
};

// handle sending get in touch message
export default async function contact(request, response) {
  if (request.method === 'POST') {
    const { name, email, message } = request.body;
    if (!name || !email || !message) {
      response
        .status(400)
        .json({ error: 'Please make sure form fields are filled' });
    }
    try {
      mailer(email, 'Enquiry From Client', message);
      response.status(200).json({
        message: "Thanks for reaching out, we'll get back to you shortly",
      });
      return;
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  } else {
    response.setHeader('Allow', ['POST']);
    return response
      .status(405)
      .json({ error: `Method ${request.method} not allowed` });
  }
}
