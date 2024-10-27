const adminFromEmail = "tahiraziztesting@gmail.com";
const adminToEmail = "tahiraziztesting@gmail.com";

const configs = {
  adminToEmail: adminToEmail,
  adminFromEmail: adminFromEmail,
  mailgunConfig: {
    domain: process.env.MAILGUN_DOMAIN,
    apiKey: process.env.MAILGUN_API_KEY,
  },
  templates: {
    contactUs: {
      from: adminFromEmail,
      name: "bvadi contact us",
    },
  },
};

module.exports = configs;
