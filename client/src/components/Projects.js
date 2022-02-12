import React from 'react'
import AOS from 'aos'
import { useEffect } from 'react';
import "aos/dist/aos.css"

export default function () {
    useEffect(() => {
        AOS.init({
          duration : 400
        });
      }, []);

  return (
    <section  id = "projects">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className ='projects-container'>
            <h1
            className='headers'
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            > Projects </h1>
            <div className='project-cards-container'>
                <div 
                    data-aos="fade-right"
                     data-aos-offset="400"
                     data-aos-easing="ease-in-sine" 
                     className='project-card'> 
                    <img className ='project-img' src='./todo.png'/>
                    <h1 className='project-header'>Todo <a href='https://github.com/Nginze/Todo-app-React-'><span className='github-icon'><i className="fa-brands fa-github"></i></span></a></h1>
                    <p className='project-desc'>Add a task and become more productive 😎 </p>
                    <a href='https://todo-app-nginz.netlify.app/' className='project-link'> View Project </a>
                </div>
                <div 
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
                 className='project-card'>
                    <img className ='project-img' src='./notes.png'/>
                    <h1 className='project-header'>Notes <a href='https://github.com/Nginze/Notes-app'><span className='github-icon'><i className="fa-brands fa-github"></i></span></a></h1>
                    <p className='project-desc'>Document all important records and information 📚</p>
                    <a className='project-link'> View Project</a>
                </div>
                <div 
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
                className='project-card'>
                    <img className ='project-img' src='./chat.png'/>
                    <h1 className='project-header'>Chat <a href='https://github.com/Nginze'><span className='github-icon'><i className="fa-brands fa-github"></i></span></a></h1>
                    <p className='project-desc'> Working progress...😐 </p>
                    <a className='project-link-disabled'> View Project</a>
                </div>
              
            </div>
        </div>
       
    </section>
  )
}
