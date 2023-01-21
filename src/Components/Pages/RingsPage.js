import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header'
import Rings from '../ItemCard/Rings'

export default function RingsPage() {
  return (
    <>
    <Header/>
   <h2 className='text-center mt-3'>PENDANT COLLECTIONS</h2>
   <hr/>
   <Container  style={{display:'flex'}}>
    <Row className='justify-content-center ' >
      <Rings /> 
    </Row>
   </Container><hr/>
   <Footer/>
   </>
  )
}
