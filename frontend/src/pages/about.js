import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import About from "../components/about";
import Testimonial from "../components/testimonial";
import Seo from "../components/seo";
import SeoSlider from "../components/seoSlider";
import Footer from "../components/footer";
import "../assets/css/about-boxes.css";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <Header />
      <About />
      <section className="boxes d-flex align-items-stretch justify-content-center">
        <div className="box">
          <span className="box-number">{t("about_boxes.box_one.number")}</span>
          <h2 className="box-heading">{t("about_boxes.box_one.title")}</h2>
          <p className="box-paragraph">
            {t("about_boxes.box_one.description")}
          </p>
        </div>
        <div className="box">
          <span className="box-number">{t("about_boxes.box_two.number")}</span>
          <h2 className="box-heading">{t("about_boxes.box_two.title")}</h2>
          <p className="box-paragraph">
            {t("about_boxes.box_two.description")}
          </p>
        </div>
        <div className="box">
          <span className="box-number">
            {t("about_boxes.box_three.number")}
          </span>
          <h2 className="box-heading">{t("about_boxes.box_three.title")}</h2>
          <p className="box-paragraph">
            {t("about_boxes.box_three.description")}
          </p>
        </div>
      </section>
      <Testimonial />
      <Seo />
      <SeoSlider />
      <Footer />
    </div>
  );
}

export default AboutPage;
