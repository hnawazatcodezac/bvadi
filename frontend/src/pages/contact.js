import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Header from "../components/header";
import Testimonial from "../components/testimonial";
import SeoSlider from "../components/seoSlider";
import Footer from "../components/footer";
import Seo from "../components/seo";
import "../assets/css/contact-form.css";

const serverBaseUrl = process.env.REACT_APP_BACKEND_SERVER_URL;

function ContactPage() {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, t("contact_us.form.validations.name.err_one"))
      .required(t("contact_us.form.validations.name.err_two"))
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        t("contact_us.form.validations.name.err_three"),
        (value) => value === value?.trim()
      ),
    email: Yup.string()
      .email(t("contact_us.form.validations.email.err_one"))
      .required(t("contact_us.form.validations.email.err_two"))
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        t("contact_us.form.validations.email.err_three"),
        (value) => value === value?.trim()
      ),
    phoneNumber: Yup.string()
      .matches(/^(\+?\d{1,3})?[\s-]?\(?\d{2,4}\)?[\s-]?\d{3,4}[\s-]?\d{4}$/, {
        message: t("contact_us.form.validations.phone.err_one"),
        excludeEmptyString: true,
      })
      .nullable()
      .notRequired()
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        t("contact_us.form.validations.phone.err_two"),
        (value) => !value || value === value?.trim()
      ),
    subject: Yup.string()
      .required(t("contact_us.form.validations.subject.err_one"))
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        t("contact_us.form.validations.subject.err_two"),
        (value) => value === value?.trim()
      ),
    message: Yup.string()
      .trim()
      .strict()
      .test(
        "no-leading-trailing-spaces",
        t("contact_us.form.validations.message.err_one"),
        (value) => value === value?.trim()
      ),
  });

  const [alert, setAlert] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const defaultFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSubmitting(true);
    try {
      const response = await fetch(`${serverBaseUrl}/contact-us`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });
      const responseData = await response.json();
      if (response.status === 201) {
        setAlert({ success: responseData.message });
        resetForm();
        setTimeout(() => setAlert({ success: false }), 3000);
      } else if (response.status === 403) {
        const error = typeof responseData.error;
        if (error === "object") {
          setFieldErrors(responseData.error);
        } else {
          setAlert(responseData.message || "An error occurred");
          setTimeout(() => setAlert({ error: false }), 3000);
        }
      } else {
        setAlert({ error: responseData.message });
        setTimeout(() => setAlert({ error: false }), 3000);
      }
    } catch (error) {
      setAlert({ error: "An error occurred while sending your message" });
      setTimeout(() => setAlert({ error: false }), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Header alert={alert} />
      <section className="contact-form w-100" id="contact">
        <div className="form-heading">
          <h1>{t("contact_us.header.title")}</h1>
          <p>{t("contact_us.header.description")}</p>
        </div>
        <Formik
          initialValues={defaultFormData}
          validate={(values) => {
            setFieldErrors({});
            try {
              validationSchema.validateSync(values, { abortEarly: false });
              return {};
            } catch (err) {
              const errors = {};
              err.inner.forEach((validationError) => {
                errors[validationError.path] = validationError.message;
              });
              return errors;
            }
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form" id="contact-form">
              <div className="form-group d-flex align-items-stretch justify-content-between">
                <div className="input-div d-flex flex-column">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t("contact_us.form.placeholder.name")}
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="joi-error-message"
                  />
                  {fieldErrors.name && (
                    <p className="joi-error-message">{fieldErrors.name[0]}</p>
                  )}
                </div>

                <div className="input-div d-flex flex-column">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("contact_us.form.placeholder.email")}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="joi-error-message"
                  />
                  {fieldErrors.email && (
                    <p className="joi-error-message">{fieldErrors.email[0]}</p>
                  )}
                </div>
              </div>

              <div className="form-group d-flex align-items-stretch justify-content-between">
                <div className="input-div d-flex flex-column">
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder={t("contact_us.form.placeholder.phone_number")}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className="joi-error-message"
                  />
                  {fieldErrors.phoneNumber && (
                    <p className="joi-error-message">
                      {fieldErrors.phoneNumber[0]}
                    </p>
                  )}
                </div>

                <div className="input-div d-flex flex-column">
                  <Field
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder={t("contact_us.form.placeholder.subject")}
                  />
                  <ErrorMessage
                    name="subject"
                    component="p"
                    className="joi-error-message"
                  />
                  {fieldErrors.subject && (
                    <p className="joi-error-message">
                      {fieldErrors.subject[0]}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <div className="d-flex flex-column">
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-100"
                    placeholder={t("contact_us.form.placeholder.message")}
                    cols="26"
                    rows="10"
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="joi-error-message"
                  />
                  {fieldErrors.message && (
                    <p className="joi-error-message">
                      {fieldErrors.message[0]}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-group full-width">
                <button type="submit" disabled={isSubmitting}>
                  {t("contact_us.form.submit_button")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <Testimonial />
      <Seo variant="elevate" />
      <SeoSlider />
      <Footer />
    </div>
  );
}

export default ContactPage;
