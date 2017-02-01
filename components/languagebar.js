import React from 'react'

export default ({switchLanguage, selectedLanguage}) => (
  <div>
    Language:
    <span name='no' onClick={switchLanguage} className='lang' style={{ backgroundColor: selectedLanguage === 'no' ? '#e6e6e6' : '' }}>no</span>
    <span name='en' onClick={switchLanguage} className='lang' style={{ backgroundColor: selectedLanguage === 'en' ? '#e6e6e6' : '' }}>en</span>
    <style>
      {`
        .lang {
          padding: 2px;
          cursor: pointer;
          margin-left: 4px;
        }      
    `}
    </style>
  </div>
)
