import React, { useState } from 'react'
import './Counter.css'

const Counter = ({onClickTotalPlus}) => {

  const [count, setCount] = useState(0)

  const onClickCountPlus = () => {
      setCount(count+1)
    }

  
  return (
    <div className='container'>
        <span>{count}</span>
        <button onClick={()=>{onClickCountPlus(); onClickTotalPlus(); }}>+</button>

    </div>
  )
}

export default Counter