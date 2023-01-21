import React from 'react'
import {Whatsapp,Instagram,Envelope,Google,Shop,Phone} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo192.jpg'

function Footer() {
  return (
    <>
     <footer className="text-center text-lg-start  text-dark slide-up"  style={{backgroundColor:'rgb(224, 218, 211)'}} >
    
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <Whatsapp className='m-2'   />
        <Instagram className='m-2'   />
        <Google className='m-2'  />
      </div>
    
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5" style={{height:'180px',backgroundColor:'rgb(224, 218, 211)',display:'contents'}}>
        
        <div className="row mt-3">
    
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <img src={logo} style={{width:'25px'}}  />
            <h6 className="text-uppercase fw-bold mb-4" style={{fontFamily:'WindSong'}}>
            Jwel
            </h6>
            <p>
             Buy less.<br/>
             Choose well.<br/>
             Make it last.<br/>
            </p>
          </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p id='ladies'  className="text-reset"><Link style={{textDecoration:'none',color:'black'}} to='/pendant'>Pendants</Link></p>
              <p id='kids' className="text-reset"><Link style={{textDecoration:'none',color:'black'}} to='/bangles'>Bangles</Link></p>
              <p id='kids' className="text-reset"><Link style={{textDecoration:'none',color:'black'}} to='/rings'>Rings</Link></p>
              <p id='kids' className="text-reset"><Link style={{textDecoration:'none',color:'black'}} to='/earrings'>Earrings</Link></p>
          </div>
        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p> <Shop/>:   USA </p>
            <p>
              <Envelope/>
              : jwel@gmail.com
            </p>
            <p><Phone/>: + 01 234 567 88</p>
          </div>
       </div>
     </div>
    </section>
    <div className="text-center " style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
      © 2022 Copyright:
      <p id='gmail' className="text-reset fw-bold" >jwel.com</p>
    </div>
  </footer>
    </>
  )
}

export default Footer