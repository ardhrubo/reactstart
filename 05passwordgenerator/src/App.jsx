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
    <>
      <h1 className='bg-red-400 p-3 m-3 text-center'> Setup is ready </h1>

    </>
  )
}

export default App
