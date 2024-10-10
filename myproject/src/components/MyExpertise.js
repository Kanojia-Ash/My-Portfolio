import React from 'react'
import './Expertise.css'
import img from '../images/banner.svg'
const MyExpertise = () => {
  return (
    <>
     <h1>My Expertise </h1> 
     <div style={{backgroundImage :`url(${img})`, backgroundSize:"cover"}} className="expcontainer">
        <div className='scont'>
        <div className="ex1">
        <h1 style={{fontWeight:500,marginBottom:10}}>I love these technology</h1>
        <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, id? Rem vero impedit architecto aperiam pariatur. Facere voluptatum assumenda quasi!</p>
        <button style={{marginLeft:200}} type="button" class="btn btn-outline-dark">Hire Me</button>
        </div>
        <div className="ex2">
        <button type="button" class="btn btn-outline-dark">Html</button>
        <button type="button" class="btn btn-outline-dark">Css</button>
        <button type="button" class="btn btn-outline-dark">Javascript</button>
        <button type="button" class="btn btn-outline-dark">ReactJs</button>
        <br/>
        <button type="button" class="btn btn-outline-dark">NextJs</button>
        <button type="button" class="btn btn-outline-dark">Sql</button>
        <button type="button" class="btn btn-outline-dark">Jquery</button>
        <button type="button" class="btn btn-outline-dark">Java</button>
        </div>
     </div>
     </div>
    </>
  )
}

export default MyExpertise
