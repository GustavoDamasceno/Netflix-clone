import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import SetaSection from '../../../Images/setasection.png'
import Cards from '../../cards'

import '../styles.css'

function Scifi(props) {

  return (
    <div className='sec'>
        <div className='sectionName'>
            <p className='sectionTittle'>{props.ativi}</p>
            <img className='sectionIcon' src={SetaSection}/>
        </div>
        <Carousel infiniteLoop={true} showStatus={false} showIndicators={false} dynamicHeight={false}>
          <div className='secarr'>
          <Cards show={'altered'}/>
          <Cards show={'umbrella'}/>
          <Cards show={'sense8'}/>
          <Cards show={'anotherlife'} />
          <Cards show={'social-dilemma'}/>
          </div>
          <div className='secarr'>
            <Cards show={'explained'}/>
            <Cards show={'peaky-blinders'}/>
            <Cards show={'social-dilemma'}/>
            <Cards show={'the-five'} />
            <Cards show={'you'} />
          </div>
        </Carousel>
    </div>
  )
}

export default Scifi