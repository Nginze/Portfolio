import React from 'react'

export default function () {
  return (
    <section id = "contact">
        <div className='contact-container'>
            <h1 className='headers'> Get Connected </h1>
            <span 
            data-aos="flip-right"
            > Shoot Me an Email!</span>
            <form>
                <div className='contact-form'>
                    <input placeholder='Fullname'/>
                    <input placeholder='Email address'/>
                    <textarea placeholder='Enter a message'/>
                    <button>Send Message </button>
                </div>
            </form>
        </div>
    </section>
  )
}
