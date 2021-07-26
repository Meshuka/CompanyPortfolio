import React from 'react';
import '../App.css'
import HeroSection from './home/HeroSection';
import SiteAbout from './home/About';
import SiteServices from './home/Services';
import SiteFAQs from './home/FAQs';
import SiteContact from './home/Contact';
// import SitePortfolio from './home/Portfolio';

function Home() {
    return (
        <div className="main">
            <HeroSection/>
            <SiteAbout />
            <SiteServices />
            {/* <SitePortfolio /> */}
            <SiteFAQs />
            <SiteContact />
        </div>
    )
}

export default Home
