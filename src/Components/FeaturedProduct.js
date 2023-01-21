import React from 'react'
import './FeaturedProduct.css'
import img4 from '../assets/img4.jpg'
import ring6 from '../assets/ring6.jpg'
import ear3 from '../assets/ear3.jpg'
import b4 from '../assets/b4.jpg'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FeaturedProduct() {
  return (
    <>
   <h2 className='text-center mt-3'>FEATURED PRODUCTS</h2>
   <hr/>
   <Container>
    <Row>
        
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="my-card"> <img  className="my-card-img" src={img4} />
            <div className="my-card-body trainer-card-body">
                <p style={{fontFamily:'Rubik Beastly',marginBottom:'5px',color:'green'}}>New</p>
                <h5>Golden Pendant</h5>
                <p>$ 200</p>
                <a  className="my-card-btn"><Link to='/pendant' style={{textDecoration:'none',color:'black'}}>Buy now</Link></a>
            </div>
        </div>
    </div>
        
        
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="my-card"> <img className="my-card-img" src={b4} />
            <div className="my-card-body trainer-card-body">
                <h5>Bangle</h5>
                <p>$200</p>
                <a href="#" className="my-card-btn"><Link to='/bangles' style={{textDecoration:'none',color:'black'}}>Buy now</Link></a>
            </div>
        </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="my-card"> <img className="my-card-img" src={ring6} />
        
            <div className="my-card-body trainer-card-body">
                <h5>Ring</h5>
                <p> <del className='bg-warning'>$100</del>  $ 70</p>
                <a href="#" className="my-card-btn"><Link to='/rings' style={{textDecoration:'none',color:'black'}}>Buy now</Link></a>
            </div>
        </div>
    </div>

    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="my-card"> <img className="my-card-img" src={ear3} />
            <div className="my-card-body trainer-card-body">
            <p style={{fontFamily:'Rubik Beastly',marginBottom:'5px',color:'green'}}>Trending</p>
                <h5>Earring</h5>
                <p>$ 150 </p>
                <a href="#" className="my-card-btn"><Link to='/earrings' style={{textDecoration:'none',color:'black'}}>Buy now</Link></a>
            </div>
        </div>
    </div>
        
    </Row>
   </Container>
   <hr/>
    </>
  )
}

export default FeaturedProduct