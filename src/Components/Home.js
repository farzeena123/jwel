import { Carousel,Container,Row,Col, Card } from 'react-bootstrap'
import React from 'react';
import dp1 from '../assets/dp1.jpg'
import dp2 from '../assets/dp2.jpg'
import dp3 from '../assets/dp3.jpg'
import ear2 from '../assets/ear2.jpg'
import home6 from '../assets/home6.jpg'
import home4 from '../assets/home4.jpg'
import home7 from '../assets/home7.jpg'
import Header from './Header';
import FeaturedProduct from './FeaturedProduct';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header/>
         <Carousel className='carousel'  fade>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={dp1}
          alt="First slide"
          style={{height:'20px'}}
        />
        <Carousel.Caption>
          <h5 style={{fontFamily:'Arbutus',fontSize:'30px'}}>Shop Our Exclusives</h5>
          <h3 style={{fontFamily:'Birthstone Bounce',color:'black'}}>Especially curated  jewellery for all your styling needs!</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'> 
        <img
          className="d-block w-100"
          src={dp2}
          alt="Second slide"
          style={{height:'20px'}}
        />
         <h3 style={{color:'black'}}>GOOD</h3>
         
        <Carousel.Caption>
          <h5 style={{fontFamily:'Arbutus',fontSize:'30px'}}>Gifting Made Easy</h5>
          <h3  style={{fontFamily:'Birthstone Bounce',color:'black'}}>Explore Gifts in gold for all your loved ones</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={dp3}
          alt="Third slide"
          style={{height:'20px'}}
        />

        <Carousel.Caption>
          <h5 style={{fontFamily:'Arbutus',fontSize:'30px'}}>Shop on a Budget</h5>
          <h3 style={{fontFamily:'Birthstone Bounce',color:'black'}}>Affordable isn’t just a word – it’s our motto</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img
          className="d-block w-100"
          src={ear2}
          alt="Third slide"
          style={{height:'20px'}}
        />

        <Carousel.Caption>
          <h5 style={{fontFamily:'Arbutus',fontSize:'30px',color:'black'}}>Design to match your Style!!</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  <hr/>
   <Container fluid className='d-block fluid'>
    <Row>
        <Col md={4} >
          <Card className='homecol' style={{backgroundImage:`url(${home7})`,backgroundSize:'390px'}}   >
            <div  style={{backdropFilter:'blur(3px)'}}>
            <Card.Title style={{fontFamily:'Comforter',color:'wheat',paddingLeft:'35px',fontSize:'30px'}} >Select From The Best</Card.Title>
            <Card.Body>
              <p>Stylish Pendant Store</p>
              <button className='btn btn-light'><Link to='/pendant' style={{textDecoration:'none',color:'black'}}>shop now</Link></button>
            </Card.Body>
            </div>
          </Card>
        </Col>
        <Col md={4}>
        <Card className='homecol ' style={{backgroundImage:`url(${home4})`,backgroundSize:'390px'}}   >
        <div  style={{backdropFilter:'blur(3px)'}}>
            <Card.Title style={{fontFamily:'Homemade Apple',color:'wheat'}}>Trending Products</Card.Title>
            <Card.Body>
              <p>Classic Jwellery Collections</p>
              <button className='btn btn-light'><Link to='/earrings' style={{textDecoration:'none',color:'black'}}>shop now</Link></button>
            </Card.Body>
            </div>
          </Card>
        </Col>
        <Col md={4} >
        <Card className='homecol' style={{backgroundImage:`url(${home6})`,backgroundSize:'390px'}}   >
        <div  style={{backdropFilter:'blur(3px)'}}>
            <Card.Title  style={{fontFamily:'Explora',fontSize:'30px',paddingLeft:'30px',color:'wheat',fontWeight:'600'}}>Never Go Out of Style</Card.Title>
            <Card.Body>
              <p >Top Ring Collections</p>
              <button className='btn btn-light'><Link to='/rings' style={{textDecoration:'none',color:'black'}}>shop now</Link></button>
            </Card.Body>
            </div>
          </Card></Col>
    </Row>
   </Container>
   <hr/>
   
   <FeaturedProduct/>

   <Footer/>
    </div>
  )
}

export default Home