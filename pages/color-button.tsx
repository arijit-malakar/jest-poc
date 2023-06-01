import { useState } from 'react';
import convertPascalCaseToSeparateWords from '@/utils/convertPascalCaseToSeparateWords';

export default function ColorButtonPage() {
  const [color, setColor] = useState('Crimson');
  const newColor = color === 'Crimson' ? 'MidnightBlue' : 'Crimson';

  return (
    <div className='my-4'>
      <button
        style={{
          backgroundColor: color,
        }}
        onClick={() => setColor(newColor)}
      >
        Change to {convertPascalCaseToSeparateWords(newColor)}
      </button>
    </div>
  )
}
