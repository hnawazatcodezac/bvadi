import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import Footer from "../components/footer";
import SeoSlider from "../components/seoSlider";
import Seo from "../components/seo";
import "../assets/css/blog.css";

import blogImg from "../assets/images/blog-img.svg";

function BlogPage() {
  const { t } = useTranslation();
  const categories = [
    `${t("blog.category_filter.categories.all")}`,
    `${t("blog.category_filter.categories.website_development")}`,
    `${t("blog.category_filter.categories.shopify_websites")}`,
    `${t("blog.category_filter.categories.e_commerce_store")}`,
    `${t("blog.category_filter.categories.seo")}`,
    `${t("blog.category_filter.categories.keyword_research")}`,
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const blogData = [
    {
      date: `${t("blog.posts.post_1.date")}`,
      time: `${t("blog.posts.post_1.time")}`,
      title: `${t("blog.posts.post_1.title")}`,
      description: `${t("blog.posts.post_1.description")}`,
      image: blogImg,
      category: `${t("blog.posts.post_1.category")}`,
    },
    {
      date: `${t("blog.posts.post_2.date")}`,
      time: `${t("blog.posts.post_2.time")}`,
      title: `${t("blog.posts.post_2.title")}`,
      description: `${t("blog.posts.post_2.description")}`,
      image: blogImg,
      category: `${t("blog.posts.post_2.category")}`,
    },
    {
      date: `${t("blog.posts.post_3.date")}`,
      time: `${t("blog.posts.post_3.time")}`,
      title: `${t("blog.posts.post_3.title")}`,
      description: `${t("blog.posts.post_3.description")}`,
      image: blogImg,
      category: `${t("blog.posts.post_3.category")}`,
    },
    {
      date: `${t("blog.posts.post_4.date")}`,
      time: `${t("blog.posts.post_4.time")}`,
      title: `${t("blog.posts.post_4.title")}`,
      description: `${t("blog.posts.post_4.description")}`,
      image: blogImg,
      category: `${t("blog.posts.post_4.category")}`,
    },
    {
      date: `${t("blog.posts.post_5.date")}`,
      time: `${t("blog.posts.post_5.time")}`,
      title: `${t("blog.posts.post_5.title")}`,
      description: `${t("blog.posts.post_5.description")}`,
      image: blogImg,
      category: `${t("blog.posts.post_5.category")}`,
    },
    {
      date: `${t("blog.posts.post_6.date")}`,
      time: `${t("blog.posts.post_6.time")}`,
      title: `${t("blog.posts.post_6.title")}`,
      description: `${t("blog.posts.post_6.description")}`,
      image: blogImg,
      category: `${t("blog.posts.post_6.category")}`,
    },
  ];

  const filterBlogs = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs =
    selectedCategory === `${t("blog.category_filter.categories.all")}`
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="blog-page">
      <Header />
      <section className="blog" id="blog">
        <div className="blog-header">
          <h2>{t("blog.header.title")}</h2>
          <p>{t("blog.header.description")}</p>
        </div>
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active-button" : ""
              }`}
              onClick={() => filterBlogs(category)}
            >
              {category}
            </button>
          ))}
          <button className="newest-btn">
            <span>{t("blog.category_filter.newest")} </span>
            <FaAngleDown className="language-icon" />
          </button>
        </div>
        <div className="row blog-container" id="blog-container">
          {filteredBlogs.map((blog, index) => (
            <div className="card border-0" key={index}>
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body border-top-0">
                <p className="card-text text-muted">
                  {blog.date} - {blog.time}
                </p>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Seo variant="elevate" />
      <SeoSlider />
      <Footer />
    </div>
  );
}

export default BlogPage;
