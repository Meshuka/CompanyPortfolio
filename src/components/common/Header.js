
import React from 'react';
import { Anchor } from 'antd';
import './Header.css';

const { Link } = Anchor;
function SiteHeader() {
    return (
        <div className='container-fluid'>
            <div className='header'>
                <div className="logo" id='header-logo'>
                {/* <i class="fa-solid fa-door-open"></i> */}
                {/* <Anchor><Link href='#' title="Innovative"></Link></Anchor> */}
                <a href="#">Innovative</a>
                </div>      
                <div className="mobileHidden">       
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About Us" />
                        <Link href="#services" title="Services" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                    </div>
                </div>
        </div>
    )
}

export default SiteHeader;
