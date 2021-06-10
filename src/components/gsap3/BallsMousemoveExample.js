import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import football from '../../imgs/football.png'
import basketball from '../../imgs/basketball.png'
import baseball from '../../imgs/baseball.png'

export const BallsMousemoveExample = () => {
  const BallsMousemove = props => {
    const ballUiRef = useRef(null)
    const ballUiTween = useRef()
    const ballRef = useRef(null)
    const ballTween = useRef()
    const ballTextRef = useRef(null)
    const ballTextTween = useRef()

    useEffect(() => {
      ballUiTween.current = gsap.to(ballUiRef.current, {
        duration: 0.5,
        background: 'rgb(66, 66, 66)',
        paused: true
      })
    }, [])

    useEffect(() => {
      ballTween.current = gsap.to(ballRef.current, {
        duration: 0.5,
        x: 40,
        rotate: 180,
        paused: true
      })
    }, [])

    useEffect(() => {
      ballTextTween.current = gsap.fromTo(
        ballTextRef.current,
        {
          duration: 0.5,
          opacity: 0,
          paused: true
        },
        { x: -35, opacity: 1, color: 'rgb(129, 215, 255)', paused: true }
      )
    }, [])

    const onMouseEnterHandler = () => {
      ballUiTween.current.play()
      ballTween.current.play()
      ballTextTween.current.play()
    }
    const onMouseLeaveHandler = () => {
      ballUiTween.current.reverse()
      ballTween.current.reverse()
      ballTextTween.current.reverse()
    }

    const ballcionClick = () => {
      gsap.from(ballUiRef.current, { top: 10, ease: 'none' })
    }

    return (
      <div
        className="ui-block"
        onClick={ballcionClick}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        ref={ballUiRef}
      >
        <h3 ref={ballTextRef}>{props.text}</h3>
        <div className="ball" ref={ballRef}>
          <img src={props.src} alt="ball" />
        </div>
      </div>
    )
  }

  const ballIconImgs = [
    { src: football, text: 'football' },
    { src: basketball, text: 'basketball' },
    { src: baseball, text: 'baseball' }
  ]
  return (
    <div className="header-block black">
      {ballIconImgs.map((value, key) => {
        return <BallsMousemove src={value.src} key={key} text={value.text} />
      })}
    </div>
  )
}
