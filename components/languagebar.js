import React from 'react'

export default ({ switchLanguage, selectedLanguage, languages }) => (
  <div>
    Language:
    {
      languages.map(l =>
        <span key={l} name={l} onClick={switchLanguage} className={selectedLanguage === l ? 'languageSelected' : 'language'}>
          {l}
        </span>
      )
    }
    <style>
      {`
        .language {
          padding: 5px;
          cursor: pointer;
          margin-left: 4px;
        }
        .languageSelected {
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
