import React from 'react'
const countries = require('country-list')()

export default ({loading}) => (
  <div>
    <form>
      <p className='question'>Information</p>
    By taking the test you are agreeing that the input you provide will be saved and used for statistics.
    <ul>
      <li className='infoText'>
        Answer honestly, even if you don't like the answer.
      </li>
      <li className='infoText'>
        Describe yourself as you generally are now, not as you wish to be in the future.
      </li>
      <li className='infoText'>
        Compare yourself in relation to other people of the same sex and roughly the same age.
      </li>
      <li className='infoText'>
        Your spontaneous answer is usually the most accurate.
      </li>
    </ul>
      <p className='question'>Age</p>
      <input name='age' className='age' type='text' placeholder='Age' pattern='\d*' maxLength='2' min='10' max='100' />
      <p className='question'>Gender</p>
      <span className='choiseBox'>
        <i name='female' className='material-icons checked-female'>radio_button_checked</i>
        <span className='choiseText'>Female</span>
        <i name='male' className='material-icons checked-male'>radio_button_unchecked</i>
        <span className='choiseText'>Male</span>
      </span>
      <span className='choiseBox'>
        <p className='question'>Nationality</p>
        <select className='countries'>
          {countries.getData().map(country => {
            return (
              <option key={country.code} value={country.code}>{country.name}</option>
            )
          })}
        </select>
      </span>
      <span>
        <p style={{marginTop: '50px'}}>
          <button className='navButton' type='submit'>
            <i className='material-icons' style={{ fontSize: '40px' }}>navigate_next</i>
          </button>
        </p>
      </span>
    </form>
    <style>
      {`
      .age {
        font-size: 24px;
        background-color: #fff;
        color: #828282;
        width: 64px;
      }
      .countries {
        font-size: 24px;
        background-color: #fff;
        color: #828282;
      }
      .checked-female {
        color: #dfa7e8;
      }
      .checked-male {
        color: #a7cfe8;
      }
      .infoText { padding-bottom: 8px; }
      .navButton {
         background-color: #94d696;
         border-radius: 5px;
         border: transparent;
         color: white;
         margin-right: 10px;
       }
       .question {
         font-size: 28px;
         margin-bottom: 10px;
       }
       .choiseText {
         line-height: 24px;
         padding: 4px;
         vertical-align: top;
       }
    `}
    </style>
  </div>
)
