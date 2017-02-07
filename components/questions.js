import React from 'react'

export default ({id, text, choises, radioSelected, domain, facet, handleRadioChange}) => (
  <div className={radioSelected[id] ? 'classChecked' : 'classNotChecked'}>
    <p className='question'>{id}. {text}</p>
    {choises.map(c => {
      return (
        <span className='choiseBox' key={id + c.value} name={id} onClick={handleRadioChange} value={c.value}>
          <input type='hidden' id={'d' + id} value={domain} />
          <input type='hidden' id={'f' + id} value={facet} />
          <i className={parseInt(radioSelected[id]) === c.value ? 'material-icons checked-' + c.value : 'material-icons'}>{parseInt(radioSelected[id]) === c.value ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
          <span className='choiseText'>{c.text}</span>
        </span>
      )
    })}
  </div>
)
