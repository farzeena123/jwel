import React from 'react'
import Header from '../Header'
import Earrings from '../ItemCard/Earrings'
import {Container,Row} from 'react-bootstrap'
import Footer from '../Footer/Footer'

function EarringsPage() {
  return (
    <>
    <Header/>
   <h2 className='text-center mt-3'>NECKLACES</h2>
   <hr/>
   <Container  style={{display:'flex'}}>
    <Row className='justify-content-center ' >
      <Earrings/> 
    </Row>
   </Container><hr/>
   <Footer/>
   </>
  )
}

export default EarringsPage