import React from "react";
import { useTranslation } from "react-i18next";
import seoStar from "../assets/images/seo-star.svg";

function SeoSlider() {
  const { t } = useTranslation();

  return (
    <section className="seo-services">
      <div className="scrolling-text">
        <h2>{t("seo_scrolling_text.text_one")}</h2>
        <img src={seoStar} alt="star img" className="service-icon" />
        <h2>{t("seo_scrolling_text.text_two")}</h2>
      </div>
    </section>
  );
}

export default SeoSlider;
