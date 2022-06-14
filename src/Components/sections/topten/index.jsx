import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import './style.css'
import SetaSection from '../../../Images/setasection.png'

import Toptcard from '../../topcards'

function Topten(props) {

    return (
      <div className='topcont'>
        <div className='sectionName'>
            <p className='sectionTittle'>{props.ativi}</p>
            <img className='sectionIcon' src={SetaSection}/>
        </div>
          <Carousel infiniteLoop={true} showStatus={false} showIndicators={false} dynamicHeight={false} className='toplinhacar'>
            <div className='topcont'>
              <Toptcard topnumber={'one'} topimg={'rednotice'} />
              <Toptcard topnumber={'two'} topimg={'squadgame'} />
              <Toptcard topnumber={'three'} topimg={'centralintelligence'} />
              <Toptcard topnumber={'four'} topimg={'jasonbourne'} />
            </div>
            <div className='topcont'>
              <Toptcard topnumber={'5 (1)'} topimg={'rednotice'} />
              <Toptcard topnumber={'6 (2)'} topimg={'squadgame'} />
              <Toptcard topnumber={'7 (1)'} topimg={'centralintelligence'} />
              <Toptcard topnumber={'8'} topimg={'jasonbourne'} />
            </div>
            <div className='topcont'>
              <Toptcard topnumber={'10'} topimg={'rednotice'} />
            </div>
          </Carousel>
      </div>
    )
  }
  
  export default Topten