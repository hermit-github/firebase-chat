import React from 'react'
import { VideoCameraFilled,PhoneFilled,ProfileFilled } from '@ant-design/icons'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>Jacob</span>
        <div className="chat-icons">
          <VideoCameraFilled />
          <PhoneFilled />
          <ProfileFilled />
        </div>
      </div>
    </div>
  )
}

export default Chat