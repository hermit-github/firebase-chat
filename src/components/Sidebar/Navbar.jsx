import React from 'react'
import { LogoutOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>H3RMIT Chat</span>
        <div className='user'>
            <img alt='user img' src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            <span>John</span>
            <LogoutOutlined className='logout' style={{cursor:'pointer'}} />
        </div>
    </div>
  )
}

export default Navbar