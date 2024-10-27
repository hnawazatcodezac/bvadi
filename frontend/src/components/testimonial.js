import React from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/testimonial.css";

import cardImgOne from "../assets/images/card-img-1.svg";
import cardImgTwo from "../assets/images/card-img-2.svg";
import cardImgThree from "../assets/images/card-img-3.svg";
import quoteIcon from "../assets/images/quote-icon.svg";

function Testimonial() {
  const { t } = useTranslation();

  return (
    <section className="testimonials-container w-100">
      <h2 className="testimonials-title text-center">
        {t("testimonials_section.title")}
      </h2>
      <div className="testimonials-grid d-flex align-items-center justify-content-center">
        <article className="testimonial-card d-flex flex-column">
          <div className="review-content">
            <h3 className="review-primary-text">
              {t("testimonials_section.testimonials_one.primary_text")}
            </h3>
            <p className="review-secondary-text">
              {t("testimonials_section.testimonials_one.secondary_text")}
            </p>
          </div>
          <hr />
          <div className="reviewer-info w-100 d-flex align-items-center justify-content-between">
            <div className="reviewer-profile d-flex align-items-center">
              <img
                src={cardImgOne}
                alt="Dora Dybala"
                className="reviewer-avatar"
                loading="lazy"
              />
              <div className="reviewer-details">
                <p className="reviewer-name">
                  {t("testimonials_section.testimonials_one.name")}
                </p>
                <p className="reviewer-role">
                  {t("testimonials_section.testimonials_one.role")}
                </p>
                <img
                  src={cardImgThree}
                  alt="Company logo"
                  className="reviewer-company-logo"
                  loading="lazy"
                />
              </div>
            </div>
            <img
              src={cardImgThree}
              alt="Company logo"
              className="company-logo"
              loading="lazy"
            />
          </div>
          <img
            src={quoteIcon}
            alt="quote icon"
            className="quote-icon"
            loading="lazy"
          />
        </article>
        <article className="testimonial-card d-flex flex-column">
          <div className="review-content">
            <h3 className="review-primary-text">
              {t("testimonials_section.testimonials_two.primary_text")}
            </h3>
            <p className="review-secondary-text">
              {t("testimonials_section.testimonials_two.secondary_text")}
            </p>
          </div>
          <hr />
          <div className="reviewer-info w-100 d-flex align-items-center justify-content-between">
            <div className="reviewer-profile d-flex align-items-center">
              <img
                src={cardImgTwo}
                alt="Ryan Dyson"
                className="reviewer-avatar"
                loading="lazy"
              />
              <div className="reviewer-details">
                <p className="reviewer-name">
                  {t("testimonials_section.testimonials_two.name")}
                </p>
                <p className="reviewer-role">
                  {t("testimonials_section.testimonials_two.role")}
                </p>
                <img
                  src={cardImgThree}
                  alt="Company logo"
                  className="reviewer-company-logo"
                  loading="lazy"
                />
              </div>
            </div>
            <img
              src={cardImgThree}
              alt="Company logo"
              className="company-logo"
              loading="lazy"
            />
          </div>
          <img
            src={quoteIcon}
            alt="quote icon"
            className="quote-icon"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}

export default Testimonial;
