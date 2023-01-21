import React from 'react'
import { Navbar,Nav,Container, NavDropdown,Image } from 'react-bootstrap'
import { CartFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import {useCart} from 'react-use-cart'
import logo from '../assets/logo192.jpg'

function Header() {
  const {totalUniqueItems}=useCart()
  return (
    <div>
       <Navbar style={{backgroundColor:'rgb(224, 218, 211)'}} variant="light">
        <Container style={{height:'50px'}}>
           <Image src={logo} style={{width:'25px'}}  />
          <Navbar.Brand ><Link to='/'  style={{textDecoration:'none' ,color:'black',fontFamily:'WindSong'}}>Jwel</Link></Navbar.Brand>
          <Nav className="m-auto">
            <Nav.Link ><Link to='/' style={{textDecoration:'none' ,color:'GrayText'}} >HOME</Link></Nav.Link>
            <Nav.Link><Link to='/about'  style={{textDecoration:'none' ,color:'GrayText'}}> ABOUT</Link></Nav.Link>
           <NavDropdown className="m-auto" style={{textDecoration:'none' ,color:'GrayText'}} title="PRODUCTS" id="nav-dropdown">
        <Link to='/pendant'><NavDropdown.Item eventKey="4.1"><Link to='/pendant' style={{textDecoration:'none' ,color:'GrayText'}}>PENDANT</Link></NavDropdown.Item></Link>
        <NavDropdown.Item eventKey="4.2"><Link to='/earrings' style={{textDecoration:'none' ,color:'GrayText'}} >EARRINGS</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"><Link to='/bangles' style={{textDecoration:'none' ,color:'GrayText'}}>BANGLES</Link></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"><Link to='/rings' style={{textDecoration:'none' ,color:'GrayText'}}>RINGS</Link></NavDropdown.Item>
      </NavDropdown>
            </Nav>
            
          <Nav>
            <Link to='/cart' style={{color:'black'}}><CartFill size={20}/></Link>
            <span className='rounded-circle' style={{width:'15px',height:'20px',backgroundColor:'black',color:'white',marginTop:'5px',paddingLeft:'3px'}} >{(totalUniqueItems)}</span>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
