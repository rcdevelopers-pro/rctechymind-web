import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }
    render() {
        return (
            <>
                <div className="hero-banner overly hero-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content text-center">
                                    <span>We are a</span>

                                    <h1>Creative agency</h1>
                                        
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Get Started</a>
                                    </Link>

                                    <Link href="/#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="btn btn-secondary"
                                        > 
                                            <i className="icofont-ui-play"></i> How it works
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="curve-shape">
                      <img 
                        src="/images/curve-shape.png" 
                        alt="Shape" 
                      />
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;