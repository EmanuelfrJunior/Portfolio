import { useState } from 'react'
import './App.css'
import { HeaderComponents } from './components/Header'
import { SectionComponents } from './components/Section'
import { FooterComponents } from './components/footer'



export function App() {
 

  return (
    <>
    
    <div className="bg-gray-900 w-full h-screen">
        <div>
            <HeaderComponents/>
        </div>
        <div>
            <SectionComponents/>
        </div>
        <div>
          <FooterComponents/>
        </div>
    </div>
    </>
  )
}


