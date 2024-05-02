import React, { useEffect, useState } from 'react'

function Github() {
  const[data,setData]=useState([])
  //calling API when the component loads which use useEffect\
  useEffect(()=>{
    fetch('https://api.github.com/users/ankit-gope')
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      setData(data)
    })
  },[])
  return (
    <div className='
    bg-yellow-500 w-screen h-screen'>
      {/* we need to study api in console log for this {data.name} data  */}
      Github Name:{data.name}
      <br />
      Github Followers:{data.followers}
      <br />
      Github ID:{data.id}
      <img src={data.avatar_url} alt="git picture"
      width={300} />
    </div>
  )
}

export default Github
