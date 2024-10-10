import React from 'react'
import './Services.css';
const Services = () => {
  return (
    <>
    <h1 style={{textDecoration:'underline' , marginTop:80}}>My Services</h1>
      <div className="Servcontainer">
        <div className="firstb">
          <i class="fa-brands fa-aws"></i>
            <h2 style={{fontWeight: 400 ,marginTop:10,textAlign:'center'}}>Web Developement</h2>
            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam voluptates quis soluta quo porro odio amet maiores eum, ea tempore minima eveniet obcaecati pariatur .</p1><br/>
            <button type="button" class="btn btn-outline-danger">Check</button>
            </div>{/* End */}
            <div className="Secb">
            <i class="fa-solid fa-mobile"></i>
                <h2 style={{fontWeight: 400,marginTop:10,textAlign:'center'
                }}>Android Development</h2>
                <p1 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam voluptates quis soluta quo porro odio amet maiores eum, ea tempore minima eveniet .</p1><br/>
                <button type="button" class="btn btn-outline-danger">Check</button>
            </div>{/* End */}
            <div className="Thirdtb">
            <i class="fa-solid fa-bars-progress"></i>
                <h2 style={{fontWeight: 400,marginTop:10,textAlign:'center'
                }}>Backend Development</h2>
                <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam voluptates quis soluta quo porro odio amet maiores eum, ea tempore minima eveniet .</p1><br/>
                <button type="button" class="btn btn-outline-danger">Check</button>
            </div>{/* End */}
      </div>
    </>
  )
}

export default Services
