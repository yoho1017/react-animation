import React, { useRef, useEffect, useState } from 'react'
import { gsap, SteppedEase } from 'gsap'
import button03On from '../imgs/button03_on.png'
import coin from '../imgs/coin.png'
import football from '../imgs/football.png'
import basketball from '../imgs/basketball.png'

export function Bnt01Example() {
  const headerRef = useRef(null)
  const btnRef = useRef(null)
  const [background, setBackground] = useState('rgb(255, 255, 255)')
  const [fontcolor, setColor] = useState('rgb(77, 50, 151)')
  const toggleBackground = () => {
    const fontColor2 = fontcolor !== 'rgb(77, 50, 151)' ? 'rgb(77, 50, 151)' : 'rgb(155, 255, 255)'
    const color = background !== 'rgb(255, 255, 255)' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
    setBackground(color)
    setColor(fontColor2)
  }

  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 1,
      backgroundColor: background,
      ease: 'none'
    })
  }, [background])

  useEffect(() => {
    gsap.to(btnRef.current, {
      duration: 0.1,
      color: fontcolor,
      ease: 'none'
    })
  }, [fontcolor])

  useEffect(() => {
    gsap.fromTo(
      '.bnt1',
      {
        y: -50,
        opacity: 0
      },
      {
        y: 100,
        opacity: 1,
        stagger: 0.1,
        boxShadow: '0px 0px 10px rgb(91, 224, 224),0px 0px 20px rgb(91, 224, 224)'
      },
      '-=1'
    )
  }, [])

  return (
    <div className="header-block" ref={headerRef}>
      <button className="bnt1" ref={btnRef} onClick={toggleBackground}>
        change background
      </button>
    </div>
  )
}

export function Bnt02Example() {
  const bnt02Ref = useRef(null)
  useEffect(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 0.5,
        ease: 'none'
      }
    })
    const timeline2 = gsap.timeline({ duration: 1, ease: 'none' })
    timeline2.fromTo('.bnt2-block', { x: -100, opacity: 0 }, { duration: 0.5, x: 0, opacity: 1, stagger: 0.2 })
    timeline
      .fromTo('span:nth-child(1)', { x: -150, opacity: 1 }, { x: 50, opacity: 0.5 }, 0)
      .fromTo('span:nth-child(2)', { y: -50, opacity: 1 }, { y: 50, opacity: 0.5 }, 0.3)
      .fromTo('span:nth-child(3)', { x: 55, opacity: 1 }, { x: -100, opacity: 0.5 }, 0.6)
      .fromTo('span:nth-child(4)', { y: 50, opacity: 1 }, { y: -50, opacity: 0.5 }, 1)
  }, [])

  const bnt2Click = e => {
    const newId = e.target.id
    const el = document.querySelectorAll('.bnt2-block')[newId]
    gsap.from(el, { top: '20px' })
  }

  const Bnt2 = [...Array(3).keys()]
  return (
    <div className="header-block black">
      {Bnt2.map(value => {
        return (
          <div className={`bnt2-block ${value}`} key={value} ref={bnt02Ref} onClick={bnt2Click}>
            <div className="bnt2List-block">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p id={value}>button02_{value}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function CoinExample(props) {
  const bnt03Ref = useRef(null)
  useEffect(() => {
    const random = gsap.utils.random(-500, 500, 100, true)
    const random02 = gsap.utils.random(0, 360, 30, true)
    const timeline = gsap.timeline()
    timeline.to('.coin-random', { duration: 0.3, repeat: -1, x: -1280, ease: SteppedEase.config(10) })
    timeline.fromTo(
      '.coinBlock-random',
      { x: 0, y: 45, scale: 0.1, rotate: random02, opacity: 1 },
      { duration: 1, x: random, y: random, rotate: random02, opacity: 0.5, repeat: -1,repeatRefresh:true, scale: 0.6, ease: 'none' }
    )
    const color = `0 0 5px rgb(101, 245, 245)
      ,0 0 8px rgb(101, 245, 245)
      ,0 0 10px rgb(101, 245, 245)`
    timeline
      .fromTo(
        ['.bnt3-block', 'h1.title'],
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
    <div className="header-block black" ref={bnt03Ref}>
      <div className="bnt3-block">
        <img className="bnt3img" src={button03On} alt="button03-on" />
        <h1 className="title">{props.title}</h1>
        {boxArray.map(value => {
          return (
            <div className="coinBlock-random" key={value}>
              <img className="coin-random" src={coin} alt="coin"></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export function UiExample(){ 
  const Ballicon=(props)=>{
    const uiRef=useRef(null) 
    const uiTween = useRef()
    const ballRef=useRef(null) 
    const ballTween = useRef()
    const ballTextRef=useRef(null) 
    const ballTextTween = useRef()
    useEffect(()=>{
      uiTween.current=gsap.to(uiRef.current,{
       duration:0.5,
       background:'rgb(66, 66, 66)',
       paused:true
     })
    },[])
  
    useEffect(()=>{
      ballTween.current=gsap.to(ballRef.current,{
        duration:0.5,
        x:40,
        rotate:180,
        paused:true
      })
     },[])
  
     useEffect(()=>{
      ballTextTween.current=gsap.fromTo(ballTextRef.current,{
        duration:0.5,    
        opacity:0,
        paused:true
      },{x:-35,opacity:1,color:'rgb(129, 215, 255)', paused:true})
     },[])
  
    const onMouseEnterHandler = () => {
      uiTween.current.play()
      ballTween.current.play()
      ballTextTween.current.play()
    }
    const onMouseLeaveHandler = () => {
      uiTween.current.reverse()
      ballTween.current.reverse()
      ballTextTween.current.reverse()
    }

    const ballcionClick=()=>{
      gsap.from(uiRef.current,{top:10,ease: 'none'})
    }
    
    return(
      <div className='ui-block' onClick={ ballcionClick} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} ref={uiRef}>
        <h2 ref={ballTextRef}>{props.text}</h2>
        <div className='ball' ref={ballRef}>
          <img src={props.src}  alt="ball"/>         
        </div>        
    </div>
    )   
  }
  
  const ballIconImgs=[{src:football,text:'football'},{src:basketball,text:'basketball'}]
  return(
    <div className='header-block black'>
      {ballIconImgs.map((value,key)=>{
       return <Ballicon src={value.src} key={key} text={value.text} />
      })}
    </div>
  )
}