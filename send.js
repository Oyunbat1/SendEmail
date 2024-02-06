require("dotenv").config();
const nodemailer = require("nodemailer");
const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: "587",
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const message = {
    from: "Oyunbat9958@gmail.com",
    to: "batnasoyunbat@gmail.com ,ormanaiartmongolia@gmail.com",
    cc: "batnasoyunbat@gmail.com ",
    bcc: "batnasoyunbat@gmail.com ",
    subject: "Email test hiij baina.",
    text: "Email amjilttai ilgegdlee.",
    attachments: [
      {
        filename: "picrureName",
        path: "...",
      },
    ],
  };

  const info = await transporter.sendMail(message);
  console.log("message ilgegdle", info.messageId);
};

sendEmail()
  .then((res) => {
    console.log("email amijlttai ilgegdle ");
  })
  .catch((err) => console.log("Aldaa garlaa", err.message));
