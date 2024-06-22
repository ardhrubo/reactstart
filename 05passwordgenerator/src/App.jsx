import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  return (


<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-4 my-4 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          placeholder='Password'
          className='p-3 w-full bg-white-800 text-orange-500 outline-none py-1 px-3'
          readOnly
          value={password}
          
        />
        <button onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}} className='bg-orange-500 hover:bg-orange-700 p-3 text-white'>
          Copy
        </button>
      </div>

      <div className='flex text-sm text-orange-500 item-center gap-x-3'>
        <div className='flex text-center  gap-x-1'>
          <input
            type='range'
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=''
            id=''
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        
      <div className='flex text-center gap-x-1'>
        <input
          type='checkbox'
          id='number'
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed((prev)=>!prev)}
        />
        <label htmlFor='number'>Numbers{numberAllowed}</label>   
        </div>

        <div className='flex text-center gap-x-1'>
        <input
          type='checkbox'
          checked={characterAllowed}
          onChange={(e) => setCharacterAllowed((prev)=>!prev)}
        />
        <label htmlFor='character'>Character{characterAllowed}</label>   
        </div>

        </div>
    </div>
  )
}

export default App
