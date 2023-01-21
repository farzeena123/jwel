import React from 'react'
import Header from '../Header'
import {Container,Row} from 'react-bootstrap'
import Bangles from '../ItemCard/Bangles'
import Footer from '../Footer/Footer'


function BanglesPage() {
  return (
    <>
     <>
    <Header/>
   <h2 className='text-center mt-3'>NECKLACES</h2>
   <hr/>
   <Container  style={{display:'flex'}}>
    <Row className='justify-content-center ' >
      <Bangles /> 
    </Row>
   </Container><hr/>
   <Footer/>
   </>
   </>
  )
}

export default BanglesPage