import React from 'react'

export default ({ progress }) => (
  <div className='progress' style={{ color: progress > 52 ? '#fff' : '#828282' }}>
    <span className='percent'>
      {progress}%
    </span>
    <div style={{width: progress + '%'}} className='bar' />
    <style>
      {`
        .progress {
          background-color: #f1f1f1;
          padding: 3px;
          margin-top: 3%;
        }
        .percent {
          position: absolute;   
          left: 50%;
        }
        .bar {
          height: 20px;
          background-color: #94d696;
          transition: width 2s;
        }
      `}
    </style>
  </div>
)
