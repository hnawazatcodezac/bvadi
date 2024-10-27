const Joi = require("joi");

module.exports = {
  contactUs: Joi.object({
    name: Joi.string()
      .pattern(/^[A-Za-z\s]+$/)
      .required()
      .trim()
      .messages({
        "string.base": "Name must be a string",
        "string.pattern.base": "Name can only contain letters and spaces",
        "any.required": "Name is required",
        "string.empty": "Name is not allowed to be empty",
        "string.trim":
          "Name may not contain any spaces at the beginning or end",
      }),
    email: Joi.string()
      .trim()
      .email({ minDomainSegments: 2 })
      .required()
      .messages({
        "string.email": "Enter a valid email",
        "any.required": "Email is required",
        "string.empty": "Email is not allowed to be empty",
        "string.trim":
          "Email may not contain any spaces at the beginning or end",
      }),
    phoneNumber: Joi.string()
      .optional()
      .allow("", null)
      .trim()
      .pattern(/^(\+?\d{1,3})?[\s-]?\(?\d{2,4}\)?[\s-]?\d{3,4}[\s-]?\d{4}$/)
      .messages({
        "string.trim":
          "Phone number may not contain any spaces at the beginning or end",
        "string.pattern.base": "Please provide a valid phone number",
      }),
    subject: Joi.string().trim().required().messages({
      "string.base": "Subject must be a string",
      "any.required": "Subject is required",
      "string.empty": "Subject is not allowed to be empty",
      "string.trim":
        "Subject may not contain any spaces at the beginning or end",
    }),
    message: Joi.string().allow("").trim().messages({
      "string.base": "Message must be a string",
      "string.trim":
        "Message may not contain any spaces at the beginning or end",
    }),
  }),
};
