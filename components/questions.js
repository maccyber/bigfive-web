import React from 'react'

export default ({id, text, choises, radioSelected, handleRadioChange}) => (
  <div className={radioSelected[id] ? 'checked' : 'notchecked'}>
    <p className='question'>{id}. {text}</p>
    {choises.map(c => {
      return (
        <span className='choiseBox' key={id + c.val} name={id} onClick={handleRadioChange} value={c.val}>
          <i className='material-icons'>{parseInt(radioSelected[id]) === c.val ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
          <span className='choiseText'>{c.text}</span>
        </span>
      )
    })}
  </div>
)
