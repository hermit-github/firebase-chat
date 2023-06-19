import React from "react";

const ChatList = () => {
  return (
    <div className="chat-list">
      <div className="user-chat">
        <img
          alt="user img"
          src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <div className="user-chat-info">
          <span>Jacob</span>
          <p>Hello There!</p>
        </div>
      </div>
      <div className="user-chat">
        <img
          alt="user img"
          src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <div className="user-chat-info">
          <span>Jacob</span>
          <p>Hello There!</p>
        </div>
      </div>
      <div className="user-chat">
        <img
          alt="user img"
          src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <div className="user-chat-info">
          <span>Jacob</span>
          <p>Hello There!</p>
        </div>
      </div>
      
    </div>
  );
};

export default ChatList;
