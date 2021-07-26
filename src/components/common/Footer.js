import React from 'react';
import './Footer.css';
import { BackTop } from 'antd';

function SiteFooter() {
    return (
        <div className='container-fluid'>
            <div className='footer'>
                <div className='logo'>
                    <a href='#'>INNOVATIVE</a>
                </div>
                <ul className='socials'>
                    <li><a href='https://www.facebook.com'><i className='fab fa-facebook-f' /></a></li>
                    <li><a href='https://www.twitter.com'><i className='fab fa-twitter' /></a></li>
                    <li><a href='https://www.linkedin.com'><i className='fab fa-linkedin-in' /></a></li>
                    <li><a href='https://www.pinterest.com'><i className='fab fa-pinterest-p' /></a></li>
                    <li><a href='https://www.instagram.com'><i className='fab fa-instagram' /></a></li>
                </ul>
                <div className='copyright'>
                    Copyright @ 2021 Tech
                </div>
                <BackTop>
                    <div className='goTop'><i className='fas fa-arrow-circle-up'></i></div>
                </BackTop>
            </div>
            
        </div>
    )
}

export default SiteFooter;
