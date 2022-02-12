import React from 'react'

export default function () {
  return (
    <section id = 'skills'>
        <div className='skills-container'>
            <h1
            className='headers'
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            > My Technology Stack  </h1>
            <div  className='stack-container'>
                <a href='https://reactjs.org/'>
                    <div data-aos="zoom-out-down" className='stack-img'>
                        <img src='./react.svg' alt='hero'></img>
                    </div>
                </a>
               <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                    <div data-aos="zoom-out-down" className='stack-img'>
                        <img src='./html-5.svg' alt='hero'></img>
                    </div>
               </a>
               <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
                    <div data-aos="zoom-out-down" className='stack-img'>
                        <img src='./CSS.svg' alt='hero'></img>
                    </div>
               </a>
               <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
               <div data-aos="zoom-out-down" className='stack-img'>
                    <img src='./js.svg' alt='hero'></img>
                </div>
               </a>
               <a href='https://nodejs.org/en/'>
               <div data-aos="zoom-out-down" className='stack-img'>
                    <img src='./node.svg' alt='hero'></img>
                </div>
               </a>
               <a href='https://www.python.org/'>
               <div data-aos="zoom-out-down" className='stack-img'>
                    <img src='./python.svg' alt='hero'></img>
                </div>
               </a>
               <a href='https://www.mongodb.com/'>
               <div data-aos="zoom-out-down"className='stack-img'>
                    <img src='./mongodb.svg' alt='hero'></img>
                </div>
               </a>
               
              
            </div>
        </div>
       
    </section> 
  )
}
