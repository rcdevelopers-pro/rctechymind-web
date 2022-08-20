import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/HomePages/ItAgencyTwo/MainBanner';
import OurServices from '../components/HomePages/ItAgencyTwo/OurServices';
import ServiceStyleTwo from '../components/HomePages/ItAgencyTwo/ServiceStyleTwo';
import WhyChooseUs from '../components/HomePages/ItAgencyTwo/WhyChooseUs';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Feedback from '../components/Common/Feedback';
import WorkProcess from '../components/HomePages/DefaultHome/WorkProcess'; 
import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Partner from '../components/Common/Partner';

class ItAgency2 extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner /> 

                <OurServices />

                <ServiceStyleTwo />

                <WhyChooseUs />
                <FunFactsTwo />
                {/* <WorkProcess /> */}

                <Partner />

                <Feedback /> 
                
                <LatestNewsSliderTwo />

                <div className="pb-100">
                    <Newsletter />
                </div>
                
                <Footer />
            </>
        );
    }
}

export default ItAgency2;