import React from 'react'
import Counter from './components/Counter'
import { useState } from 'react'

const AppCounter = () => {
    const [totalCount, setTotalCount] = useState(0)

    const onClickTotalPlus = () => {
        setTotalCount(totalCount + 1)
    }


  return (
    <div>
        <span>
          Total Count : {totalCount} { totalCount >10 ? 'FIRE' : 'Drrrrr!'}
        </span>
        <Counter onClickTotalPlus={onClickTotalPlus}/>
        <Counter onClickTotalPlus={onClickTotalPlus}/>
    </div>
  )
}

export default AppCounter;

