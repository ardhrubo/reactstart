import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {   
    name: "Dhrubo",   
    age: 25,   
    address: {     
      city: "Dhaka",     
      country: "Bangladesh"   
    }
  }
let newArr = [1,2,3,4,5,6,7,8,9,10]

  return (
    <>
    
      <div className='text-3xl bg-violet-500 p-3 rounded-md'> Vite with tailwindcss</div>
      <Card userName="Dhrubo" myArrr={newArr}/>
      <Card userName = "Tanvir" userDesignation= "Staff Engineer" />
      <Card />
      <Card />


      
    </>
  )
}

export default App




