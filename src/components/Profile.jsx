import React from 'react'
import { useState, useEffect, useContext } from 'react'
import AuthContext from '../store/authContext'
import axios from 'axios'

const Profile = () => {
  const {userId} = useContext(AuthContext)
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    axios.get(`/api/userposts/${userId}`)
    .then(res => {
      console.log(res.data)
    })
    .catch (theseHands => console.log('getUserPosts Error:', theseHands))
  })

  return (
    <main>
      <h2></h2>
    </main>
  )
}

export default Profile