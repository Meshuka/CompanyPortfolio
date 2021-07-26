import React from 'react';
import {Collapse} from 'antd';
// import imag1 from '../images/bg-hero.jpg';
import PDF from '../images/testing.pdf';
const {Panel} = Collapse;

function SiteFAQs() {
    return (
        <div id='faq' className='block faqBlock'>
            <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>FAQs</h2>
                <p> est qui dolorem ipsum quia dolor sit amet</p>
            </div>
            <Collapse defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                <p>Collapse content</p>
            </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['2']}>
                <Panel header="This is panel header 2" key="2">
                <p>Collapse content</p>
            </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['3']}>
                <Panel header="This is panel header 3" key="3">
                <p>Collapse content</p>
            </Panel>
            </Collapse>
            <div className='quicksupport'>
                <h3>Want quick support?</h3>
                <p>Stuff you'll need to know.</p>
                {/* <button><i className='fas fa-envelope'></i>Email your question</button> */}
                {/* <button><a href={imag1} download='testing123'>Download</a></button> */}
                <button><a href={PDF} without rel="noopener noreferrer" target="_blank">Download</a></button>
            </div>
        </div>
        </div>
    )
}

export default SiteFAQs;
