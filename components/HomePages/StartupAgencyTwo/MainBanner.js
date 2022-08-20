import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});
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
        <div className="main-banner startup-agency startup-agency2">
          {/* <div id="particles-js">
            <Particles params={{ ...particleOpt }} />
          </div> */}

          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1>Start your startup agency with Pungent</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      <Link href="/contact">
                        <a className="btn btn-primary">Get Started</a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="banner-image"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <img 
                        src="/images/banner-img2.png" 
                        alt="image" 
                      />
                      <div className="video-box">
                          <div
                            onClick={e => {e.preventDefault(); this.openModal()}}
                            className="video-btn"
                          > 
                            <i className="fa-solid fa-play"></i>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default MainBanner;
