import React from 'react'
import Add from "../images/addAvatar.png"

const Register = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <div className='form-header'>
          <span className='title'>H3RMIT Chat</span>
          <span className='logo'>Register</span>
        </div>
          <form className='register-from'>
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