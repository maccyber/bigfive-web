import React from 'react'
const countries = require('country-list')()

export default ({ handleChange, country }) => (
  <span className='choiseBox'>
    <p className='question'>
      Nationality
    </p>
    <select name='country' className='countries' onChange={handleChange}>
      {countries.getData().map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
    </select>
    <style>
      {`
        .countries {
          font-size: 24px;
          background-color: #fff;
          color: #828282;
        }
      `}
    </style>
  </span>
)
