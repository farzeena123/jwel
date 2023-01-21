import React from 'react'
import BanglesData from '../Data.js/BanglesData'
import {Card,Button} from 'react-bootstrap'
import {useCart} from 'react-use-cart';
import {CartProvider} from 'react-use-cart';

function Bangles() {
  const {addItem}=useCart();

    const cardItem=(item)=>{
        return(
          <CartProvider>
            <Card className='m-4' style={{ width: '15rem'}}>
       <div style={{ height: '210px', textAlign: 'center' }}>
      <Card.Img variant="top" style={{ marginTop: '10px' }} src={item.img} />
      </div>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.desc}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Button variant="primary" className='btn btn-light' style={{borderColor:'black'}} onClick={()=>addItem(item)}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </CartProvider>
        )
    }
  return (
    <>{BanglesData.Data.map(cardItem)}</>
  )
}



export default Bangles