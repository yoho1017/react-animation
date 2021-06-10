import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export const StreamerButtonsExample = () => {
  const StreamerButtons = props => {
    const streamerButtonRef = useRef(null)
    useEffect(() => {
      const timeline = gsap.timeline({
        repeat: -1,
        defaults: {
          duration: 0.5,
          ease: 'none'
        }
      })
      const timeline2 = gsap.timeline({ duration: 1, ease: 'none' })
      timeline2.fromTo('.btn2-block', { x: -100, opacity: 0 }, { duration: 0.5, x: 0, opacity: 1, stagger: 0.2 })
      timeline
        .fromTo('span:nth-child(1)', { x: -150, opacity: 1 }, { x: 50, opacity: 0.5 }, 0)
        .fromTo('span:nth-child(2)', { y: -50, opacity: 1 }, { y: 50, opacity: 0.5 }, 0.3)
        .fromTo('span:nth-child(3)', { x: 55, opacity: 1 }, { x: -100, opacity: 0.5 }, 0.6)
        .fromTo('span:nth-child(4)', { y: 50, opacity: 1 }, { y: -50, opacity: 0.5 }, 1)
    }, [])

    const btn2Click = () => {
      gsap.from(streamerButtonRef.current, { top: '20px' })
    }

    return (
      <div className="btn2-block" ref={streamerButtonRef} onClick={btn2Click}>
        <div className="btn2List-block">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p>{props.text}</p>
        </div>
      </div>
    )
  }

  const Btn2 = [{ text: '今日' }, { text: '滾球' }, { text: '冠軍' }]
  return (
    <div className="header-block black">
      {Btn2.map((value, key) => {
        return <StreamerButtons text={value.text} key={key} />
      })}
    </div>
  )
}
