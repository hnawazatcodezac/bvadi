import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import Testimonial from "../components/testimonial";
import SeoSlider from "../components/seoSlider";
import Footer from "../components/footer";
import "../assets/css/serach-engine.css";
import "../assets/css/seo-pricing.css";
import "../assets/css/faq.css";
import "../assets/css/web-project.css";

import checkImg from "../assets/images/check.svg";
import projectImgOne from "../assets/images/project-img-1.svg";
import projectImgTwo from "../assets/images/project-img-2.svg";
import projectImgThree from "../assets/images/project-img-3.svg";
import projectImgFour from "../assets/images/project-img-4.svg";
import webServicesCardOne from "../assets/images/web-services-card-1.svg";
import webServicesCardTwo from "../assets/images/web-services-card-2.svg";
import webServicesCardThree from "../assets/images/web-services-card-3.svg";
import webServicesCardFour from "../assets/images/web-services-card-4.svg";
import webServicesCardFive from "../assets/images/web-services-card-5.svg";
import webServicesCardSix from "../assets/images/web-services-card-6.svg";

function WebPage() {
  const { t } = useTranslation();

  return (
    <div className="web-page">
      <Header />
      <section className="search-engine-section" id="web">
        <div className="search-engine-section-header">
          <h2>
            {t(
              "website_development_section.website_development_section_header.title"
            )}
          </h2>
          <p>
            {t(
              "website_development_section.website_development_section_header.text"
            )}
          </p>
        </div>
        <div className="seo-services-container">
          <div className="seo-service-card">
            <div className="icon">
              <img src={webServicesCardOne} alt="Web Services Card Img" />
            </div>
            <h3>
              {t(
                "website_development_section.card_container.website_development_card_one.title"
              )}
            </h3>
            <p>
              {t(
                "website_development_section.card_container.website_development_card_one.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={webServicesCardTwo} alt="Web Services Card Img" />
            </div>
            <h3>
              {t(
                "website_development_section.card_container.website_development_card_two.title"
              )}
            </h3>
            <p>
              {t(
                "website_development_section.card_container.website_development_card_two.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={webServicesCardThree} alt="Web Services Card Img" />
            </div>
            <h3>
              {t(
                "website_development_section.card_container.website_development_card_three.title"
              )}
            </h3>
            <p>
              {t(
                "website_development_section.card_container.website_development_card_three.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={webServicesCardFour} alt="Web Services Card Img" />
            </div>
            <h3>
              {t(
                "website_development_section.card_container.website_development_card_four.title"
              )}
            </h3>
            <p>
              {t(
                "website_development_section.card_container.website_development_card_four.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={webServicesCardFive} alt="Web Services Card Img" />
            </div>
            <h3>
              {t(
                "website_development_section.card_container.website_development_card_five.title"
              )}
            </h3>
            <p>
              {t(
                "website_development_section.card_container.website_development_card_five.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={webServicesCardSix} alt="Web Services Card Img" />
            </div>
            <h3>
              {t(
                "website_development_section.card_container.website_development_card_six.title"
              )}
            </h3>
            <p>
              {t(
                "website_development_section.card_container.website_development_card_six.text"
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="seo-pricing">
        <div className="seo-pricing-header d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-uppercase">{t("web_pricing.header.title")}</h2>
          <p>{t("web_pricing.header.text")}</p>
        </div>
        <div className="pricing-container">
          <div className="pricing-card basic">
            <h2>{t("web_pricing.packages.basic.title")}</h2>
            <p className="price">{t("web_pricing.packages.basic.price")}</p>
            <button className="get-started">
              {t("web_pricing.packages.basic.btn")}
            </button>
            <ul>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.basic.features.one")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.basic.features.two")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.basic.features.three")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.basic.features.four")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.basic.features.five")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.basic.features.six")}
              </li>
            </ul>
          </div>

          <div className="pricing-card pro">
            <h2>{t("web_pricing.packages.pro.title")}</h2>
            <p className="price">{t("web_pricing.packages.pro.price")}</p>
            <button className="get-started">
              {t("web_pricing.packages.basic.btn")}
            </button>
            <ul>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.pro.features.one")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.pro.features.two")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.pro.features.three")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.pro.features.four")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.pro.features.five")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.pro.features.six")}
              </li>
            </ul>
          </div>

          <div className="pricing-card basic">
            <h2>{t("web_pricing.packages.silver.title")}</h2>
            <p className="price">{t("web_pricing.packages.silver.price")}</p>
            <button className="get-started">
              {t("web_pricing.packages.silver.btn")}
            </button>
            <ul>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.silver.features.one")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.silver.features.two")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.silver.features.three")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.silver.features.four")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.silver.features.five")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("web_pricing.packages.silver.features.six")}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Testimonial />
      <section className="faq-section">
        <h2 className="heading">{t("faq.header.title")}</h2>
        <p className="sub-heading">{t("faq.header.text")}</p>

        <div className="accordion" id="faq-accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-one">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-one"
                aria-expanded="false"
                aria-controls="collapse-one"
              >
                {t("faq.web_questions.question_one.question")}
              </button>
            </h2>
            <div
              id="collapse-one"
              className="accordion-collapse collapse"
              aria-labelledby="heading-one"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.web_questions.question_one.answer")}
                <br />
                <a href="#">{t("faq.web_questions.question_one.link_text")}</a>.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-two">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-two"
                aria-expanded="false"
                aria-controls="collapse-two"
              >
                {t("faq.web_questions.question_two.question")}
              </button>
            </h2>
            <div
              id="collapse-two"
              className="accordion-collapse collapse"
              aria-labelledby="heading-two"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.web_questions.question_two.answer")}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-three">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-three"
                aria-expanded="false"
                aria-controls="collapse-three"
              >
                {t("faq.web_questions.question_three.question")}
              </button>
            </h2>
            <div
              id="collapse-three"
              className="accordion-collapse collapse"
              aria-labelledby="heading-three"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.web_questions.question_three.answer")}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-four">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-four"
                aria-expanded="false"
                aria-controls="collapse-four"
              >
                {t("faq.web_questions.question_four.question")}
              </button>
            </h2>
            <div
              id="collapse-four"
              className="accordion-collapse collapse"
              aria-labelledby="heading-four"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.web_questions.question_four.answer")}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-five">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-five"
                aria-expanded="false"
                aria-controls="collapse-five"
              >
                {t("faq.web_questions.question_five.question")}
              </button>
            </h2>
            <div
              id="collapse-five"
              className="accordion-collapse collapse"
              aria-labelledby="heading-five"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.web_questions.question_five.answer")}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-six">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-six"
                aria-expanded="false"
                aria-controls="collapse-six"
              >
                {t("faq.web_questions.question_six.question")}
              </button>
            </h2>
            <div
              id="collapse-six"
              className="accordion-collapse collapse"
              aria-labelledby="heading-six"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.web_questions.question_seven.answer")}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading-seven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-seven"
                aria-expanded="false"
                aria-controls="collapse-seven"
              >
                {t("faq.web_questions.question_seven.question")}
              </button>
            </h2>
            <div
              id="collapse-seven"
              className="accordion-collapse collapse"
              aria-labelledby="heading-seven"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.web_questions.question_seven.answer")}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="web-projects">
        <h2 className="web-project-heading">
          {t("web_projects_section.title")}
        </h2>
        <div className="project-container">
          <div className="project-item">
            <img src={projectImgOne} alt="project img 1" loading="lazy" />
          </div>
          <div className="project-item">
            <img src={projectImgTwo} alt="project img 2" loading="lazy" />
          </div>
          <div className="project-item">
            <img src={projectImgThree} alt="project img 3" loading="lazy" />
          </div>
          <div className="project-item">
            <img src={projectImgFour} alt="project img 4" loading="lazy" />
          </div>
        </div>
      </section>
      <SeoSlider />
      <Footer />
    </div>
  );
}

export default WebPage;
