import React from 'react'
// using props for having different value in different cards 
//  and props is the by default name 
//  props are empty objects
// instead of  writing  function Card(props) we can write directly  function Card({UserName}) so that we dont have to write props.userName every where  
function Card({userName, btnText="visit me"}) {
    //console.log("props", props) for printing whats inside props which is an empty objects
    //console.log(props.userName)
    
     console.log(userName)

    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    {/* inserting the udserName object in the place of Name using props above */}
    <h1 className="text-lg font-semibold text-white">{userName}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText || "visit me"}
      {/* {btnText || "visit me"} visit me will be used when if the prop btnText will not pass in the App.jsx part but due to redability issue  */}
    </button>
  </div>
</div>
    )
}

export default Card
