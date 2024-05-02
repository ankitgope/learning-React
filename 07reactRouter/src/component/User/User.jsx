import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams()
  return (
    
    <div className='bg-red-600 h-screen w-screen' >
      User: {userId}
    </div>
  )
}

export default User
