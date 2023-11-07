import React from 'react'
import { Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";

function Blog1() {
  const images = [
    { url: "/insidehome/kitchen1.jpg" },
    { url: "/insidehome/diningarea.jpg" },
    // { url: "images/3.jpg" },
    // { url: "images/4.jpg" },
    // { url: "images/5.jpg" },
    // { url: "images/6.jpg" },
    // { url: "images/7.jpg" },
  ];
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
                <h1 className="blog-single-title">Kitchen Design</h1>

                <img
                  src="/insidehome/kitchen1.jpg"
                  loading="lazy"
                  alt="Blog Single Image"
                  className="blog-single-image"
                />
                {/* <SimpleImageSlider
                  width={896}
                  height={504}
                  images={images}
                  showBullets={true}
                  showNavs={true}
                  autoPlay={true}
                  className="blog-single-image"
                /> */}
                <div className="blog-meta-details">
                  <div className="blog-meta-date"></div>
                  <div className="blog-meta-category">Kitchen Design</div>
                </div>
                <div className="w-richtext">
                  <p>
                    Discover the epitome of modern functionality and aesthetic
                    appeal with our exquisite range of modular kitchens. Crafted
                    with precision, our kitchens seamlessly blend form and
                    function, offering a perfect balance between style and
                    practicality. Each element is thoughtfully designed to
                    optimize space utilization and enhance workflow, ensuring a
                    clutter-free and efficient culinary experience. Choose from
                    a diverse palette of finishes and materials to personalize
                    your dream kitchen, creating a space that reflects your
                    unique taste and lifestyle. Elevate your home with our
                    stunning modular kitchen designs, where
                    innovation meets elegance.
                  </p>

                  <div className="blog-section">
                    <div className="container w-container bloggggggg">
                      <div className="section-title-wrap">
                        <h1 className="section-title center-small-space">
                          What we Design
                        </h1>
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
                                      src="/insidehome/kitchen_defrent_type/iseland.jpg"
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
                                  <h2 className="blog-title">Island Kitchen</h2>
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
                                      src="/insidehome/kitchen_defrent_type/lshape.jpg"
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
                                >
                                  <h2 className="blog-title">
                                    L Shaped Kitchen
                                  </h2>
                                </a>
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
                                      src="/insidehome/kitchen_defrent_type/parallel.jpg"
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
                                  <h2 className="blog-title">
                                    Parallel Kitchen
                                  </h2>
                                </Link>
                                <div className="blog-item-meta">
                                  <p className="blog-date"> </p>
                                  {/* <Link
                                    style={{
                                      background: " rgb(244, 240, 236)",
                                    }}
                                    to="/blog3"
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
                                  {/* <Link
                        to="/blog4"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Kids bedroom</div>
                      </Link> */}
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
                                  {/* <Link
                                    style={{
                                      background: " rgb(244, 240, 236)",
                                    }}
                                    to="/blog4"
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
                                  {/* <Link
                        to="/blog5"
                        className="category-link blog-category w-inline-block"
                      >
                        <div className="blog-category">Dining Area</div>
                      </Link> */}
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
                                  {/* <Link
                                    style={{
                                      background: " rgb(244, 240, 236)",
                                    }}
                                    to="blog5"
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
                            {/* </div>
                                <Link to="/blog6" className="w-inline-block">
                                  <h2 className="blog-title">Balcony</h2>
                                </Link>
                                <div className="blog-item-meta">
                                  <p className="blog-date"></p> */}
                            {/* <Link
                                    style={{
                                      background: " rgb(244, 240, 236)",
                                    }}
                                    to="blog6"
                                    className="blog-single-link w-inline-block"
                                  >
                                    <img
                                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619ccd2fd4bd67dfb2906193_link-arrow-right.svg"
                                      loading="lazy"
                                      alt="Readmore Arrow"
                                    />
                                  </Link> */}
                            {/* </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <h2>
                    The perfect Interior for all
                    <br />
                  </h2>
                  <p>
                    Appropriately empower dynamic<strong> leadership</strong>{" "}
                    <strong>skills </strong>after business portals. Globally my
                    cardinate interactive supply chains with distinctive
                    <a href="https://www.webflow.com/">
                      {" "}
                      quality vectors global sources{" "}
                    </a>
                    services. Uniquely matrix economically sound value through
                    cooperative technology. Competently parallel task fully
                    researched data and{" "}
                    <em>enterprise process improvements.</em>
                  </p> */}
                  {/* <ul role="list">
                    <li>
                      Health Care is committed to the pillars of academic health
                      care
                    </li>
                    <li>
                      We will strengthen local health care and improve delivery
                      system
                    </li>
                    <li>
                      {" "}
                      Providing optimal multidisciplinary health care and
                      developing.
                    </li>
                  </ul> */}
                  {/* <blockquote>
                    “Crowdsource term sheet freemium beta stealth responsive web
                    design niche market rock star channels.”
                  </blockquote> */}
                  {/* <h6>Feel Your Home With Best Interior</h6>
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits. Dramatically visualize
                    customer directed convergence without revolutionary ROI.
                  </p> */}
                  {/* <ol start="" role="list">
                    <li>
                      Your wellness goals and the areas of preference, then
                      unwind with a customized.
                    </li>
                    <li>
                      Discover better health &amp; wellness by using our
                      beautician ratings &amp; reviews to make your choice.
                    </li>
                    <li>
                      Professionals team is trained to provide you with the care
                      and support you need during this difficult time.
                    </li>
                    <li>
                      We will fax the requested records directly to the
                      Qualified Beautician.
                    </li>
                  </ol> */}
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
                          aria-current="page"
                          className="w-inline-block w--current"
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
                          className="w-inline-block"
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
    </div>
  );
}

export default Blog1
