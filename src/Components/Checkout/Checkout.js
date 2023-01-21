import React, { useState } from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap';
import Header from '../Header'
import {useCart} from 'react-use-cart';
import PayPal from '../PayPal/PayPal';

function Checkout() {
  const {cartTotal}=useCart();
  const [checkout,setCheckout]=useState('')
  
  return (
    <>
    <Header/>
    <Container className='p-4'>
        <Row >
            <Col md={6}><h4 className="mb-3">Billing address</h4><hr/>
          <form className="needs-validation" >
            <div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text"    className="form-control" id="firstName" placeholder=""    required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text"    className="form-control" id="lastName" placeholder=""  required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text"     className="form-control" id="username" placeholder="Username" required />
                <div className="invalid-feedback" style={{width: '100%'}}>
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email"     className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">
                Please enter a valid email address htmlFor shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input type="text"     className="form-control" id="address" placeholder="1234 Main St" required />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text"     className="form-control" id="address2" placeholder="Apartment or suite" />
            </div>

            <hr className="mb-4" />
             </div>
             </form>
             </Col>
             <Col> <h4 className="mb-3">Payment</h4>
             <hr/>
             

             <h4> Total Amount: ${(cartTotal)}</h4>
               <hr/>
             
               {
                    checkout ?  (
                      <PayPal/> 
                  ) :(  
              <Button type="submit" className="btn btn-success" style={{marginLeft:'5px'}} onClick={() => {setCheckout(true)}}  >
                Continue to checkout
              </Button>  )}
               </Col>
            
          </Row> 
          </Container>
          </>
  )
}

export default Checkout;