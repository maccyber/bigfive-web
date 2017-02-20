import React from 'react'

export default ({ prevPage, previous, submitDisabled }) => (
  <p>
    <button type='button' className='navButton navButtonBack' onClick={prevPage} disabled={!previous}>
      <i className='material-icons' style={{ fontSize: '40px' }}>
        navigate_before
      </i>
    </button>
    <button className='navButton' type='submit' disabled={submitDisabled}>
      <i className='material-icons' style={{ fontSize: '40px' }}>
        navigate_next
      </i>
    </button>
  </p>
)
