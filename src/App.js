import React from 'react'
import './css/App.css'
import  {Bnt01Example,Bnt02Example,Bnt03Example} from './lib/gsap3xScript'
import {CoinAnimation} from './lib/gsap2xScript'
function App() { 
  return (
    <div className="App">    
      <Bnt01Example/>
      <Bnt02Example/>
      <Bnt03Example title='You win'/>
      <CoinAnimation/>
     
    </div>
  )
}

export default App
