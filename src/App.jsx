import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSlider from "./components/Herodiv/HeroSlider";
import ServicesHome from "./components/Services/ServicesHome";
import Slidebar from "./components/Slidebar/Slidebar";
import OrdersTrack from "./components/ordersTrack/orderstrack";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";
import Insights from "./components/Insights/Insights";
import Section from "./components/ContactSection/Section";
import WebDevelopment from "./components/pages/WebDevelopment";
import AppDevelopment from "./components/pages/app development/Appdevelopment";
import SDevelopment from "./components/pages/SDevelopment/SDevelopment";
import Uiux from "./components/pages/Uiux/Uiux";
import About from "./components/pages/about/About"
import Insight from "./components/pages/insight/Insight"

import './index.css';
import Contact from "./components/pages/contact/Contact";
import PrivacyPolicy from "./components/pages/legal/PrivacyPolicy";
import TermsOfService from "./components/pages/legal/TermsOfService";
import CookiePolicy from "./components/pages/legal/CookiePolicy";


function App() {
 

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <HeroSlider />
                <Insights />
                <ServicesHome />
                <Reviews />
                <OrdersTrack />
                <Section />
                <Footer />
              </>
            }
          />

          {/* Individual routes for each component */}
          <Route path="/hero" element={<HeroSlider />} />
          <Route path="/slidebar" element={<Slidebar />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/services" element={<ServicesHome />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/orders" element={<OrdersTrack />} />
          <Route path="/section" element={<Section />} />
          <Route path="/footer" element={<Footer />} />




          {/* Services -> API Development */}
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/AppDevelopment" element={<AppDevelopment />} />
          <Route path="/SDevelopment" element={<SDevelopment />} />
          <Route path="/Uiux" element={<Uiux />} />
          <Route path="/about" element={<About />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/WebDevelopment/Contact" element={<Contact />} />
          <Route path="/AppDevelopment/Contact" element={<Contact />} />
          <Route path="/SDevelopment/Contact" element={<Contact />} />
          <Route path="/uiux/Contact" element={<Contact />} />
          <Route path="/Insight/Contact" element={<Contact />} />
          <Route path="/about/Contact" element={<Contact />} />
          <Route path="/Contact" element={<Contact />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />






        </Routes>
      </div>
    </Router>
  );
}

export default App;
