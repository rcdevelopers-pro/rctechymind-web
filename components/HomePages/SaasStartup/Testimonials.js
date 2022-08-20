import React, { Component } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default class Testimonials extends Component {
  // ModalVideo
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="_ysd-zHamjk"
          onClose={() => this.setState({ isOpen: false })}
        />

        <div className="saas-testimonials-area bg-dark pb-100">
          <div className="container">
            <div className="saas-video-box">
              <img src="/images/saas-startup/video-img.jpg" alt="image" />

              <div
                onClick={(e) => {
                  e.preventDefault();
                  this.openModal();
                }}
                className="video-btn popup-video"
              >
                <i className="fas fa-play"></i>
              </div>
            </div>
            
            <div className="saas-testimonials">
              <Swiper
                navigation={true}
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper saas-testimonials-slides"
              >
                <SwiperSlide>
                  <div className="saas-testimonials-item">
                    <div className="info d-flex align-items-center">
                      <img src="/images/saas-startup/user1.jpg" alt="image" />
                      <div className="title">
                        <h3>Allan Morris</h3>
                        <span>Director</span>
                      </div>
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inci dunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan.”
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="saas-testimonials-item">
                    <div className="info d-flex align-items-center">
                      <img src="/images/saas-startup/user2.jpg" alt="image" />
                      <div className="title">
                        <h3>Sarah Taylor</h3>
                        <span>Manager</span>
                      </div>
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inci dunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan.”
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="saas-testimonials-item">
                    <div className="info d-flex align-items-center">
                      <img src="/images/saas-startup/user3.jpg" alt="image" />
                      <div className="title">
                        <h3>James Andy</h3>
                        <span>CEO</span>
                      </div>
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inci dunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan.”
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  }
}
