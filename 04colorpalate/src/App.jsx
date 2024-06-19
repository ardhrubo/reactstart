import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState('indigo')



  return (
 
    <div className='w-full h-screen bg-black duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor('red')} className='outline-none px-4 py-1 bg-red-600 rounded-full shadow-lg text-white font-bold '>Red</button>
          <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 bg-green-600 rounded-full shadow-lg text-white font-bold '>Green</button>
          <button onClick={()=> setColor('blue')}  className='outline-none px-4 py-1 bg-blue-600 rounded-full shadow-lg text-white font-bold '>Blue</button>
        </div>
      
      </div>
    
    </div>

  )
}

export default App
