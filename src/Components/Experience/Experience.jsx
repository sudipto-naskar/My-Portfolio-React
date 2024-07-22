import React from 'react'
import './Experience.css'

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Experience = () => {

  // AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className='experience' id='Experience' data-aos='zoom-out' data-aos-delay="250">
        <div className='achievement'>
            <div className="circle">2+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className='achievement'>
            <div className="circle">5+</div>
            <span>completed</span>
            <span>projects</span>
        </div>
        <div className='achievement'>
            <div className="circle">1+</div>
            <span>companies</span>
            <span>work</span>
        </div>

        
    </div>
  )
}

export default Experience