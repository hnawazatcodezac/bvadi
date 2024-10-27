const adminFromEmail = process.env.ADMIN_FROM_EMAIL;
const adminToEmail = process.env.ADMIN_TO_EMAIL;

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
