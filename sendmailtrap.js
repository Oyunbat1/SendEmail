const nodemailer = require("nodemailer");

const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: "2525",
    auth: {
      user: "a5a8acde7bc4ed",
      pass: "2eef22e2d340ec",
    },
  });
  const message = {
    from: "oyunbat9958@gmail.com",
    to: "Oyunbat9958@gmail.com",
    subject: "Email test hiij baina.",
    text: "Email amjilttai ilgegdlee.",
  };

  const info = await transporter.sendMail(message);
  console.log("message ilgegdle", info.messageId);
};

sendEmail()
  .then((res) => {
    console.log("email amijlttai ilgegdle ");
  })
  .catch((err) => console.log("Aldaa garlaa", err.message));
