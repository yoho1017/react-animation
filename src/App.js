import React from 'react'
import './css/App.css'
import { Btn01Example, Btn02Example, CoinExample,UiExample} from './lib/gsap3xScript'
// import { CoinAnimation } from './lib/gsap2xScript'

function App() {

  return (
    <div className="App">
      <Btn01Example />
      <Btn02Example />
      <CoinExample title="You win" /> 
      <UiExample/>
       {/* <CoinAnimation /> */}
    </div>
  )
}

export default App
