import React from 'react'

export default ({id, text, choises, radioSelected, handleRadioChange}) => (
  <div className={radioSelected[id] ? 'classChecked' : 'classNotChecked'}>
    <p className='question'>{id}. {text}</p>
    {choises.map(c => {
      return (
        <span className='choiseBox' key={id + c.value} name={id} onClick={handleRadioChange} value={c.value}>
          <i className={radioSelected[id] && radioSelected[id].value === c.value ? 'material-icons checked-' + c.value : 'material-icons'}>{radioSelected[id] && radioSelected[id].value === c.value ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
          <span className='choiseText'>{c.text}</span>
        </span>
      )
    })}
  </div>
)
