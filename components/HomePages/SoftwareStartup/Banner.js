import React, { Component } from "react";
import Link from "next/link";

export default class Banner extends Component {
  render() {
    return (
      <>
        <div className="software-banner-area">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="software-banner-content">
                  <span className="sub-title fw-bold">
                    Get your 14 days free trail!
                  </span>
                  <h1>Manage All of Your Stuff Using a Pungent</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    tincidunt eifend odio viverra diam aliquet donec again.
                  </p>
                  <Link href="/contact">
                    <a className="software-btn">
                      Get Started Now{" "}
                      <i className="icofont-thin-double-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="software-banner-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="/images/software/banner-img.png"
                    alt="banner-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
