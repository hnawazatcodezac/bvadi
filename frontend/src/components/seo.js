import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/css/seo.css";
import checkImg from "../assets/images/check.svg";

function Seo({ variant }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToContactPage = () => {
    navigate("/contact-us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const exploreServices = () => {
    navigate("/#home-services");
  };

  return (
    <>
      {variant === "elevate" ? (
        <section className="seo-section elevate-seo-section w-100 d-flex justify-content-center align-items-center">
          <div className="cta-inner d-flex flex-column justify-content-center align-items-center">
            <div className="cta-content d-flex flex-column justify-content-center align-items-center">
              <h2 className="cta-title">
                {t("seo_cta_section_elevate.title_one")}
                <br />
                {t("seo_cta_section_elevate.title_two")}
              </h2>
              <p className="cta-description">
                {t("seo_cta_section_elevate.description_one")}
                <span className="tetmonial-description-break">
                  <br />
                </span>
                {t("seo_cta_section_elevate.description_two")}
              </p>
            </div>
            <button className="cta-button" onClick={exploreServices}>
              {t("seo_cta_section_elevate.cta_btn")}
            </button>
          </div>
        </section>
      ) : (
        <section className="seo-section w-100 d-flex justify-content-center align-items-center">
          <div className="cta-inner d-flex flex-column justify-content-center align-items-center">
            <div className="cta-content d-flex flex-column justify-content-center align-items-center">
              <h2 className="cta-title">
                {t("seo_cta_section_transform.title_one")} <br />
                {t("seo_cta_section_transform.title_two")}
              </h2>
              <p className="cta-description">
                {t("seo_cta_section_transform.description_one")} <br />
                {t("seo_cta_section_transform.description_two")}
              </p>
            </div>
            <button className="cta-button" onClick={goToContactPage}>
              {t("seo_cta_section_transform.cta_btn")}
            </button>
            <div className="feature-list">
              <div className="feature-item">
                <img src={checkImg} alt="check-img" />
                <span className="feature-text">
                  {t("seo_cta_section_transform.features.one")}
                </span>
              </div>
              <div className="feature-item">
                <img src={checkImg} alt="check-img" />
                <span className="feature-text">
                  {t("seo_cta_section_transform.features.two")}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Seo;
