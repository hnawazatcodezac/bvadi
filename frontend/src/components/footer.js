import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../assets/images/logo.svg";
import footerStar from "../assets/images/footer-star.svg";
import footerImgOne from "../assets/images/footer-img-1.svg";
import footerImgTwo from "../assets/images/footer-img-2.svg";
import footerInstaIcon from "../assets/images/footer-insta-icon.svg";
import footerYoutubeIcon from "../assets/images/footer-youtube-icon.svg";
import footerFacebookIcon from "../assets/images/footer-facebook-icon.svg";
import footerTwitterIcon from "../assets/images/footer-twitter-icon.svg";

function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer w-100">
      <div className="footer-content">
        <div className="footer-left-main-div">
          <div className="footer-info">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <p className="footer-description">{t("footer.description")}</p>
            <img
              src={footerImgOne}
              alt="Social Media Icons"
              className="footer-social"
            />
            <div className="footer-rating">
              <div className="trustpilot-rating d-flex align-items-center gap-2">
                <img src={footerStar} alt="star" />
                {t("footer.trustpilot")}
              </div>
              <img
                src={footerImgTwo}
                alt="Star Rating"
                className="rating-stars"
              />
              <p className="rating-score">{t("footer.rating")}</p>
            </div>
          </div>
          <hr />
          <p className="footer-copyright">{t("footer.copyright")}</p>
        </div>
        <div className="footer-links">
          <nav className="footer-column">
            <Link onClick={scrollToTop} to="/">
              {t("footer.menu.home")}
            </Link>
            <Link onClick={scrollToTop} to="/about">
              {t("footer.menu.about")}
            </Link>
            <Link onClick={scrollToTop} to="/seo">
              {t("footer.menu.seo")}
            </Link>
            <Link onClick={scrollToTop} to="/web">
              {t("footer.menu.web")}
            </Link>
            <Link onClick={scrollToTop} to="/blog">
              {t("footer.menu.blogs")}
            </Link>
          </nav>
          <nav className="footer-column footer-column-2">
            <Link to="#">{t("footer.menu.integrations")}</Link>
            <Link to="#">{t("footer.menu.careers")}</Link>
            <Link to="#">{t("footer.menu.privacy_policy")}</Link>
            <Link to="#">{t("footer.menu.terms")}</Link>
            <Link to="#">{t("footer.menu.cookie_policy")}</Link>
          </nav>
        </div>
        <div className="footer-right">
          <div className="footer-right-main-div">
            <h2 className="contact-title">{t("footer.contact.title")}</h2>
            <div className="contact-info">
              <div className="contact">
                <a href="tel:+10911182716" className="contact-phone">
                  {t("footer.contact.phone")}
                </a>
                <a href="mailto:info@bulutvadi.com" className="contact-email">
                  {t("footer.contact.email")}
                </a>
              </div>
              <div className="address">
                <span className="footer-right-break-line">
                  <br />
                  <br />
                  <br />
                </span>
                {t("footer.contact.location.city")}
                <span className="footer-right-break-line">
                  <br />
                </span>
                {t("footer.contact.location.country")}
              </div>
            </div>
          </div>
          <div className="social-media-images d-flex align-items-center justify-content-start gap-lg-3 gap-sm-2 gap-1">
            <img
              src={footerInstaIcon}
              alt="footer insta icon"
              className="contact-logo"
            />
            <img
              src={footerYoutubeIcon}
              alt="footer youtube icon"
              className="contact-logo"
            />
            <img
              src={footerFacebookIcon}
              alt="footer facebook icon"
              className="contact-logo"
            />
            <img
              src={footerTwitterIcon}
              alt="footer twitter icon"
              className="contact-logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
