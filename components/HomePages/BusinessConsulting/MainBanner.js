import React, { Component } from 'react'
import Link from 'next/link'

export default class MainBanner extends Component {
    render() {
        return (
            <>
                <div className="consulting-banner-area">
                    <div className="container">
                        <div className="consulting-banner-content">
                            <h1>We Are Always As Your Service For Any Business Consulting</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link href="/contact">
                                <a className="default-btn-two">Get Started <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
