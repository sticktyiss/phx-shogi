import React from 'react'
import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../store/authContext'

const AddPost = () => {
  const {token,userId} = useContext(AuthContext)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    axios.post('/posts', {title, text, userId}, {
      headers: {
        authorization: token
      }
    })
    .then(() => {
      navigate('/posts')
    })
    .catch(theseHands => console.log('add post failed', theseHands))
  }

  return (
    <main>
      <NavLink className='addPostRender' to='/posts'>Cancel</NavLink>
      <form className='addPostForm' onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Title'
        value={title} 
        onChange={e => setTitle(e.target.value)}
        className='addPostTitle'
        />
        <textarea type='text'
        placeholder='What do you want to post?..'
        value={text} 
        onChange={e => setText(e.target.value)}
        className='addPostText'
        />
        <button className='addPostButton'>Submit</button>
      </form>
    </main>
  )
}

export default AddPost