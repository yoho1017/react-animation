import React from 'react'
import './css/App.css'
import { BackgroundToggleExample } from './lib/gsap3/component/BackgroundToggleExample'
import { StreamerButtonsExample } from './lib/gsap3/component/StreamerButtonsExample'
import { CoinParticlesExample } from './lib/gsap3/component/CoinParticlesExample'
import { BallsMousemoveExample } from './lib/gsap3/component/BallsMousemoveExample'
import { Header } from './lib/framerMotion/component/framerComponent'

function App() {
  return (
    <div className="App">
      <BackgroundToggleExample />
      <StreamerButtonsExample />
      <CoinParticlesExample />
      <BallsMousemoveExample />
      <Header />
    </div>
  )
}

export default App
