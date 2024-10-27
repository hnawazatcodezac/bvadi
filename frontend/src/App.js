import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import SeoPage from "./pages/seo";
import WebPage from "./pages/web";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "./assets/css/navbar.css";
import "./assets/css/footer.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/seo" element={<SeoPage />} />
        <Route path="/web" element={<WebPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;