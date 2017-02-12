import React from 'react'

export default ({id, text, choises, radioSelected, handleRadioChange}) => (
  <div className={radioSelected[id] ? 'classChecked' : 'classNotChecked'}>
    <p className='question'>{id}. {text}</p>
    {choises.map(c => {
      return (
        <span className='choiseBox' key={id + c.score} name={id} onClick={handleRadioChange} value={c.score}>
          <i className={radioSelected[id] && radioSelected[id].score === c.score ? 'material-icons checked-' + c.color : 'material-icons'}>{radioSelected[id] && radioSelected[id].score === c.score ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
          <span className='choiseText'>{c.text}</span>
        </span>
      )
    })}
  </div>
)
