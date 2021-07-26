import React from "react";
import '../../App.css'
import "./HeroSection.css";
// import { Button, Carousel } from "antd";

function HeroSection() {
  return (
    <div id="hero" className="hero-block">
    <div className='container-content'>
      <div className='container-fluid'>
          <div className='content'>
              <h3>Innovative Services</h3>
              <p>An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.'</p>
              <div className='hero-button'>
              <button><a href='#about'>Tell me more!</a></button>
              </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default HeroSection;
