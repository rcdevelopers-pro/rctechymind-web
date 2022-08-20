import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
export default class OurClients extends Component {
  render() {
    return (
      <>
        <div className="partner-area bg-1b2232 ptb-70">
          <div className="container">
            <Swiper
              navigation={true}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
              modules={[Navigation]}
              className="mySwiper partner-slides"
            >
              <SwiperSlide>
                <div className="partner-item text-center">
                  <a href="#" className="d-inline-block" target="_blank">
                    <img
                      src="/images/business-consulting/partner-white1.png"
                      alt="image"
                    />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <a href="#" className="d-inline-block" target="_blank">
                    <img
                      src="/images/business-consulting/partner-white2.png"
                      alt="image"
                    />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <a href="#" className="d-inline-block" target="_blank">
                    <img
                      src="/images/business-consulting/partner-white3.png"
                      alt="image"
                    />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <a href="#" className="d-inline-block" target="_blank">
                    <img
                      src="/images/business-consulting/partner-white4.png"
                      alt="image"
                    />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <a href="#" className="d-inline-block" target="_blank">
                    <img
                      src="/images/business-consulting/partner-white5.png"
                      alt="image"
                    />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <a href="#" className="d-inline-block" target="_blank">
                    <img
                      src="/images/business-consulting/partner-white6.png"
                      alt="image"
                    />
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="partner-item text-center">
                  <a href="#" className="d-inline-block" target="_blank">
                    <img
                      src="/images/business-consulting/partner-white4.png"
                      alt="image"
                    />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </>
    );
  }
}
