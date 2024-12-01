import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import images
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
    <footer>
      <div
        className="zedny-footer w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${FooterBackground})`,
        }}
      >
        <div className="footer-content">
          <div className="post-landing-footer w-10">
            <div className="row">
              {/* Logo and Subscribe Section */}
              <div className="col-lg-4 mb-4">
                <div className="logo">
                  <img src={Logo} alt="Zedny Logo" />
                  <p className='Latest-News'>{t("shared.latest_news")}</p>
                  <div className="subscribe">
                    <input
                      className="input"
                      type="email"
                      placeholder={t("shared.email_address")}
                    />
                    <button className="subscribe-button">{t("shared.subscribe")}</button>
                  </div>
                </div>
              </div>

              {/* Products & Services */}
              <div className="col-lg-2 col-md-6 mb-4">
                <div className="products">
                  <div className="head">
                    <p>{t("shared.products_services")}</p>
                  </div>
                  <Link to="https://zedny.com/products-services/competency-management">
                    <p className='fot-link'>{t("shared.competency_management")}</p>
                  </Link>
                  <Link to="https://zedny.com/products-services/persinalized-learning">
                    <p className='fot-link'>{t("shared.personalized_learning")}</p>
                  </Link>
                  <Link to="https://zedny.com/products-services/gamification">
                    <p className='fot-link'>{t("shared.gamified_learning")}</p>
                  </Link>
                  <Link to="https://zedny.com/products-services/learning-management">
                    <p className='fot-link'>{t("shared.learning_management")}</p>
                  </Link>
                  <Link to="https://zedny.com/products-services/assessment-hub">
                    <p className='fot-link'>{t("shared.assessment_hub")}</p>
                  </Link>
                  <Link to="https://zedny.com/products-services/AI-Zedny">
                    <p className='fot-link'>{t("shared.aI_zedny")}</p>
                  </Link>
                </div>
              </div>

              {/* Our Solutions */}
              <div className="col-lg-2 col-md-6 mb-4">
                <div className="our-solutions">
                  <div className="head">
                    <p>{t("shared.our_solutions")}</p>
                  </div>
                  <Link to="https://zedny.com/our-solutions/For-Business">
                    <p className='fot-link'>{t("shared.for_business")}</p>
                  </Link>
                  <Link to="https://zedny.com/our-solutions/for-individuals">
                    <p className='fot-link'>{t("shared.for_individuals")}</p>
                  </Link>
                </div>
              </div>

              {/* Company */}
              <div className="col-lg-2 col-md-6 mb-4">
                <div className="company">
                  <div className="head">
                    <p>{t("shared.company")}</p>
                  </div>
                  <Link to="https://zedny.com/company/our-story">
                    <p className='fot-link'>{t("shared.our_story")}</p>
                  </Link>
                  <Link to="https://zedny.com/company/our-method">
                    <p className='fot-link'>{t("shared.our_method")}</p>
                  </Link>
                  <Link to="https://zedny.com/company/contact-us">
                    <p className='fot-link'>{t("shared.contact_us")}</p>
                  </Link>
                  <Link to="https://zedny.com/company/our-team">
                    <p className='fot-link'>{t("shared.our_team")}</p>
                  </Link>
                </div>
              </div>

              {/* Our Policies */}
              <div className="col-lg-2 col-md-6 mb-4">
                <div className="company">
                  <div className="head">
                    <p className="footer-heading">{t("shared.our_policies")}</p>
                  </div>
                  <Link to="https://zedny.com/our-policies/academic-integrity-policy">
                    <p className='fot-link'>{t("shared.academic_integrity")}</p>
                  </Link>
                  <Link to="https://zedny.com/our-policies/attendance-policyfor-virtual-learning">
                    <p className='fot-link'>{t("shared.attendance_policy")}</p>
                  </Link>
                  <Link to="https://zedny.com/our-policies/intellectual-property-copyright">
                    <p className='fot-link'>{t("shared.intellectual_property")}</p>
                  </Link>
                  <Link to="https://zedny.com/our-policies/technical-support-policy">
                    <p className='fot-link'>{t("shared.technical_support")}</p>
                  </Link>
                  <Link to="https://zedny.com/our-policies/user-manual">
                    <p className='fot-link'>{t("shared.user_manual")}</p>
                  </Link>
                  <Link to="https://zedny.com/our-policies/academic-supervision">
                    <p className='fot-link'>{t("shared.academic_supervision")}</p>
                  </Link>
                  <Link to="https://zedny.com/our-policies/staff-preparations-responsibilities">
                    <p className='fot-link'>{t("shared.staff_responsibilities")}</p>
                  </Link>
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
                <p>
                   Copyright © Zedny Educational Services S.A.E - All Rights Reserved
                </p>
              </div>

              {/* Legal Links */}
              <div className="pages">
                <Link to="https://zedny.com/our-policies/terms-of-service">
                  <p className="terms-of-service footer-legal">{t("shared.terms_service")}</p>
                </Link>
                <Link to="https://zedny.com/our-policies/manage-privacy">
                  <p className="manage-privacy footer-legal">{t("shared.manage_privacy")}</p>
                </Link>
                <Link to="https://zedny.com/our-policies/manage-cookies">
                  <p className="manage-cookies">{t("shared.manage_cookies")}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
