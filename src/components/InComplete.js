import React from 'react'
import './InComplete.css'
import CardList from './CardList'

function InComplete() {
  return (
    <div className='container'>
        <div className='incomplete-child'>
        <p className='capsule'>  <span className='capsule-text'>incomplete</span></p>
        <div className='zero-div'><p >0</p></div>
        </div>
        <div className='capsule-container'>
            <CardList></CardList>
        </div>
    </div>
  )
}

export default InComplete