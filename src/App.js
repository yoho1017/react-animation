import React, { useRef, useEffect, useState } from 'react'
import coinPlay from './lib/gsapScript'
import coin from './imgs/coin.png'
import './App.css'
import { gsap } from 'gsap'

function App() {
  const headerRef = useRef(null)
  const [background, setBackground] = useState('rgb(255, 255, 255)')
  const toggleBackground = () => {
    const color = background !== 'rgb(255, 255, 255)' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
    setBackground(color)
  }

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 1,
      backgroundColor: background,
      ease: 'none'
    })
  }, [background])

  useEffect(() => coinPlay(), [])
  return (
    <div className="App">
      <div className="header-black" ref={headerRef}>
        <div id="coinBlack">
          <img id="coin" src={coin} alt="coin"></img>
        </div>
        <button onClick={() => toggleBackground()}>change background</button>
      </div>
    </div>
  )
}

export default App
