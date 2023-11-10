import React from "react";
import { Link } from "react-router-dom";
import ContactUsSmall from "../pages_iside_Page/takstoUs/ContactUsSmall";
import Jello from "react-reveal/Jello";
import Zoom from "react-reveal/Zoom";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content-wrap">
          <div className="container w-container">
            <div style={{display:'flex', flexDirection:'row'}}>
              <div className="hero-content-area">
                <h1 className="hero-wrap-tit">
                  Creating Spaces Where Memories are Made
                </h1>
                <p className="hero-wrap-description">
                  Combining beauty with functionality <br /> for spaces that
                  work for you
                </p>
                <Link to="contactus" className="button banner-button w-button">
                  Get Started
                </Link>
              </div>
             
              <div className="smallSubmitform" >
                 <Zoom>
                <ContactUsSmall/>

                 </Zoom>
              </div>

              
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <div className="service-section">
        <div className="container w-container">
          <div className="service-content-wrap">
            <div className="w-layout-grid service-grid-wrap">
              <div className="service-item">
                <h2 className="service-title">High-Quality Materials</h2>
                <p className="service-content">
                  We use only the quality materials to ensure your design stands
                  the test of time.
                </p>
                <a href="#" className="simple-link w-inline-block">
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Icon"
                    className="simple-link-icon"
                  />
                </a>
              </div>
              <div className="service-item">
                <h2 className="service-title">Budget Management</h2>
                <p className="service-content">
                  A smart approach to ensure your dream design fits within your
                  budget.
                </p>
                <a
                  href="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Icon"
                    className="simple-link-icon"
                  />
                </a>
              </div>
              <div className="service-item">
                <h2 className="service-title">Personalized Service</h2>
                <p className="service-content">
                  We believe in your distinctive vision, and we're here to make
                  it a reality.
                </p>
                <a
                  href="services-single.html"
                  className="simple-link w-inline-block"
                >
                  <p className="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Icon"
                    className="simple-link-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-section">
        <div className="container w-container">
          <div className="w-layout-grid intro-grid-wrap">
            <div className="intro-content-wrap">
              <h2 className="intro-section-title">
                Where Style and Comfort Meet
              </h2>
              <p className="intro-content">
                Your home is your canvas, and we are the artists that bring your
                vision to life. Our interior design services are all about
                elevating your living space to new heights of elegance and
                perfect style. We understand that every room tells a unique
                story, and we craft these stories with an expert eye for detail.
                From careful chosen color palettes to the placement of each
                piece of furniture, we ensure that your space reflects your
                personality.
              </p>
              <div className="intro-quick-link-wrap">
                <div className="intro-icon-wrap">
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b38c59b20f18156d7e10d_intro-call.svg"
                    loading="lazy"
                    alt="Call Icon"
                  />
                </div>
                <div className="intro-call-wrap">
                  <a href="tel:012345678" className="call-link">
                    (+91) 9538111038
                  </a>
                  <p>Call Us Anytime</p>
                </div>
              </div>
              <Link to="contactus" className="button w-button">
                Get Free Estimate
              </Link>
            </div>
            <img
              src="insidehome/Image1.png"
              loading="lazy"
              alt="Intro Image"
              className="right-radius-image"
            />
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="container w-container">
          <div className="section-title-wrap">
            <h2 className="section-title center-small-space">What we Design</h2>
            {/* <p className="section-title-content">
              Get updates about our latest trends and techniques used in
              <br />
              interior design project works.
            </p> */}
          </div>
          <div className="blog-wrap home-page-blog">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to="blog1"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="/insidehome/kitchen1.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                          height={280}
                        />
                      </Link>
                      {/* <Link
                        to="blog1"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Kitchen Design</div>
                      </Link> */}
                    </div>
                    <Link to="blog1" className="w-inline-block">
                      <h2 className="blog-title">Kitchen designs</h2>
                    </Link>
                    <div className="blog-item-meta">
                      <p className="blog-date"> </p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                        to="/blog1"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to="blog2"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="/insidehome/Living room 1.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                        />
                      </Link>
                      {/* <Link
                        to="/blog2"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Living Room</div>
                      </Link> */}
                    </div>
                    <a
                      href="post/how-to-choose-the-best-wall-art-decor-house.html"
                      className="w-inline-block"
                    >
                      <h2 className="blog-title">Living Room</h2>
                    </a>
                    <div className="blog-item-meta">
                      <p className="blog-date"> </p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                        to="blog2"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to="/blog3"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="/insidehome/masterbedroom.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                          height={280}
                        />
                      </Link>
                      {/* <Link
                        to="/blog3"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Master Bedroom</div>
                      </Link> */}
                    </div>
                    <Link to="blog3" className="w-inline-block">
                      <h2 className="blog-title">Master Bedroom</h2>
                    </Link>
                    <div className="blog-item-meta">
                      <p className="blog-date"> </p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                        to="/blog3"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to="blog4"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="/insidehome/Kids bedroom 1.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          height={280}
                          className="blog-listing-image"
                        />
                      </Link>
                      {/* <Link
                        to="/blog4"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Kids bedroom</div>
                      </Link> */}
                    </div>
                    <Link to="blog4" className="w-inline-block">
                      <h2 className="blog-title">Kids bedroom</h2>
                    </Link>
                    <div className="blog-item-meta">
                      <p className="blog-date"></p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                        to="/blog4"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to="/blog5"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="/insidehome/diningarea.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          height={280}
                          className="blog-listing-image"
                        />
                      </Link>
                      {/* <Link
                        to="/blog5"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Dining Area</div>
                      </Link> */}
                    </div>
                    <Link to="blog5" className="w-inline-block">
                      <h2 className="blog-title">Dining Area</h2>
                    </Link>
                    <div className="blog-item-meta">
                      <p className="blog-date"></p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                        to="blog5"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="blog-collection-item w-dyn-item w-col w-col-4"
                >
                  <div
                    data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                    className="blog-item"
                  >
                    <div className="blog-image-wrap">
                      <Link
                        to="blog6"
                        className="blog-image-link w-inline-block"
                      >
                        <img
                          src="/insidehome/balcony.jpg"
                          loading="lazy"
                          alt="Blog Image"
                          className="blog-listing-image"
                          height={280}
                          width={300}
                        />
                      </Link>
                      {/* <Link
                        to="blog6"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Balcony</div>
                      </Link> */}
                    </div>
                    <Link to="/blog6" className="w-inline-block">
                      <h2 className="blog-title">Balcony</h2>
                    </Link>
                    <div className="blog-item-meta">
                      <p className="blog-date"></p>
                      <Link
                        style={{ background: " rgb(244, 240, 236)" }}
                        to="blog6"
                        className="blog-single-link w-inline-block"
                      >
                        <img
                          src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                          loading="lazy"
                          alt="Readmore Arrow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="clients-section">
        <div className="container w-container">
          <div className="w-layout-grid client-gird-wrap">
            <div
              id="w-node-cc80d0cd-42e4-2620-442a-514667d49987-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50dbaf38fe2e294e77c4_client-logo-1.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
            <div
              id="w-node-fad25dac-b525-0be8-6116-100ca22118f1-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db6a5ad2b2e8220095_client-logo-2.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
            <div
              id="w-node-_2e6c85e4-0f13-3f54-32df-ab30b216b927-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db3b3a6aece9a31f5e_client-logo-3.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
            <div
              id="w-node-_6b7d40ec-6f15-dc63-fcf5-11633ff702f4-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50db1409585a01100743_client-logo-4.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
            <div
              id="w-node-be48fccd-aa9d-2b76-d979-45623f925cd5-b3106505"
              className="client-image-wrap"
            >
              <img
                src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b50dbc57d3e3e8b8ed401_client-logo-5.svg"
                loading="lazy"
                alt="Client Logo"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="project-listing-wrap home-page-projects">
        <div className="container w-container">
          <div className="section-title-wrap">
            <h2 className="section-title center-small-space">
              Recent Projects
            </h2>
            <p className="section-title-content">
              With tools to make every part of your process more human and a
              support team <br />
              excited to help you, getting started with us never been easier.
            </p>
          </div>
          <div className="project-items home-page-projects">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                <div role="listitem" className="w-dyn-item w-col w-col-6">
                  <div className="project-item">
                    <Link
                      // to="our_projects"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="/insidehome/COmpltedProjects/completed1.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="/insidehome/COmpltedProjects/completed1.jpg 500w, /insidehome/COmpltedProjects/completed1.jpg 580w"
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          // href="our_projects"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">Master Bedroom</h2>
                        </Link>
                        <Link
                          // to="/our_projects"
                          className="project-category-link"
                        ></Link>
                      </div>
                      {/* <div className="project-readmore">
                        <Link
                          to="our_projects"
                          className="project-single-link w-inline-block"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                            loading="lazy"
                            alt="Readmore Arrow"
                          />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item w-col w-col-6">
                  <div className="project-item">
                    <Link
                      // to="our_projects"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd05b4f9a181178c70b9_project-image-2.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="/insidehome/COmpltedProjects/completed2.jpg 500w, /insidehome/COmpltedProjects/completed2.jpg 580w"
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="/our_projects"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">Living Area TV unit</h2>
                        </Link>
                        <Link
                          to="our_projects"
                          className="project-category-link"
                        ></Link>
                      </div>
                      {/* <div className="project-readmore">
                        <Link
                          to="our_projects"
                          className="project-single-link w-inline-block"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                            loading="lazy"
                            alt="Readmore Arrow"
                          />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item w-col w-col-6">
                  <div className="project-item">
                    <Link
                      to="/our_projects"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd10e8f59f8f8287319f_project-image-3.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="/insidehome/COmpltedProjects/completed3.jpg 500w, /insidehome/COmpltedProjects/completed3.jpg 580w"
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          // to="/our_projects"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">Kitchen</h2>
                        </Link>
                        <Link
                          to="our_projects"
                          className="project-category-link"
                        ></Link>
                      </div>
                      {/* <div className="project-readmore">
                        <Link
                          to="our_projects"
                          className="project-single-link w-inline-block"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                            loading="lazy"
                            alt="Readmore Arrow"
                          />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item w-col w-col-6">
                  <div className="project-item">
                    <Link
                      // to="/our_projects"
                      className="project-link-block w-inline-block"
                    >
                      <img
                        src="../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1dd203305d3906782aa29_project-image-4.jpg"
                        loading="lazy"
                        alt="Project Image"
                        sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 1279px) 46vw, 590px"
                        srcset="/public/insidehome/COmpltedProjects/complted4.jpg 500w, /insidehome/COmpltedProjects/complted4.jpg 580w"
                        className="project-listing-image"
                      />
                    </Link>
                    <div className="project-listing-details">
                      <div className="project-title-wrap">
                        <Link
                          to="/our_projects"
                          className="project-title-link w-inline-block"
                        >
                          <h2 className="project-title">Guest Bedroom</h2>
                        </Link>
                        {/* <Link to="/our_projects" className="project-category-link">
                          Scandinavian
                        </Link> */}
                      </div>
                      {/* <div className="project-readmore">
                        <Link
                          to="/our_projects"
                          className="project-single-link w-inline-block"
                        >
                          <img
                            src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                            loading="lazy"
                            alt="Readmore Arrow"
                          />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-section">
        <div className="container w-container">
          <div className="w-layout-grid counter-grid-wrap">
            <div className="counter-item">
              <h3 className="count-number">4</h3>
              <p className="counter-title">Years Of Experinece</p>
            </div>
            <div className="counter-item">
              <h3 className="count-number">150</h3>
              <p className="counter-title">Success Project</p>
            </div>
            <div className="counter-item">
              <h3 className="count-number">12</h3>
              <p className="counter-title">Active Project</p>
            </div>
            <div className="counter-item counter-last-child">
              <h3 className="count-number">102</h3>
              <p className="counter-title">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-section">
        <div className="container w-container">
          <div className="testimonial-content-wrap">
            <h2 className="section-title text-center">
              What People Think
              <br /> About Us
            </h2>
            <div className="w-layout-grid testimonial-grid">
              <div className="testimonial-item">
                <div className="testimonial-detail">
                  <div className="testimonial-image-wrap">
                    <img
                      width={80}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      // src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a5d70ad9b5876274e17016_client-image-1.jpg"
                      loading="lazy"
                      alt="Testimonial Image"
                      className="testimonial-client"
                    />
                    <div className="client-detail">
                      <h3 className="client-name">Sandhya N</h3>
                      <div className="client-location">
                        Whitefield,Bengaluru
                      </div>
                    </div>
                  </div>
                  <p className="testimonial-content">
                    They are so amazing! The designs were just gorgeous! I was
                    looking for something that was more than "okay". I wanted
                    beautiful, and they delivered. My designer helped me design
                    two awesome kids rooms, which are also somehow elevated and
                    exciting at the same time - not everyone has the ability to
                    do that! They are beautiful havens that my kids will love
                    for years to come. Thank you!.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-detail">
                  <div className="testimonial-image-wrap">
                    <img
                      width={80}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      loading="lazy"
                      alt="Testimonial Image"
                      className="testimonial-client"
                    />
                    <div className="client-detail">
                      <h3 className="client-name">Somchara reddy</h3>
                      <div className="client-location">Verthur, Bengaluru</div>
                    </div>
                  </div>
                  <p className="testimonial-content">
                    We contacted Certon for the interiors of our 3bhk..We liked
                    the initial response from the Sales team and their
                    spontaneity.Where, every other studio, was charging us to
                    even listen to our requirements, Certon, not only listened
                    to us patiently but also, helped us putting our ideas
                    together and refining it to receive an accurate
                    estimate.This approach made it easy for us to have a clear
                    idea of budget and motivated us to work with them.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-detail">
                  <div className="testimonial-image-wrap">
                    <img
                      width={80}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      loading="lazy"
                      alt="Testimonial Image"
                      className="testimonial-client"
                    />
                    <div className="client-detail">
                      <h3 className="client-name">Nilesh Kapoor</h3>
                      <div className="client-location">
                        Electronic city, Bengaluru
                      </div>
                    </div>
                  </div>
                  <p className="testimonial-content">
                    One of the best interior design firms. Truly creative and
                    professional in work. On time services with perfection. And
                    the best part is that they give you affordable
                    prices for the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action-section">
        <div className="container w-container">
          <div className="call-to-action-wrap">
            <h2 className="call-to-action-title">
              Wanna join Certon interior?
            </h2>
            <p className="call-to-action-content">
              Contact Us &amp; Get a Free Consultation
            </p>
            <Link
              to="contactus"
              className="button-colored call-to-action-button w-button"
            >
              Connect With us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
