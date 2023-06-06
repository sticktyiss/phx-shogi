import React from 'react'
import AddComment from './AddComment'
import { useState, useEffect } from 'react'

const ShowComments = ({comments}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get('')
  })

  return (
    <div>
      <AddComment />
    </div>
  )
}

export default ShowComments