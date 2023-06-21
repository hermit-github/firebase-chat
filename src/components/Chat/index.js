import React from 'react'
import { VideoCameraFilled,PhoneFilled,ProfileFilled } from '@ant-design/icons'
import ChatArea from './ChatArea'
import Chatbox from './Chatbox'

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
      <ChatArea/>
      <Chatbox/>
    </div>
  )
}

export default Chat