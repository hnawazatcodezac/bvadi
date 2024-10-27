import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import About from "../components/about";
import Testimonial from "../components/testimonial";
import Seo from "../components/seo";
import SeoSlider from "../components/seoSlider";
import Footer from "../components/footer";
import "../assets/css/home-hero.css";
import "../assets/css/home-services.css";

import heroImgOne from "../assets/images/hero-img-1.svg";
import heroImgTwo from "../assets/images/hero-img-2.svg";
import servicesImgOne from "../assets/images/services-img-1.svg";
import servicesImgTwo from "../assets/images/services-img-2.svg";
import servicesImgArrow from "../assets/images/services-img-arrow.svg";
import homeServicesIcon from "../assets/images/home-service-icon.svg";

function HomePage() {
  const { t } = useTranslation();
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (location.hash === "#home-services") {
      const servicesSection = document.getElementById("home-services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home-page">
      <Header />
      <section
        className="hero-section w-100 d-flex flex-column align-items-center justify-content-center"
        id="home"
      >
        <div className="banner-content d-flex flex-column justify-content-center align-content-center">
          <div className="hero-text d-flex align-items-center justify-content-center">
            <h1 className="hero-word">{t("home_hero_section.heading.we")}</h1>
            <div className="circular-image">
              <img
                src={heroImgOne}
                alt="Creative agency illustration"
                loading="lazy"
              />
            </div>
            <h1 className="hero-word">
              {t("home_hero_section.heading.creative")}
            </h1>
            <h1 className="hero-word hero-word-light">
              {t("home_hero_section.heading.agencies")}
            </h1>
            <div className="video-reel">
              <img src={heroImgTwo} alt="Video reel icon" loading="lazy" />
            </div>
            <p className="studio-location">{t("home_hero_section.sub_text")}</p>
          </div>
          <div className="hero-description d-flex align-items-center flex-column justify-content-center">
            <p className="agency-description">
              {t("home_hero_section.description")}
            </p>
            <Link
              onClick={scrollToTop}
              to="/contact-us"
              className="text-decoration-none"
            >
              <button
                className="cta-button d-flex align-items-center justify-content-center"
                type="button"
              >
                {t("home_hero_section.cta_btn")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <About />
      <section
        id="home-services"
        className="services-section d-flex flex-column justify-content-center"
      >
        <h2 className="services-title">{t("services_section.title")}</h2>
        <p className="services-subtitle">{t("services_section.sub_title")}</p>
        <div className="services-container">
          <div className="services-content">
            <div className="position-relative service-image-div">
              <img
                src={servicesImgOne}
                className="w-100 services-content-img"
                alt="Service illustration 1"
                loading="lazy"
              />
              <div className="overlay d-flex align-items-center justify-content-center">
                <Link onClick={scrollToTop} to="/seo" className="arrow-link">
                  <img
                    src={servicesImgArrow}
                    alt="Service arrow"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
            <div className="service-info">
              <div className="service-wrapper d-flex align-items-center justify-content-between">
                <h3 className="service-title">
                  {t("services_section.services.seo.title")}
                </h3>
                <Link to="/seo" onClick={scrollToTop}>
                  <img src={homeServicesIcon} alt="Home Services Icon" />
                </Link>
              </div>
              <p className="service-description text-start">
                {t("services_section.services.seo.description")}
              </p>
            </div>
          </div>
          <div className="services-content">
            <div className="position-relative service-image-div">
              <img
                src={servicesImgTwo}
                className="w-100 services-content-img"
                alt="Service illustration 2"
                loading="lazy"
              />
              <div className="overlay d-flex align-items-center justify-content-center">
                <Link onClick={scrollToTop} to="/web" className="arrow-link">
                  <img
                    src={servicesImgArrow}
                    alt="Service arrow"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
            <div className="service-info">
              <div className="service-wrapper d-flex align-items-center justify-content-between">
                <h3 className="service-title">
                  {t("services_section.services.web_development.title")}
                </h3>
                <Link to="/web" onClick={scrollToTop}>
                  <img src={homeServicesIcon} alt="Home Services Icon" />
                </Link>
              </div>
              <p className="service-description text-start">
                {t("services_section.services.web_development.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Seo />
      <SeoSlider />
      <Footer />
    </div>
  );
}

export default HomePage;
