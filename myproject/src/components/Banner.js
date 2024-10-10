import React, { useEffect } from 'react'
import backimg from '../images/myphoito.jpg'
  import boxbg from '../images/banner.svg'
  import Typed from 'typed.js';
  import { useRef } from 'react';
import './App.css'

const Banner = () => {
  const el=useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer" ,'React Developer','Fullstack Developer'], // Strings to display
      
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true
    });

    
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
     <div style={{backgroundImage:`url(${boxbg})` , backgroundSize: "cover"}} className="maincontainer">
        <div  className='box1'>
          <div className='chotu'>
        <h6 style={{fontWeight:600,marginLeft:18 }}>Hi, I am </h6>
         <h2 style={{fontWeight:700 , margin : 8}}  >Ashish Ramjit Kanojia</h2>
         <h5 style={{fontWeight:400 , margin : 8}}> I am <span style={{fontWeight:600,textDecoration:'underline'}} ref={el}></span></h5>
         <p style={{margin:5}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe aliquam ratione deserunt! Repudiandae repellat eos non saepe pariatur necessitatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe aliquam ratione deserunt! Repudiandae repellat eos non saepe pariatur necessitatibus</p>
         <button type="button" class="btn btn-outline-dark">Contacy us</button>
         </div>

        
        </div>{/* end text */}

        <div className='box2'>
  <img className='myimg' src={backimg} alt="" />
     </div>{/* end bckimg */}
     </div>
    </>
  )
}

export default Banner
