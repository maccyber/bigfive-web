import React from 'react'

export default ({ handleChange, age }) => (
  <span>
    <p className='question'>
      Age
    </p>
    <input name='age' onChange={handleChange} className='age' type='text' placeholder='Age' pattern='\d*' maxLength='2' min='10' max='100' />
    <style>
      {`
        .age {
          font-size: 24px;
          background-color: #fff;
          color: #828282;
          width: 64px;
        }
      `}
    </style>
  </span>
)
