import React from 'react'
import abtimg from '../images/abt.jpg'


import './About.css'

const About = () => {
  return (
    <>
    <body>
    <h1 style={{textAlign:'center',margin:50,textDecorationLine:'underline'  }}>About Me</h1>
    <div className="abtcontainer"  >
    
    <div className="imgcont">
    <img className='myimg' src={abtimg} alt="" />
    </div>


    <div className="writecontainer" >
        <div className='innercontainer'>
   <h1>React Js Developer</h1>
   
   <p>Highly motivated Full Stack Developer with a Bachelor’s degree in Information Technology, bringing a strong foundation in both front-end and back-end technologies. Proven expertise in designing, developing, and maintaining dynamic web applications with a focus on delivering seamless user experiences. Ability to translate business requirements into technical solution.</p>
   <i className="fa-brands fa-linkedin " ></i>
   <i className="fa-brands fa-github mx-2"></i>
   <i className="fa-solid fa-phone"></i><br/>
   <button type="button" class="btn btn-outline-danger">Read More...</button>
   </div>
   
    </div>

    </div>
    </body>
      
    </>
  )
}

export default About
