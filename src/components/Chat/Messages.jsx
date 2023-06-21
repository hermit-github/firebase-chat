import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
        <div className="message-info">
            <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='user'/>
            <span>just now</span>
        </div>
        <div className="message-content">
            <p>hello</p>
            <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=''/>
        </div>
    </div>
  )
}

export default Message