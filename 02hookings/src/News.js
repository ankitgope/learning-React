import React from 'react'
import { useState } from 'react'
function News() {
    const [counter , setCounter] = useState(0)
     let positiveClick = ()=>{
         setCounter(counter+1)  
     }
     let negetiveClick=()=>{
        setCounter(counter-1)

     }
    return (
        <div>
            <button onClick={positiveClick}>
                positive // 
            </button>
                <br/>
            <button onClick={negetiveClick}>
                negetive //
            </button>
            <br/>

            <input
                type="text"
                value={counter}
                //onChange={handleChange}
                style={{ width: '50px', textAlign: 'center' }}
            />
        </div>
    )
}

export default News
