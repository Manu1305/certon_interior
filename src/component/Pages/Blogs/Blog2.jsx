import React from 'react'
import { Link } from 'react-router-dom';

function Blog2() {
  return (
    <div>
      <div className="banner-title-area blog-single">
        <div className="container w-container"></div>
      </div>
      <div className="blog-single-wrap">
        <div className="container w-container">
          <div className="single-content-wrap">
            <div className="w-layout-grid blog-single-grid">
              <div className="blog-single-content-wrap">
                <h1 className="blog-single-title">
                  How To Choose The Best Wall Art &amp; Decor House?
                </h1>
                <img
                  src="/insidehome/livingroom/living3.jpg"
                  loading="lazy"
                  alt="Blog Single Image"
                  className="blog-single-image"
                />
                <div className="blog-meta-details">
                  <div className="blog-meta-date"></div>
                  <div className="blog-meta-category">Living Room</div>
                </div>
                <div className="w-richtext">
                  Discover our master bedroom designs, where elegance meets
                  tranquility. Immerse yourself in a sanctuary of comfort and
                  style. Soft hues, plush furnishings, and subtle lighting
                  create a calming atmosphere. Luxurious textures and thoughtful
                  details adorn every corner, offering a haven for rest and
                  relaxation. Experience unmatched sophistication and serenity
                  in your personal retreat.
                  <div className="blog-section">
                    <div className="container w-container bloggggggg">
                      <div className="section-title-wrap">
                        <h2 className="section-title center-small-space">
                          What we Design
                        </h2>
                        {/* <p className="section-title-content">
              Get updates about our latest trends and techniques used in
              <br />
              interior design project works.
            </p> */}
                      </div>
                      <div className="blog-wrap home-page-blog ">
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
                                    // to="blog1"
                                    className="blog-image-link w-inline-block"
                                  >
                                    <img
                                      src="/insidehome/livingroom/living1.jpg"
                                      loading="lazy"
                                      alt="Blog Image"
                                      className="blog-listing-image"
                                      height={280}
                                      width={350}
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
                                  {/* <h2 className="blog-title">Island Kitchen</h2> */}
                                </Link>
                                <div className="blog-item-meta">
                                  <p className="blog-date"> </p>
                                  {/* <Link
                                    style={{
                                      background: " rgb(244, 240, 236)",
                                    }}
                                    to="/blog1"
                                    className="blog-single-link w-inline-block"
                                  >
                                    <img
                                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                                      loading="lazy"
                                      alt="Readmore Arrow"
                                    />
                                  </Link> */}
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
                                    // to="blog2"
                                    className="blog-image-link w-inline-block"
                                  >
                                    <img
                                      src="/insidehome/livingroom/livn2.jpg"
                                      loading="lazy"
                                      alt="Blog Image"
                                      className="blog-listing-image"
                                      height={280}
                                      width={350}
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
                                ></a>
                                <div className="blog-item-meta">
                                  <p className="blog-date"> </p>
                                  {/* <Link
                                    style={{
                                      background: " rgb(244, 240, 236)",
                                    }}
                                    to="blog2"
                                    className="blog-single-link w-inline-block"
                                  >
                                    <img
                                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                                      loading="lazy"
                                      alt="Readmore Arrow"
                                    />
                                  </Link> */}
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
                                    // to="/blog3"
                                    className="blog-image-link w-inline-block"
                                  >
                                    <img
                                      src="/insidehome/livingroom/living3.jpg"
                                      loading="lazy"
                                      alt="Blog Image"
                                      className="blog-listing-image"
                                      height={280}
                                      width={350}
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
                                  {/* <h2 className="blog-title">
                                    Parallel Kitchen
                                  </h2> */}
                                </Link>
                                <div className="blog-item-meta">
                                  <p className="blog-date"> </p>
                                </div>
                              </div>
                            </div>
                            {/* <div
                              role="listitem"
                              className="blog-collection-item w-dyn-item w-col w-col-4"
                            >
                              <div
                                data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                                className="blog-item"
                              >
                                <div className="blog-image-wrap">
                                  <Link
                                    // to="blog4"
                                    className="blog-image-link w-inline-block"
                                  >
                                    <img
                                      src="/insidehome/kitchen_defrent_type/straight.jpg"
                                      loading="lazy"
                                      alt="Blog Image"
                                      height={280}
                                      width={350}
                                      className="blog-listing-image"
                                    />
                                  </Link>
                               
                                </div>
                                <Link
                                  //  to="blog4"
                                  className="w-inline-block"
                                >
                                  <h2 className="blog-title">
                                    Straight Kitchen
                                  </h2>
                                </Link>
                                <div className="blog-item-meta">
                                  <p className="blog-date"></p>
                            
                                </div>
                              </div>
                            </div> */}
                            {/* <div
                              role="listitem"
                              className="blog-collection-item w-dyn-item w-col w-col-4"
                            >
                              <div
                                data-w-id="b453cea5-4602-492e-48f6-a27248f1a32d"
                                className="blog-item"
                              >
                                <div className="blog-image-wrap">
                                  <Link
                                    // to="/blog5"
                                    className="blog-image-link w-inline-block"
                                  >
                                    <img
                                      src="/insidehome/kitchen_defrent_type/Ushape.jpg"
                                      loading="lazy"
                                      alt="Blog Image"
                                      height={280}
                                      className="blog-listing-image"
                                    />
                                  </Link>
                               
                                </div>
                                <Link
                                  // to="blog5"
                                  className="w-inline-block"
                                >
                                  <h2 className="blog-title">
                                    U shaped Kitchen
                                  </h2>
                                </Link>
                                <div className="blog-item-meta">
                                  <p className="blog-date"></p>
                                
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog2
