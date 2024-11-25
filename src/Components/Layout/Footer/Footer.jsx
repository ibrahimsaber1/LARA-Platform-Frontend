// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import images
// import Logo from 'src/assets/images/footer/Logo.svg';
import Logo from '../../../assets/images/footer/Logo.svg';
import FacebookIcon from '../../../assets/images/footer/logos/f.png';
import YouTubeIcon from '../../../assets/images/footer/logos/Y.png';
import LinkedInIcon from '../../../assets/images/footer/logos/L.png';
import InstagramIcon from '../../../assets/images/footer/logos/I.png';
import WhatsAppIcon from '../../../assets/images/footer/logos/w.png';
import FooterBackground from '../../../assets/images/footer/background.svg';

import "./Footer.css"; 



const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=''>
    <div
    className="zedny-footer w-full bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${FooterBackground})`,
    }}>
    <div className="footer-content">
      <div className="post-landing-footer w-10">
        <div className="row">
          {/* Logo and Subscribe Section */}
          <div className="col-lg-4 mb-4">
            <div className="logo">
              <img src={Logo} alt="Zedny Logo" />
              <p className='Latest-News' >{t("Get Our Latest News")}</p>
              <div className="subscribe">
                <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                />
                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Products & Services */}
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="products">
              <div className="head">
                <p  >Products & Services</p>
              </div>
              <Link to="/about-pages/products-services/competency-management">
                <p className='fot-link'>Competency Management</p>
              </Link>
              <Link to="/about-pages/products-services/persinalized-learning">
                <p className='fot-link'>Personalized Learning</p>
              </Link>
              <Link to="/about-pages/products-services/gamification">
                <p className='fot-link'>Gamified Learning</p>
              </Link>
              <Link to="/about-pages/products-services/learning-management">
                <p className='fot-link'>Learning Management</p>
              </Link>
              <Link to="/about-pages/products-services/assessment-hub">
                <p className='fot-link'>Assessment Hub</p>
              </Link>
              <Link to="/about-pages/products-services/AI-Zedny">
                <p className='fot-link'>AI Zedny</p>
              </Link>
            </div>
          </div>

          {/* Our Solutions */}
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="our-solutions">
              <div className="head">
                <p>Our Solutions</p>
              </div>
              <Link to="/about-pages/our-solutions/for-business">
                <p className='fot-link'>For Business</p>
              </Link>
              <Link to="/about-pages/our-solutions/for-individuals">
                <p className='fot-link'>For Individuals</p>
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="company">
              <div className="head">
                <p >Company</p>
              </div>
              <Link to="/about-pages/compony/our-story">
                <p className='fot-link'> Our Story</p>
              </Link>
              <Link to="/about-pages/compony/our-method">
                <p className='fot-link'>Our Method</p>
              </Link>
              <Link to="/about-pages/compony/contact-us">
                <p className='fot-link' >Contact Us</p>
              </Link>
            </div>
          </div>



          {/* Our Policies */}
          <div className="col-lg-2 col-md-6 mb-4">
          <div className="company">

          <div className="head">
          <p className="footer-heading">Our Policies</p>
          </div>
             <Link to="/policies/academic-integrity"><p className='fot-link' >Academic Integrity Policy</p></Link>
             <Link to="/policies/attendance-policy"><p className='fot-link' >Attendance Policy For Virtual Learning</p></Link>
             <Link to="/policies/intellectual-property"><p className='fot-link' >Intellectual Property and Copyright</p></Link>
             <Link to="/policies/technical-support"><p className='fot-link' >Technical Support Policy</p></Link>
             <Link to="/policies/user-manual"><p className='fot-link' >User Manual</p></Link>
             <Link to="/policies/academic-supervision"><p className='fot-link' >Academic Supervision</p></Link>
             <Link to="/policies/staff-responsibilities"><p className='fot-link' >Staff Preparations Responsibilities</p></Link>
          </div>
        </div>
        
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="pre-landing-footer flex flex-column justify-content-end w-full">
        {/* Social Media Icons */}
        <div className="icons w-full line">
          <a
            href="https://www.facebook.com/ZednyOfficial?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 f-icon"
            
          >
            <img className="footer-icon" src={FacebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://youtube.com/@zedny-651?si=EqmAjxhbhVwzNpbD"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img className="footer-icon" src={YouTubeIcon} alt="YouTube" />
          </a>
          <a
            href="https://www.linkedin.com/company/zedny-educational-services/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img className="footer-icon" src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/zednyofficial?igsh=YWU5Y3NvM2ZlZGJx"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img className="footer-icon" src={InstagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://wa.me/message/F6VUIMYW4CNVJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <img className="footer-icon" src={WhatsAppIcon} alt="WhatsApp" />
          </a>
        </div>

        {/* Copyright */}
        <div className="copy-right flex justify-content-center w-full">
          <p  >
            Copyright © 2020 Zedny Educational Services S.A.E - All Rights
            Reserved
          </p>
        </div>

        {/* Legal Links */}
        <div className="pages">
          <Link to="/about-pages/legal-stuff/terms-of-service">
            <p className="terms-of-service lol">Terms of Service</p>
          </Link>
          <Link to="/about-pages/legal-stuff/manage-privacy">
            <p className="manage-privacy lol">Manage Privacy</p>
          </Link>
          <Link to="/about-pages/legal-stuff/manage-cookies">
            <p className="manage-cookies">Manage Cookies</p>

          </Link>
        </div>
      </div>
    </div>
  </div>
  </footer>
  );
};

export default Footer;