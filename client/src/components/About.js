import React from 'react'
import 'animate.css';

export default function () {
  return (
    <section id = "about">
        <div className='about-container'>
            <div
            className='header-text'>
                <h1 className='typewriter'> Hi, there!</h1>
                <span className="animate__animated animate__fadeInLeft animate__delay-1.2s" > I'm <span className='name'>Jonathan</span>, a Web Developer</span> 
                <p className="animate__animated animate__fadeInLeft animate__delay-1.2s">
                Computer science major interested in technological solutions.
  
                </p>
                <a href='#projects'>Invade My Space</a>
            </div>
           
        
        </div>
        <a href='#projects'>
        <div class="mouse_scroll">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
            <div>
              <span class="m_scroll_arrows unu"></span>
              <span class="m_scroll_arrows doi"></span>
              <span class="m_scroll_arrows trei"></span>
            </div>
        </div>
        </a>
      
    </section>
  )
}
