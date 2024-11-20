import { useState } from 'react'
import './App.css'
import { HeaderComponents } from './components/Header'
import { SectionComponents } from './components/Section'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="bg-gray-900 w-full h-screen">
        <div>
            <HeaderComponents/>
        </div>
        <div>
            <SectionComponents/>
        </div>
        
    </div>
    </>
  )
}


