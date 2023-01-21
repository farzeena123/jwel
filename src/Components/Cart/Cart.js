import React, { useState } from 'react'
import Header from '../Header'
import {useCart} from 'react-use-cart'
import {TrashFill,EmojiSmileUpsideDownFill} from 'react-bootstrap-icons'
import Register from '../Registeration/Register';

function Cart() {
    const [modalShow, setModalShow] = useState(false);
    const {isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart}=useCart();
    if(isEmpty) return ( <><Header/> <h4  style={{paddingLeft:'580px',paddingTop:'200px'}}> Your Cart is Empty<EmojiSmileUpsideDownFill/></h4>  </>)
  return (
    <>
    <Header/>
    <section className="h-100 h-custom" style={{backgroundColor: 'rgb(220, 218, 210)'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{borderRadius: '15px'}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    
                  </div>
                  <hr className="my-4" />
                   { items.map((item,index)=>{
                     return(
                   
                  <div  key={index} className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={item.img}
                        className="img-fluid rounded-3" alt="Cotton T-shirt" />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">{item.title}</h6>
                      <h6 className="text-black mb-0">{item.desc}</h6>
                      
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">$ {item.price}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                             <button className='btn '><h6 className="text-black mb-0">{item.quantity}</h6></button>
                          <button className='btn btn-dark ' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                          <button className='btn btn-dark ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity+1)} >+</button>
                          <button className='btn btn-danger ms-2' onClick={()=>removeItem(item.id)} ><TrashFill size={20} /></button>
                    </div>

                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                    </div>
                  </div>
                     )
                   })
                   }

                  <hr className="my-4"/>

                  <div className="pt-5">
                
                        <button className='btn' onClick={()=>emptyCart()} >Clear cart</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4" />

                  

                  <h5 className="text-uppercase mb-3">Shipping</h5>

                  <div className="mb-4 pb-2">
                    <select className="select">
                      <option value="1">Normal-Delivery- $5.00</option>
                      <option value="2">Fast-Delivery- $10.00</option>
   
                    </select>
                  </div>

                  <h5 className="text-uppercase mb-3">Give code</h5>

                  <div className="mb-5">
                    <div className="form-outline">
                      <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Examplea2">Enter your code</label>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total Items</h5>
                    <h5> {(totalItems)}</h5>
                  </div>

                  <hr className="my-2" />

                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>$ {(cartTotal)}</h5>
                    
                  </div>

                  <button type="button" className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark"  onClick={() => setModalShow(true)}  >Register</button>
                     <Register
                  show={modalShow}
                    onHide={() => setModalShow(false)}
                       />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
 
</section>
    </>
  )
}

export default Cart