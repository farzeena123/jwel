import React, { useEffect, useState } from 'react'
import './Register.css'
import { Modal } from 'react-bootstrap';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../../Firebase/Config';
import { Link } from 'react-router-dom';

function Register(props) {
    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState('')

  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name)
  }
  const register=async()=>{
    try{
   const user= await createUserWithEmailAndPassword(auth,email,password);
   console.log(user)
   }catch(error){
    console.log(error.message)
    alert(error.message)
   }if(user){
    alert('Registered Successfully!')
   }
  }

    return (
      <Modal
      className="special_modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">
            REGISTER HERE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <div className="row mt-3">
                        <div className="col-md-6">
                            <label className="mb-0"><h6 className="mb-0 text-sm">Full Name</h6></label>
                            <input  value={name} onChange={(e)=>setName(e.target.value)} type="text" name="fname" placeholder="Name"/>
                        </div>
                        <div className="col-md-6">
                            <label className="mb-0"><h6 className="mb-0 text-sm">Username</h6></label>
                            <input type="text" name="uname"  value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                        </div>
                    </div>
                    <div className="row px-3">
                        <label className="mb-0"><h6 className="mb-0 text-sm">Email Address</h6></label>
                        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Email Id"/>
                    </div>
                    <div className="row px-3">
                        <label className="mb-0"><h6 className="mb-0 text-sm">Password</h6></label>
                        <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                    </div>
                    <div className="row px-3 mb-3">
                        <small className="text-muted">By signing up, you agree our <a href="" className="text-primary">Terms of services</a> and <a href="" className="text-primary">Privacy Policy</a></small>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <button  onSubmit={handleSubmit} onClick={register}  className="btn btn-dark text-center mb-1 py-2">Create Account</button>
                            <button className='btn btn-success text-center  m-2 '  > <Link to='/checkout' style={{textDecoration:'none',color:'white'}}>Continue</Link></button>

                        </div>
                        
                    </div>
        </Modal.Body>
       
      </Modal>
    );
  }
  



export default Register