import React from 'react'
import './App.css';

const Header = () => {
  return (
    <>
    <div className="main" >

      <div className="logo">
        <h1>Ashish kanojia</h1>
        </div>{/* Logo closed */}

        <div className="menulist m-4">
            
                  <a href='/'>Home</a>
                  <a href='/'>About</a>
                  <a href='/'>Skills</a>
                  <a href='/'>Portfolio</a>
                  <a href='/'>Contact</a>
                
            </div>{/* Menu End */}

        <div className="button">
        <button type="button" class="btn btn-outline-danger">Hire me  </button>
            </div>{/* button closed */}
    </div> {/*main closed */}  
    </>
  )
}

export default Header
