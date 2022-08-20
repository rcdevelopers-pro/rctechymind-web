import React, { Component } from "react";
import Link from "next/link";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
import VisibilitySensor from "react-visibility-sensor";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper hero-slider"
        >
          <SwiperSlide>
            <div className="hero-banner overly-6 hero-bg5">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content text-center">
                          <h1
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            Digital Marketing
                          </h1>

                          <p
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            <Link href="/contact">
                              <a className="btn btn-primary">Contact Us</a>
                            </Link>

                            <Link href="/#play-video">
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.openModal();
                                }}
                                className="btn btn-secondary"
                              >
                                <i className="icofont-ui-play"></i> How it works
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-banner overly-6 hero-bg6">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content text-center">
                          <h1
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            Marketing Startup
                          </h1>

                          <p
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            <Link href="/contact">
                              <a className="btn btn-primary">Contact Us</a>
                            </Link>

                            <Link href="/#play-video">
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.openModal();
                                }}
                                className="btn btn-secondary"
                              >
                                <i className="icofont-ui-play"></i> How it works
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-banner overly-6 hero-bg7">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content text-center">
                          <h1
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            Marketing agency
                          </h1>

                          <p
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <div
                            className={
                              isVisible
                                ? "animated fadeInUp opacityOne"
                                : "opacityZero"
                            }
                          >
                            <Link href="/contact">
                              <a className="btn btn-primary">Contact Us</a>
                            </Link>

                            <Link href="/#play-video">
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.openModal();
                                }}
                                className="btn btn-secondary"
                              >
                                <i className="icofont-ui-play"></i> How it works
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="_ysd-zHamjk"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default MainBanner;
