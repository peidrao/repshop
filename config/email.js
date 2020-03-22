const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: 'keymailgun',
    domain: 'domain'
  }
};

const transport = nodemailer.createTransport(mailGun(auth));
const sendMail = (subject, email, text, cb) => {
  const mailOption = {
    from: email,
    to: 'emailquevaireceber@domini.com',
    subject: subject,
    text: text
  };

  transport.sendMail(mailOption, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(err, data);
    }
  });
};

module.exports = sendMail;
