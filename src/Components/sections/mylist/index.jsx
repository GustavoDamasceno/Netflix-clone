import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import SetaSection from '../../../Images/setasection.png'
import Cards from '../../cards'

import '../styles.css'

function Mylist(props) {

  return (
    <div className='sec'>
        <div className='sectionName'>
            <p className='sectionTittle'>{props.ativi}</p>
            <img className='sectionIcon' src={SetaSection}/>
        </div>
        <Carousel infiniteLoop={true} showStatus={false} showIndicators={false} dynamicHeight={false}>
          <div className='secarr'>
            <Cards show={'locke&key'}/>
            <Cards show={'crown'}/>
            <Cards show={'intothenight'}/>
            <Cards show={'queens'} />
            <Cards show={'you'} />
          </div>
          <div className='secarr'>
            <Cards show={'explained'}/>
            <Cards show={'crown'}/>
            <Cards show={'intothenight'}/>
            <Cards show={'queens'} />
            <Cards show={'altered'} />
          </div>
        </Carousel>
    </div>
  )
}

export default Mylist