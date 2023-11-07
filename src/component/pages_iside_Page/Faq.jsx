import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "./Blog_question_answer/Accordation";
function Faq() {
  const iconStyle = {
    WebkitTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
    MozTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
    msTransform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
    transform:
      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
  };
  const [height, setHeight] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeHeight = () => {
    setHeight(!height);
  };
  return (
    <div className="header-section">
      <body>
        <div className="banner-title-area faq-page wf-section">
          <div className="container w-container">
            <div className="banner-content-wrap">
              <h1 className="banner-title">FAQ</h1>
              <div className="breadcrumb-wrap">
                <Link to="/" className="breadcrumb-link">
                  Home
                </Link>
                <div className="breadcrumb-separator">/</div>
                <div className="breadcrumb-current-page">FAQ</div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-section wf-section">
          <div className="container w-container">
            <div className="faq-content-wrap">
              <div className="w-layout-grid faq-grid">
                <div className="faq-accordion-wrap">
                  <div className="faq-accordion-content">
                    <h2 className="section-title">Service Related Questions</h2>

                    <Accordion />
                  </div>
                </div>
                <img
                  src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c8cdc9cec0161fe8d9_faq-image-2.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 92vw, (max-width: 1279px) 94vw, 1200px"
                  srcset="
                https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c8cdc9cec0161fe8d9_faq-image-2-p-500.jpeg 500w,
                https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c8cdc9cec0161fe8d9_faq-image-2.jpg        555w
              "
                  alt="FAQ Image"
                  className="faq-image"
                />
              </div>
              <div className="w-layout-grid faq-grid toggle-grid">
                <div
                  id="w-node-_13574361-17a9-36cd-94b7-b0c7b9d0cdec-6ec78083"
                  className="faq-accordion-wrap"
                >
                  <div className="faq-accordion-content">
                    <h2 className="section-title">Project Related Questions</h2>

                    <Accordion />
                  </div>
                </div>
                <img
                  src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c885db57eb2ccdb983_faq-image-1.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 92vw, (max-width: 1279px) 94vw, 1200px"
                  srcset="
                https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c885db57eb2ccdb983_faq-image-1-p-500.jpeg 500w,
                https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5f2c885db57eb2ccdb983_faq-image-1.jpg        555w
              "
                  alt="FAQ Image"
                  className="faq-image"
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Faq;
