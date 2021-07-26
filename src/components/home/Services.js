import React from 'react';
import {Row, Col} from 'antd';
import {Card} from 'antd';
import image1 from '../images/clean-design.jpg';

const {Meta} = Card;

// block classname is used for different sections to give same CSS, and featureBlock class is used to make this section different than the others
// bgGrey is defined for all as div having background grey
function SiteServices() {
    return (
        <div id='services' className='block servicecsBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Services We Offer</h2>
                    <p> est qui dolorem ipsum quia dolor sit amet</p>
                </div>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                <Card
                    hoverable
                    cover={<img alt="Modern Design" src={image1} />}>
                    <Meta title="Modern Design"/>
                </Card>
                </Col>
                <Col span={8}>
                <Card
                    hoverable
                    cover={<img alt="Modern Design" src={image1} />}>
                    <Meta title="Modern Design"/>
                </Card>
                </Col>
                <Col span={8}>
                <Card
                    hoverable
                    cover={<img alt="Modern Design" src={image1} />}>
                    <Meta title="Modern Design"/>
                </Card>
                </Col>
                <Col span={8}>
                <Card
                    hoverable
                    cover={<img alt="Modern Design" src={image1} />}>
                    <Meta title="Modern Design"/>
                </Card>
                </Col>
                <Col span={8}>
                <Card
                    hoverable
                    cover={<img alt="Modern Design" src={image1} />}>
                    <Meta title="Modern Design"/>
                </Card>
                </Col>
                <Col span={8}>
                <Card
                    hoverable
                    cover={<img alt="Modern Design" src={image1} />}>
                    <Meta title="Modern Design"/>
                </Card>
                </Col>
                
            </Row>
            </div>
        </div>
    )
}

export default SiteServices;
