import React from 'react';
import PDF from '../images/testing.pdf'

function SitePortfolio() {
    return (
        <div className='block portfolioBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Our Portfolio</h2>
                    <p>fdsjkfchjkdhcfjds</p>
                </div>
                <div className='portfolio-picture'>
                    <div className='demo-picture'></div>
                <button><a href={PDF} without rel='noopener noreferrer' target='_blank'>View Portfolio</a></button>
                </div>
            </div>
            
        </div>
    )
}

export default SitePortfolio;
