import React from 'react'

const HighlightCard = ({children, number,text}) => {
  return (
    <div className='highlight-card'>
        <div>
            {children}
        </div>
        <div>
            <h2 className="">{number}</h2>
            <h5 className="">{text}</h5>
        </div>
    </div>
  )
}

export default HighlightCard