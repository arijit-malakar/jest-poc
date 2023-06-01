import { useState } from 'react'

export default function CheckboxButton() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className='my-4'>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className='me-2'
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
      <button
        disabled={isChecked}
        className='ms-4'
        style={
          isChecked
            ? { backgroundColor: 'black', color: 'gray', border: 0, cursor: 'not-allowed' }
            : {}
        }
      >
        Button
      </button>
    </div>
  )
}
