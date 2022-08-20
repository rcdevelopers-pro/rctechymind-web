import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

export default class WhoWeAre extends Component {
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }
    render() {
        return (
            <>
                <div className="bc-who-we-are-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="bc-who-we-are-content">
                                    <span className="sub-title">WHO WE ARE</span>
                                    <h2>Pungent global consulting firm is working with more than 1200+ people that are working from more than 15 countries to help our clients to meet his/her desirable goal in such a great way.</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspend sghisse ultrices gravida.</p>
                                    <Link href="/about">
                                        <a className="default-btn-two">
                                            Read More <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="bc-who-we-are-image">
                                    <img 
                                        src="/images/business-consulting/who-we-are.jpg" 
                                        alt="image" 
                                    />
                                    <div
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn popup-video"
                                    > 
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        )
    }
}
