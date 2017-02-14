import React from 'react'

export default ({loading}) => (
  <span style={{display: loading ? 'block' : 'none'}} className='loading'>
    <p>
      <img src='static/loading.svg' style={{width: 100}} />
    </p>
    <p>
      <big>LOADING ...</big></p>
    <style>
      {`
      .loading {
        text-align: center;
      }
    `}
    </style>
  </span>
)
