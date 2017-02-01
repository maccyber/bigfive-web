import React from 'react'

export default ({id, text, choises, handleRadioChange}) => (
  <div onChange={handleRadioChange}>
    <p className='question'>{id}. {text}</p>
    {choises.map(c => {
      return (
        <span key={id+c.val}><input name={id} type='radio' value={c.val} required /><label>{c.text}</label></span>
      )
    })}
  </div>
)
