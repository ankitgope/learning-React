import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=  useContext( UserContext)
  // conditional creturn we are using 

 // if the user is new and previously not a user  
  if(!user) return <div>please login</div>
// existing user
  return <div>welcome {user.username}</div>
}

export default Profile
