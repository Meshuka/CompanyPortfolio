import React from 'react';
import { Row, Col} from 'antd';

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'High Performance',
        content: 'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop',
    },
    {
        key: '2',
        icon: <i className="fas fa-balance-scale"></i>,
        title: 'Balanced Workflow',
        content: 'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop',
    },
    {
        key: '3',
        icon: <i className="fas fa-desktop"></i>,
        title: 'Flat Design',
        content: 'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop',
    }
]
function SiteAbout() {
    return (
        <div id='about' className="block aboutBlock">
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>About Us</h2>
                    <p> quisquam est qui dolorem ipsum quia dolor sit amet</p>
                </div>
                <div className='contentHolder'>
                    <p>quisquam est qui dolorem ipsum quia dolor sit ametf the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an uf the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an uf the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an uf the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an u</p>
                </div>
                {/* Using Grid component from ant design */}
                <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="about-content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
            </div>
        </div>
    )
}

export default SiteAbout;
