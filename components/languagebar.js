import React from 'react'

export default ({switchLanguage, selectedLanguage, languages}) => (
  <div>
    Language:
    {languages.map(l => {
      return (
       <span key={l} name={l} onClick={switchLanguage} className={selectedLanguage === l ? 'langSelected' : 'lang'}>{l}</span>
      )
    })}
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
