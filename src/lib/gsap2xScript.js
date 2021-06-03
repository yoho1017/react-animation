import React,{ useRef, useEffect} from 'react'
import coin from '../imgs/coin.png'
import * as TweenMax from './TweenMax'
import './Physics2DPlugin'

const SteppedEase = TweenMax.SteppedEase

export function CoinAnimation(){
 
  const coinRef = useRef(null)
  useEffect(() =>{
    TweenMax.to('#coin', 0.4, { 
      repeat: -1,
      x: -1280,
      ease: SteppedEase.config(10)  
    })
    TweenMax.to('#coinBlock', 2.5, { physics2D: { velocity: 300, angle: 300, gravity: 500 }, repeat: -1})
  }, [])
 return(
   <div className="header-block">
      <div id="coinBlock" ref={coinRef}>
        <img id="coin" src={coin} alt="coin"></img>
      </div>
   </div>
 
 )
}

