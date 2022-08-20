import React, { Component } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

export default class Funfacts extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        <div className="software-funfacts-area bg-f9f9f9 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <div
                  className="software-funfacts-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="icofont-users"></i>
                  </div>
                  <h3>14,500</h3>
                  <p>Happy Users</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <div
                  className="software-funfacts-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="icon">
                    <i className="icofont-star"></i>
                  </div>
                  <h3>3,527</h3>
                  <p>Good Reviews</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <div
                  className="software-funfacts-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="icon">
                    <i className="icofont-cloud-download"></i>
                  </div>
                  <h3>100k</h3>
                  <p>App download</p>
                </div>
              </div>
            </div>

            <div className="software video-box">
              <img src="/images/software/video-thumb.jpg" alt="video" />
              <div
                onClick={(e) => {
                  e.preventDefault();
                  this.openModal();
                }}
                className="video-btn"
              >
                <i className="icofont-ui-play"></i>
              </div>
            </div>
          </div>
        </div>

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
