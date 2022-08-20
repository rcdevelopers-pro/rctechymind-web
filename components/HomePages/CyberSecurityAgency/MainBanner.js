import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

export default class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        {/* If you want change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        />
        <div className="cs-banner-section">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="cs-banner-content">
                  <span className="sub-title">
                    No #1 Cyber Security Company Of The World
                  </span>
                  <h1>We Provide The Best Cyber Security</h1>
                  <p>
                    Cybersecurity is the protection from the theft to protect of
                    our computer systems and networks or being damaged of our
                    hardware, software and more.
                  </p>

                  <ul className="banner-btn">
                    <li>
                      <Link href="/contact">
                        <a className="default-btn-two">
                          Contact Us{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          this.openModal();
                        }}
                        className="video-btn"
                      >
                        <i className="fa-solid fa-play"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="cs-banner-image"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <img
                    src="/images/cyber-security/banner/main.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="cs-banner-shape">
            <img src="/images/cyber-security/banner/shape.png" alt="image" />
          </div>
          <div className="cs-lock">
            <img src="/images/cyber-security/banner/lock.png" alt="image" />
          </div>
        </div>
      </>
    );
  }
}
