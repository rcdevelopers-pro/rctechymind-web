import React, { Component } from "react";
import Link from "next/link";

export default class LatestNews extends Component {
  render() {
    return (
      <>
        <div className="pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">News</span>
              <h2>Our Latest News</h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-blog-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="blog-image">
                    <Link href="/blog-details">
                      <a>
                        <img src="/images/blog/blog7.jpg" alt="image" />
                      </a>
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog">
                        <a>Technology</a>
                      </Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">Feb 15, 2020</span>
                    <h3>
                      <Link href="/blog-details">
                        <a>The Most Popular New top Business Apps</a>
                      </Link>
                    </h3>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>

                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
                        <i className="icofont-thin-double-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-blog-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="blog-image">
                    <Link href="/blog-details">
                      <a>
                        <img src="/images/blog/blog8.jpg" alt="image" />
                      </a>
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog">
                        <a>Agency</a>
                      </Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">Feb 16, 2020</span>

                    <h3>
                      <Link href="/blog-details">
                        <a>The Best Marketing top use Management Tools</a>
                      </Link>
                    </h3>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>

                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
                        <i className="icofont-thin-double-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-blog-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="blog-image">
                    <Link href="/blog-details">
                      <a>
                        <img src="/images/blog/blog9.jpg" alt="image" />
                      </a>
                    </Link>

                    <div className="post-tag">
                      <Link href="/blog">
                        <a>IT Agency</a>
                      </Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">Feb 17, 2020</span>

                    <h3>
                      <Link href="/blog-details">
                        <a>3 WooCommerce Plugins to Boost Sales</a>
                      </Link>
                    </h3>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium.
                    </p>

                    <Link href="/blog-details">
                      <a className="read-more-btn">
                        Read More
                        <i className="icofont-thin-double-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
