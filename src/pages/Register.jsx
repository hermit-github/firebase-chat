import React from 'react'
import Add from "../images/addAvatar.png"

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    // const file = e.target[3].files[0]


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
      // ..
    });
  }

  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <div className='form-header'>
          <span className='title'>H3RMIT Chat</span>
          <span className='logo'>Register</span>
        </div>
          <form className='register-from' onSubmit={handleSubmit}>
            <input type='text' placeholder='Display Name'/>
            <input type='email' placeholder='Input Email'/>
            <input type='password' placeholder='Input Password'/>
            <input  style={{display:'none'}} type='file' id='file' />
            <label htmlFor='file'>
              <img src={Add} alt='Add Avatar'/>
              <span>Add avatar</span>
            </label>
            <button className='register-button'>Sign up</button>
          </form>
          <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register