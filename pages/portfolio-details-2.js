import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetailsContent2 from '../components/Portfolio/PortfolioDetailsContent2';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class PortfolioDetails2 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="UX for Mobile Apps" 
                    BGImage="bg-two"
                />  
                
                <PortfolioDetailsContent2 />

                <CtaAreaTwo />

                <Footer />
            </>
        );
    }
}

export default PortfolioDetails2;