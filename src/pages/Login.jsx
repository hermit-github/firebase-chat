import React from 'react'
import Add from "../images/addAvatar.png"

const Login = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <div className='form-header'>
          <span className='title'>H3RMIT Chat</span>
          <span className='logo'>Login</span>
        </div>
          <form className='register-from'>
            <input type='email' placeholder='Input Email'/>
            <input type='password' placeholder='Input Password'/>
            <button className='register-button'>Sign in</button>
          </form>
          <p>Don't have an account? Sign up</p>
      </div>
    </div>
  )
}

export default Login