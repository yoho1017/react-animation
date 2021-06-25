import React from 'react'
import './css/App.css'
import { BackgroundToggleExample } from './components/gsap3/BackgroundToggleExample'
import { StreamerButtonsExample } from './components/gsap3/StreamerButtonsExample'
import { CoinParticlesExample } from './components/gsap3/CoinParticlesExample'
import { BallsMousemoveExample } from './components/gsap3/BallsMousemoveExample'
import { SphereDeformation } from './components/framerMotion/framerComponent'
import { Navigation } from './components/framerMotion/Navigation'
import {Styleds} from './components/framerMotion/StyledComponent'
function App() {
  return (
    <div className="App">
      <BackgroundToggleExample />
      <StreamerButtonsExample />
      <CoinParticlesExample />
      <BallsMousemoveExample />
      <SphereDeformation />
      <Navigation />
      <Styleds/>
    </div>
  )
}

export default App
