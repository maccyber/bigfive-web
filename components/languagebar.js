import React from 'react'

export default ({switchLanguage, selectedLanguage}) => (
  <div>
    Language:
    <span name='en' onClick={switchLanguage} className={selectedLanguage === 'en' ? 'langSelected' : 'lang'}>en</span>
    <span name='no' onClick={switchLanguage} className={selectedLanguage === 'no' ? 'langSelected' : 'lang'}>no</span>
    <style>
      {`
        .lang {
          padding: 5px;
          cursor: pointer;
          margin-left: 4px;
        }
        .langSelected {
          font-weight: bold;
          padding: 2px;
          cursor: pointer;
          margin-left: 4px;
          border-radius: 10px;
          padding: 5px;
          background-color: #e6e6e6;
        }
    `}
    </style>
  </div>
)
