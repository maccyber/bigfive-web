import React from 'react'
import TestInfo from './test-info'
import Age from './age'
import Gender from './gender'
import Countries from './countries'

export default ({ gender, age, country, handleChange, buttonSubmitDisabled, buttonSubmit, hideMain, loading }) => (
  <div style={{ display: hideMain && !loading ? 'block' : 'none' }}>
    <TestInfo />
    <Age handleChange={handleChange} age={age} />
    <Gender handleChange={handleChange} gender={gender} />
    <Countries handleChange={handleChange} country={country} />
    <span>
      <p style={{marginTop: '50px'}}>
        <button className='navButton' onClick={buttonSubmit} disabled={buttonSubmitDisabled}>
          <i className='material-icons' style={{ fontSize: '40px' }}>navigate_next</i>
        </button>
      </p>
    </span>
  </div>
)
