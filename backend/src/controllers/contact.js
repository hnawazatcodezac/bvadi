const axios = require("axios");
const {
  adminToEmail,
  templates,
  recaptchaSecretKey,
} = require("../configs/email-config");
const { sendMail } = require("../utils/sendMail");

const contactUs = async (req, res) => {
  try {
    const { name, email, phoneNumber, subject, message, captchaValue } =
      req.body;

    const catchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${captchaValue}`
    );

    if (!catchaResponse.data.success) {
      return res.status(401).json({
        message: "reCAPTCHA validation failed",
        response: null,
        error: "reCAPTCHA validation failed",
      });
    }

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
