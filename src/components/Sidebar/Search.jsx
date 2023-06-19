import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='find a user'/>
      </div>

      <div className='user-chat'>
        <img alt='user img' src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
        <div className='user-chat-info'>
          <span>Jacob</span>
        </div>
      </div>
    </div>
  )
}

export default Search