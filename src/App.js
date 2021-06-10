import React from 'react'
import './css/App.css'
import { BackgroundToggleExample } from './components/gsap3/BackgroundToggleExample'
import { StreamerButtonsExample } from './components/gsap3/StreamerButtonsExample'
import { CoinParticlesExample } from './components/gsap3/CoinParticlesExample'
import { BallsMousemoveExample } from './components/gsap3/BallsMousemoveExample'
import { SvgPathMovement, SphereDeformation } from './components/framerMotion/framerComponent'

function App() {
  return (
    <div className="App">
      <BackgroundToggleExample />
      <StreamerButtonsExample />
      <CoinParticlesExample />
      <BallsMousemoveExample />
      <SvgPathMovement />
      <SphereDeformation />
    </div>
  )
}

export default App
