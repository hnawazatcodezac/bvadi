import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.svg";

function Header({ alert }) {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const savedLanguage = localStorage.getItem("language");

  const languages = [
    { code: "en", name: "English (en)" },
    { code: "tr", name: "Türkçe (tr)" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(
    savedLanguage ? savedLanguage : languages[0].code
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage, i18n]);

  const openDropDown = () => {
    setIsDropdownOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeDropDown = () => {
    setIsDropdownOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    i18n.changeLanguage(languageCode);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="header-container d-flex justify-content-between w-100">
      {alert?.success && (
        <div className="success form-error">{alert.success}</div>
      )}
      {alert?.error && <div className="error form-error">{alert.error}</div>}
      <div className="navbar-logo">
        <img loading="lazy" src={logo} className="logo" alt="Company logo" />
      </div>
      <nav className="nav-menu d-flex align-items-center fw-medium justify-content-start">
        <NavLink
          to="/"
          onClick={scrollToTop}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
          end
        >
          {t("header.menu.home")}
        </NavLink>
        <NavLink
          to="/about"
          onClick={scrollToTop}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          {t("header.menu.about")}
        </NavLink>
        <NavLink
          to="/seo"
          onClick={scrollToTop}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          {t("header.menu.seo")}
        </NavLink>
        <NavLink
          to="/web"
          onClick={scrollToTop}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          {t("header.menu.web")}
        </NavLink>
        <NavLink
          to="/blog"
          onClick={scrollToTop}
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
          }
        >
          {t("header.menu.blogs")}
        </NavLink>
      </nav>
      <div className="right-section d-flex">
        <div className="language-selector d-flex align-content-center fw-medium">
          <span
            className="language-text"
            onClick={toggleLanguageDropdown}
            style={{ cursor: "pointer" }}
          >
            {languages.find((lang) => lang.code === selectedLanguage).name}{" "}
            <FaAngleDown className="language-icon" />
          </span>
          {isLanguageDropdownOpen && (
            <div className="language-dropdown">
              {isLanguageDropdownOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="language-option"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <Link
          onClick={scrollToTop}
          to="/contact-us"
          className="text-text-decoration-none"
        >
          <button className="cta-button">{t("header.get_in_touch")}</button>
        </Link>
        <button className="menu-toggle" onClick={openDropDown}>
          <HiBars3 />
        </button>
      </div>
      <div
        className={`dropdown ${isDropdownOpen ? "open" : ""}`}
        id="dropdown-menu"
      >
        <div className="close-btn" onClick={closeDropDown}>
          &times;
        </div>
        <div className="dropdown-content">
          <NavLink
            to="/"
            onClick={() => {
              scrollToTop();
              closeDropDown();
            }}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {t("header.menu.home")}
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => {
              scrollToTop();
              closeDropDown();
            }}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {t("header.menu.about")}
          </NavLink>
          <NavLink
            to="/seo"
            onClick={() => {
              scrollToTop();
              closeDropDown();
            }}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {t("header.menu.seo")}
          </NavLink>
          <NavLink
            to="/web"
            onClick={() => {
              scrollToTop();
              closeDropDown();
            }}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {t("header.menu.web")}
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => {
              scrollToTop();
              closeDropDown();
            }}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            {t("header.menu.blogs")}
          </NavLink>
        </div>
        <div className="btn-div">
          <Link
            onClick={scrollToTop}
            to="/contact-us"
            className="text-text-decoration-none"
          >
            <button className="cta-button">{t("header.get_in_touch")}</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
