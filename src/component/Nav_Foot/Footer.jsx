import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer-section wf-section">
        <div className="container w-container">
          <div className="w-layout-grid footer-grid-wrap">
            <div className="footer-widget-wrap">
              <Link to="/" className="w-inline-block">
                <img
                  src="logoInterior.png"
                  loading="lazy"
                  alt=""
                  className="footer-logo"
                />
              </Link>
              <p className="footer-intro-content">
                We are the leading interior design firm in the India.
              </p>
              <div className="footer-social-wrap">
                <Link
                  to="https://www.facebook.com/profile.php?id=61552339117422&mibextid=ZbWKwL"
                  className="footer-social-link first-child w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </Link>
                <Link to="#0" className="footer-social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.linkedin.com/"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad6919776715d6a83fa_instagram-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="footer-widget-wrap">
              <h2 className="footer-widget-title">Pages</h2>
              <div className="footer-menu-links-wrap">
                <Link to="aboutus" className="footer-link">
                  About Us
                </Link>
                <Link to="services" className="footer-link">
                  Services
                </Link>
                {/* <Link to="licenses.html" className="footer-link">
                  Blog
                </Link>
                <Link to="changelog.html" className="footer-link">
                  Our Projects
                </Link> */}
                {/* <Link to="404.html" className="footer-link">
                  404
                </Link> */}
              </div>
            </div>
            <div className="footer-widget-wrap">
              <h2 className="footer-widget-title">Explore</h2>
              <div className="footer-menu-links-wrap">
                <Link to="our_projects" className="footer-link">
                  Our Projects
                </Link>
                {/* <Link to="blog.html" className="footer-link">
                  Recent Blog
                </Link>
                <Link to="pricing-plan.html" className="footer-link">
                  Pricing Plan
                </Link>
                <Link to="our-projects.html" className="footer-link">
                  Our Projects
                </Link> */}
                <Link to="contactus" className="footer-link">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="footer-widget-wrap footer-widget-four">
              <h2 className="footer-widget-title">Contact</h2>
              <div className="footer-address-wrap">
                <p className="footer-address">
                  Plot No: 128-P2, Ground Floor, EPIP Zone Whitefield Rd, near
                  Ginger Hotel, Whitefield, EPIP Zone, Bengaluru, Karnataka
                  560066
                </p>
                <Link to="mailto:contact@interno.com" className="footer-link">
                  info@certoninterior.com
                </Link>
                <Link to="tel:(123)456-7890" className="footer-link">
                  (+91) 9538111038
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="copyright-content">
            Copyright © 2023 Certoninterior | All Right Reserved
            <Link to="https://certontech.com"> Certon</Link>
            <Link to="https://certontech.com">Technology</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
