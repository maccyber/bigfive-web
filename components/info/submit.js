import React from 'react'

export default ({ buttonSubmit, buttonSubmitDisabled }) => (
  <span>
    <p style={{marginTop: '50px'}}>
      <button className='navButton' onClick={buttonSubmit} disabled={buttonSubmitDisabled}>
        <i className='material-icons' style={{ fontSize: '40px' }}>navigate_next</i>
      </button>
    </p>
  </span>
)
