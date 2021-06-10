import React, { useRef, useEffect } from 'react'
import { gsap, SteppedEase } from 'gsap'
import iconSign from '../../imgs/iconSign.png'
import coin from '../../imgs/coin.png'
export const CoinParticlesExample = () => {
  const CoinParticles = props => {
    const coinParticlesRef = useRef(null)
    useEffect(() => {
      const random = gsap.utils.random(-500, 500, 100, true)
      const random02 = gsap.utils.random(0, 360, 30, true)
      const timeline = gsap.timeline()
      timeline.to('.coin-random', { duration: 0.3, repeat: -1, x: -1280, ease: SteppedEase.config(10) })
      timeline.fromTo(
        '.coinBlock-random',
        { x: 0, y: 45, scale: 0.1, rotate: random02, opacity: 1 },
        {
          duration: 1,
          x: random,
          y: random,
          rotate: random02,
          opacity: 0.5,
          repeat: -1,
          repeatRefresh: true,
          scale: 0.6,
          ease: 'none'
        }
      )
      const color = `0 0 5px rgb(101, 245, 245)
            ,0 0 8px rgb(101, 245, 245)
            ,0 0 10px rgb(101, 245, 245)`
      timeline
        .fromTo(
          ['.btn3-block', 'h1.title'],
          { scale: 0, opacity: 0 },
          { duration: 1, scale: 1, opacity: 1, ease: 'elastic.out(1, 0.3)' }
        )
        .fromTo(
          '.title',
          { textShadow: color, scale: 1 },
          { duration: 0.5, scale: 1.5, ease: 'power3.out', repeat: -1 },
          '-=1'
        )
    }, [])
    const boxArray = [...Array(30).keys()]
    return (
      <div className="btn3-block" ref={coinParticlesRef}>
        <img className="btn3img" src={iconSign} alt="button03-on" />
        <h1 className="title">{props.title}</h1>
        {boxArray.map(value => {
          return (
            <div className="coinBlock-random" key={value}>
              <img className="coin-random" src={coin} alt="coin"></img>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="header-block black">
      <CoinParticles title="You win" />
    </div>
  )
}
