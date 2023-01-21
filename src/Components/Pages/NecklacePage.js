import React from 'react'
import Header from '../Header'
import {Container,Row} from 'react-bootstrap'
import Necklace from '../ItemCard/Necklace'
import Footer from '../Footer/Footer'

function NecklacePage() {
  return (
    <>
    <Header/>
   <h2 className='text-center mt-3'>PENDANT COLLECTIONS</h2>
   <hr/>
   <Container  style={{display:'flex'}}>
    <Row className='justify-content-center ' >
      <Necklace /> 
    </Row>
   </Container><hr/>
   <Footer></Footer>
   </>
  )
}

export default NecklacePage