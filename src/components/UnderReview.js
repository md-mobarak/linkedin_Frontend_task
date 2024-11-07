import React from 'react'

import './InComplete.css'
import CardList from './CardList'

function UnderReview({tasks}) {
  return (
    <div className='container'>
    <div className='incomplete-child'>
    <p className='capsule'>  <span className='capsule-text'>Under Review</span></p>
    <div className='zero-div'><p >{tasks?.length}</p></div>
    </div>
    <div className='capsule-container'>
          {
            tasks.map((card)=> <CardList card={card}></CardList>)
          }
            
        </div>
</div>
  )
}

export default UnderReview