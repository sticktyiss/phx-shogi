import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../store/authContext'

const Posts = () => {
  // const {userId} = useContext(AuthContext)
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    axios.get('/posts')
    .then(res => {
        setPosts(res.data)
    })
    .catch(theseHands => {
      console.log(theseHands)
    })
  }, [])

  const mappedPosts = posts.map(post => {
    return(
      <div key={post.id} className='postCard'>
        <h2>{post.postTitle}</h2>
      </div>
    )
  })

  return mappedPosts.length >= 1 ? (
    <main>

    </main>
  )
}

export default Posts