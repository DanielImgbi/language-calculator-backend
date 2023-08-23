const nodemailer = require("nodemailer");

const mailer = (receiver, text) => {
  if (!receiver || !text) {
    return;
  }

  const html = `
  <h1>Your Scores For English Test</h1>
  <p> the following are the summary of your score for word know test. G1${text.G1}, G2${text.G2}, G3${text.G3}, G4${text.G4} </p>
  <footer>Courtesy  LCT</footer>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "26",
    auth: {
      user: "languagecalculatortestemail@gmail.com",
      pass: "irodtuqnovhkjzbv",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const message = {
    from: "languagecalculatortestemail@gmail.com",
    to: `${receiver}`,
    subject: `Language Calculator Test`,
    html: html,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return false;
    }
    if (info) {
      console.log("message sent", info.response);
    }
  });

  return true;
};

module.exports = mailer;
