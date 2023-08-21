const nodeMailer = require("nodemailer");

const createMail = (receiver, text) => {
  if (!receiver || !text) {
    return;
  }

  console.log(text, receiver);
  const transporter = nodeMailer.createTransport({
    service: "Gmail",
    auth: {
      user: "kapilmalhi371@gmail.com",
      pass: "add your password",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const message = {
    from: "kapilmalhi371@gmail.com",
    to: `${receiver}`,
    subject: `Result`,
    text: `the following are the summary of your score for word know test. G1${text.G1}, G2${text.G2}, G3${text.G3}, G4${text.G4}`,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      throw Error("error occured! something went wrong");
    } else {
      console.log(info);
      console.log({
        message: "Congratulations! you will receive an email of your scores.",
      });
    }
  });
};

module.exports = createMail;
