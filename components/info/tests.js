import React from 'react'

const tests = [
  {
    id: '120',
    text: "(Recommended) 120 questions (Johnson's IPIP NEO-PI-R)",
    active: true
  },
  {
    id: '100',
    text: "Costa and McCrae's NEO-PI-R (100 questions)",
    active: true
  },
  {
    id: '50',
    text: "Costa and McCrae's NEO-PI-R (50 questions)",
    active: true
  },
  {
    id: '20',
    text: 'Mini-IPIP 5-factors (20 questions)',
    active: true
  },
  {
    id: 'hexaco',
    text: "Lee and Ashton's HEXACO-PI (240 questions) (EXPERIMENTAL)",
    active: false
  }
]

export default ({ switchTest, selectedTest }) => (
  <span>
    <p className='question'>
      Choose test:
    </p>
    {
      tests.map(t =>
        <span
          key={t.id}
          id={t.id}
          onClick={switchTest}
          className={
            selectedTest === t.id ? 'testSelected' : t.active ? 'tests' : 'tests testInactive'
          }
        >
          {t.text}
          <br />
        </span>
      )
    }
    <style>
      {`
        .tests {
          padding: 5px;
          cursor: pointer;
          margin-left: 4px;
          line-height: 30px;
        }
        .testInactive {
          color: #b1b1b1;
          font-style: italic;
          cursor: not-allowed;
        }          
        .testSelected {
          font-weight: bold;
          padding: 2px;
          cursor: pointer;
          margin-left: 4px;
          line-height: 30px;
          border-radius: 10px;
          padding: 5px;
          background-color: #e6e6e6;
        }

      `}
    </style>
  </span>
)
