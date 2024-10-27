const { adminToEmail, templates } = require("../configs/email-config");
const { sendMail } = require("../utils/sendMail");

const contactUs = async (req, res) => {
  try {
    const { name, email, phoneNumber, subject, message } = req.body;

    const dynamicData = {
      name,
      email,
      phoneNumber,
      subject,
      message,
      to_email: adminToEmail,
    };

    await sendMail(templates.contactUs, dynamicData);

    return res.status(201).json({
      message: "Contact form submitted successfully",
      response: null,
      error: null,
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      message: err.message || "Internal server error",
      response: null,
      error: err,
    });
  }
};

module.exports = {
  contactUs,
};
