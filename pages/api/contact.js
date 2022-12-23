import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

import sendMailToUser from "../../utils/sendMailToClient";
import mailer from "../../utils/sendMailToTeam";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

const fs = require("fs");
const path = require("path");
const usersEmail = [
  "evanskwofie67@gmail.com",
  "alhassanjamil0@gmail.com",
  "spexbyte@gmail.com",
];

// handle sending get in touch message
export default async function contact(request, response) {
  // run middleware here
  await runMiddleware(request, response, cors);

  if (request.method === "POST") {
    const { name, email, message, branding, webdev, design } = request.body;

    console.table({ name, email, message, branding, webdev, design });
    if (!name || !email || !message) {
      response
        .status(400)
        .json({ error: "Please make sure form fields are filled" });
    }
    try {
      // get html content for client
      let htmlContent = fs
        .readFileSync(path.join(process.cwd(), "/static/welcome.html"))
        .toString();
      htmlContent = htmlContent.replace("{{name}}", name);

      // get html content for spexbyte team
      let htmlContent2 = fs
        .readFileSync(path.join(process.cwd(), "/static/contact.html"))
        .toString();

      htmlContent2 = htmlContent2.replace("{{name}}", name);
      htmlContent2 = htmlContent2.replace("{{message}}", message);
      htmlContent2 = htmlContent2.replace("{{email}}", email);

      // send emails to user & spexbyte team
      sendMailToUser(email, "Enquiry Received", htmlContent);
      mailer(usersEmail, "Enquiry From Client", htmlContent2);

      response.status(200).json({
        message: "Thanks for reaching out, we'll get back to you shortly",
      });
      return;
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  } else {
    response.setHeader("Allow", ["POST"]);
    return response
      .status(405)
      .json({ error: `Method ${request.method} not allowed` });
  }
}
