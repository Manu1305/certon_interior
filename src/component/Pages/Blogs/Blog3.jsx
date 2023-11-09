import React from 'react'

function Blog3() {
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
                  Master Bedroom
                </h1>
                <img
                  src="../../uploads-ssl.webflow.com/619cc60416b9688293f54eda/61a1bdcbfb8e21011214fd01_blog-image-large-3.jpg"
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
                </div>
              </div>
              <div className="blog-single-sidebar">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog3
