const nodeMailer = require("nodemailer");

const createMail = (receiver, subject, text) => {
  if ((!receiver, !subject, !text)) {
    return;
  }

  const transporter = createTransport({
    host: "smtp.mailtrap.com",
    port: 2525,
    auth: {
      user: "",
      pass: "",
    },
  });

  const message = {
    from: "",
    to: `${receiver}`,
    subject: `${subject}`,
    text: `${text}`,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = createMail;
