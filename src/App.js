import React from 'react'
import button03_off from './imgs/button03_off.png'
import './css/App.css'
import  {Bnt01Example,Bnt02Example,Bnt03Example} from './lib/gsap3xScript'
import {CoinAnimation} from './lib/gsap2xScript'
function App() { 
  return (
    <div className="App">    
      <Bnt01Example/>
      <Bnt02Example/>
      <Bnt03Example src={button03_off}/>
      <CoinAnimation/>
    </div>
  )
}

export default App
