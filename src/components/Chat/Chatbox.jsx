import React from 'react'
import { SendOutlined,FileAddOutlined,FileImageOutlined } from '@ant-design/icons'

const Chatbox = () => {
  return (
    <div className='input' >
        <input type="text" placeholder='Type something...'/>

        <div className="send">
            <FileImageOutlined />
            <input type='file' style={{display:'none'}} id='file'/>
            <label htmlFor='file'>
                <FileAddOutlined />
            </label>
            <SendOutlined />
        </div>
    </div>
  )
}

export default Chatbox