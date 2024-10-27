import React from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/about.css";

import aboutImgOne from "../assets/images/about-img-1.svg";
import aboutImgTwo from "../assets/images/about-img-2.svg";
import aboutStar from "../assets/images/about-star.svg";
import seoStar from "../assets/images/seo-star.svg";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section w-100 d-flex flex-column justify-content-start">
      <div className="about-row w-100 d-flex align-items-start justify-content-start">
        <div className="about-title-col d-flex justify-content-between fw-bold">
          <h2 className="about-title fw-bold">
            {t("about_section.title_one")}{" "}
            <span className="break-point">
              <br />
            </span>
            {t("about_section.title_two")}
          </h2>
          <img
            src={aboutStar}
            alt="BulutVadi logo"
            className="about-logo d-sm-block d-none"
            loading="lazy"
          />
          <img
            src={seoStar}
            alt="BulutVadi logo"
            className="about-logo d-block d-sm-none"
            loading="lazy"
          />
        </div>
        <p className="about-description">{t("about_section.description")}</p>
      </div>
      <div className="about-img-div">
        <div className="mission-div">
          <img src={aboutImgTwo} alt="Mission logo" loading="lazy" />
          <h2>{t("about_section.our_mission.title")}</h2>
          <p>{t("about_section.our_mission.description")}</p>
        </div>
        <div className="about-image-container">
          <img
            src={aboutImgOne}
            alt="BulutVadi team working together"
            className="about-image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="key-facts-section d-flex">
        <h3 className="key-facts-title">
          {t("about_section.key_facts.title_one")}{" "}
          <span className="key-fact-break-point">
            <br />
          </span>
          {t("about_section.key_facts.title_two")}
        </h3>
        <div className="key-facts-row d-flex align-items-center justify-content-center">
          <div className="key-fact-card">
            <p className="key-fact-number">
              {t("about_section.key_facts.trusted_users_numbers")}
              <span className="accent-color">
                {t("about_section.key_facts.trusted_users_numbers_represents")}
              </span>
            </p>
            <p className="key-fact-text">
              {t("about_section.key_facts.trusted_users")}
            </p>
          </div>
          <div className="key-fact-card">
            <p className="key-fact-number">
              {t("about_section.key_facts.projects_completed_numbers")}
              <span className="accent-color">
                {t(
                  "about_section.key_facts.projects_completed_numbers_represents"
                )}
              </span>
            </p>
            <p className="key-fact-text">
              {t("about_section.key_facts.projects_completed")}
            </p>
          </div>
          <div className="key-fact-card">
            <p className="key-fact-number">
              {t("about_section.key_facts.client_satisfaction_numbers")}
              <span className="accent-color">
                {t(
                  "about_section.key_facts.client_satisfaction_numbers_represents"
                )}
              </span>
            </p>
            <p className="key-fact-text">
              {t("about_section.key_facts.client_satisfaction")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
