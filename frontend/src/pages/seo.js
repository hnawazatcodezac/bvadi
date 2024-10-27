import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import Testimonial from "../components/testimonial";
import SeoSlider from "../components/seoSlider";
import Footer from "../components/footer";
import "../assets/css/serach-engine.css";
import "../assets/css/seo-pricing.css";
import "../assets/css/faq.css";

import checkImg from "../assets/images/check.svg";
import seoServicesCardOne from "../assets/images/seo-services-card-1.svg";
import seoServicesCardTwo from "../assets/images/seo-services-card-2.svg";
import seoServicesCardThree from "../assets/images/seo-services-card-3.svg";
import seoServicesCardFour from "../assets/images/seo-services-card-4.svg";
import seoServicesCardFive from "../assets/images/seo-services-card-5.svg";
import seoServicesCardSix from "../assets/images/seo-services-card-6.svg";
import seoServicesCardSeven from "../assets/images/seo-services-card-7.svg";
import seoServicesCardEight from "../assets/images/seo-services-card-8.svg";
import seoServicesCardNine from "../assets/images/seo-services-card-9.svg";
import seoServicesCardTen from "../assets/images/seo-services-card-10.svg";
import seoServicesCardEleven from "../assets/images/seo-services-card-11.svg";
import seoServiceCardTweleve from "../assets/images/seo-services-card-12.svg";

function SeoPage() {
  const { t } = useTranslation();

  return (
    <div className="seo-page">
      <Header />
      <section className="search-engine-section" id="seo">
        <div className="search-engine-section-header">
          <h2>
            {t("search_engine_section.search_engine_section_header.title")}
          </h2>
          <p>{t("search_engine_section.search_engine_section_header.text")}</p>
        </div>
        <div className="seo-services-container">
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardOne} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_one.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_one.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardTwo} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_two.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_two.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardThree} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_three.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_three.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardFour} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_four.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_four.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardFive} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_five.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_five.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardSix} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_six.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_six.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardSeven} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_seven.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_seven.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardEight} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_eight.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_eight.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardNine} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_nine.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_nine.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardTen} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_ten.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_ten.text"
              )}
            </p>
          </div>
          <div className="seo-service-card">
            <div className="icon">
              <img src={seoServicesCardEleven} alt="Seo Services Card Img" />
            </div>
            <h3>
              {t(
                "search_engine_section.card_container.seo_service_card_eleven.title"
              )}
            </h3>
            <p>
              {t(
                "search_engine_section.card_container.seo_service_card_eleven.text"
              )}
            </p>
          </div>
          <div className="seo-service-card p-0">
            <img
              loading="lazy"
              src={seoServiceCardTweleve}
              className="w-100 h-100 object-fit-cover"
              alt="Seo Services Card Img"
            />
          </div>
        </div>
      </section>
      <section className="seo-pricing">
        <div className="seo-pricing-header d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-uppercase">{t("seo_pricing.header.title")}</h2>
          <p>{t("seo_pricing.header.text")}</p>
        </div>
        <div className="pricing-container">
          <div className="pricing-card basic">
            <h2>{t("seo_pricing.packages.basic.title")}</h2>
            <p className="price">{t("seo_pricing.packages.basic.price")}</p>
            <button className="get-started">
              {t("seo_pricing.packages.basic.btn")}
            </button>
            <ul>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.basic.features.one")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.basic.features.two")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.basic.features.three")}
              </li>
              <li className="disable">
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.basic.features.four")}
              </li>
              <li className="disable">
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.basic.features.five")}
              </li>
              <li className="disable">
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.basic.features.six")}
              </li>
            </ul>
          </div>
          <div className="pricing-card pro">
            <h2>{t("seo_pricing.packages.pro.title")}</h2>
            <p className="price">{t("seo_pricing.packages.pro.price")}</p>
            <button className="get-started">
              {t("seo_pricing.packages.pro.btn")}
            </button>
            <ul>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.pro.features.one")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.pro.features.two")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.pro.features.three")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.pro.features.four")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.pro.features.five")}
              </li>
              <li>
                <img src={checkImg} alt="check-img" />
                {t("seo_pricing.packages.pro.features.six")}
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
                {t("faq.seo_questions.question_one.question")}
              </button>
            </h2>
            <div
              id="collapse-one"
              className="accordion-collapse collapse"
              aria-labelledby="heading-one"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.seo_questions.question_one.answer")}
                <br />
                <a href="#">{t("faq.seo_questions.question_one.link_text")}</a>.
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
                {t("faq.seo_questions.question_two.question")}
              </button>
            </h2>
            <div
              id="collapse-two"
              className="accordion-collapse collapse"
              aria-labelledby="heading-two"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.seo_questions.question_two.answer")}
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
                {t("faq.seo_questions.question_three.question")}
              </button>
            </h2>
            <div
              id="collapse-three"
              className="accordion-collapse collapse"
              aria-labelledby="heading-three"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.seo_questions.question_three.answer")}
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
                {t("faq.seo_questions.question_four.question")}
              </button>
            </h2>
            <div
              id="collapse-four"
              className="accordion-collapse collapse"
              aria-labelledby="heading-four"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.seo_questions.question_four.answer")}
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
                {t("faq.seo_questions.question_five.question")}
              </button>
            </h2>
            <div
              id="collapse-five"
              className="accordion-collapse collapse"
              aria-labelledby="heading-five"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.seo_questions.question_five.answer")}
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
                {t("faq.seo_questions.question_six.question")}
              </button>
            </h2>
            <div
              id="collapse-six"
              className="accordion-collapse collapse"
              aria-labelledby="heading-six"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.seo_questions.question_six.answer")}
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
                {t("faq.seo_questions.question_seven.question")}
              </button>
            </h2>
            <div
              id="collapse-seven"
              className="accordion-collapse collapse"
              aria-labelledby="heading-seven"
              data-bs-parent="#faq-accordion"
            >
              <div className="accordion-body">
                {t("faq.seo_questions.question_seven.answer")}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SeoSlider />
      <Footer />
    </div>
  );
}

export default SeoPage;
