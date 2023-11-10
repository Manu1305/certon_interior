import React from "react";
import { Link } from "react-router-dom";
function Blog4() {
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
                <h1 className="blog-single-title">Kids Bedroom</h1>
                <img
                  src="/insidehome/Kids bedroom 1.jpg"
                  loading="lazy"
                  alt="Blog Single Image"
                  className="blog-single-image"
                />
                <div className="blog-meta-details">
                  <div className="blog-meta-date"></div>
                  <div className="blog-meta-category"></div>
                </div>
                <div className="w-richtext">
                  <p>
                    Transform your child's bedroom into a whimsical wonderland
                    where dreams take flight. Our kids' bedrooms blend vibrant
                    colors, playful themes, and functional designs, fostering
                    creativity and comfort. From cozy beds to imaginative
                    storage solutions, every element is crafted to inspire,
                    ensuring a space where laughter, learning, and
                    imagination flourish.
                  </p>
                </div>
              </div>
              {/* <div className="blog-single-sidebar">
                <div className="sidebar-widget first-widget">
                  <h2 className="widget-title">Recent Blogs</h2>
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div
                        role="listitem"
                        className="collection-item-sidebar w-dyn-item"
                      >
                        <a
                          href="residential-interior-designer-in-new-york-usa.html"
                          className="w-inline-block"
                        >
                          <h3 className="sidebar-blog-title">
                            Residential Interior Designer In New York, USA
                          </h3>
                        </a>
                        <div className="sidebar-blog-date">
                          December 1, 2021
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="collection-item-sidebar w-dyn-item"
                      >
                        <a
                          href="how-to-choose-the-best-wall-art-decor-house.html"
                          className="w-inline-block"
                        >
                          <h3 className="sidebar-blog-title">
                            How To Choose The Best Wall Art &amp; Decor House?
                          </h3>
                        </a>
                        <div className="sidebar-blog-date">
                          December 1, 2021
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="collection-item-sidebar w-dyn-item"
                      >
                        <a
                          href="tips-to-increase-the-interior-value-of-your-house.html"
                          aria-current="page"
                          className="w-inline-block w--current"
                        >
                          <h3 className="sidebar-blog-title">
                            Tips To Increase The Interior Value Of Your House
                          </h3>
                        </a>
                        <div className="sidebar-blog-date">
                          December 1, 2021
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="collection-item-sidebar w-dyn-item"
                      >
                        <a
                          href="best-solution-for-any-office-business-interior.html"
                          className="w-inline-block"
                        >
                          <h3 className="sidebar-blog-title">
                            Best Solution For Any Office &amp; Business Interior
                          </h3>
                        </a>
                        <div className="sidebar-blog-date">
                          December 1, 2021
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget background-color">
                  <h2 className="widget-title">Categories</h2>
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <a
                          href="../category/kitchen-design.html"
                          className="w-inline-block"
                        >
                          <h3 className="sidebar-category-title">
                            Kitchen Design
                          </h3>
                        </a>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <a
                          href="../category/living-room.html"
                          className="w-inline-block"
                        >
                          <h3 className="sidebar-category-title">
                            Living Room
                          </h3>
                        </a>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <a
                          href="../category/minimalist-interior.html"
                          className="w-inline-block"
                        >
                          <h3 className="sidebar-category-title">
                            Minimalist Interior
                          </h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
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
                      src="/insidehome/kids_room_files/Kids bedroom 4.jpg"
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
                      src="/insidehome/Kidsroom/Kids bedroom 2.jpg"
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
                      src="/insidehome/Kidsroom/Kids bedroom 3.jpg"
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
  );
}

export default Blog4;
