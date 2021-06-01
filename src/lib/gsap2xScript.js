import * as TweenMax from './TweenMax'
import './Physics2DPlugin'
const SteppedEase = TweenMax.SteppedEase

function coinPlay() {
  TweenMax.to('#coin', 0.4, { 
    repeat: -1,
    x: -1280,
    ease: SteppedEase.config(10)  
  })

  TweenMax.to('#coinBlock', 2.5, { physics2D: { velocity: 300, angle: 300, gravity: 500 }, repeat: -1})
}

export default coinPlay
