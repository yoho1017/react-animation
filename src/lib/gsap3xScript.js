import React, { useRef, useEffect, useState } from 'react'
import { gsap, SteppedEase } from 'gsap'
import button03On from '../imgs/button03_on.png'
import coin from '../imgs/coin.png'
import football from '../imgs/football.png'
import basketball from '../imgs/basketball.png'
import baseball from '../imgs/baseball.png'


export function SvgExample() {
    const svgref=useRef()
    useEffect(()=>{
      gsap.to(svgref.current,{
        repeat:-1,
        attr:{   
          width:"100"
      }})
    })
  return(
    <div className='header-block black'>  
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
        <g fill="#61DAFB">
            <rect x="-25" y="-25" width="200" height="100" ref={svgref}/>
        </g>
      </svg>
    </div>
  )
}

export function Btn01Example() {
  const headerRef = useRef(null)
  const btnRef = useRef(null)
  const [background, setBackground] = useState('rgb(0, 0, 0)')
  const [fontcolor, setColor] = useState('rgb(109, 136, 255)')
  const [bntColor, setbntColor] = useState('black')
  const [bntBorder,setbntBorder]=useState('3px solid rgb(54, 225, 255)')
  const toggleBackground = () => {
    const backgroundChange = background !== 'rgb(0, 0, 0)' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)' 
    const fontColorChange = fontcolor !== 'rgb(109, 136, 255)' ? 'rgb(109, 136, 255)' : '#f8a942'
    const bntColorChange= bntColor !== 'black'?'black':'rgb(253, 255, 109)'
    const bntBorderChange=bntBorder !== '3px solid rgb(54, 225, 255)'?'3px solid rgb(54, 225, 255)':'3px solid rgb(255, 128, 54)'
    setBackground(backgroundChange)
    setColor(fontColorChange)
    setbntColor(bntColorChange)
    setbntBorder(bntBorderChange)
    gsap.from(btnRef.current,{y:20,rotate:180})
  }

  useEffect(() => {
    gsap.to(headerRef.current, {duration: 1,backgroundColor: background,ease: 'none'})
  }, [background])

  useEffect(() => {
    gsap.to(btnRef.current,{ duration: 0.2,color: fontcolor, backgroundColor:bntColor,border:bntBorder,ease:'none'})
  }, [fontcolor,bntColor,bntBorder])

  return (
    <div className="header-block" ref={headerRef}>
      <div className="btn1" ref={btnRef} onClick={toggleBackground}>
       <h2>Changebackground</h2>
      </div>
    </div>
  )
}

export function Btn02Example() {

  const Btn02Component=(props)=>{
    const btn02Ref = useRef(null)
    useEffect(() => {
      const timeline = gsap.timeline({
        repeat: -1,
        defaults: {
          duration: 0.5,
          ease: 'none'
        }
      })
      const timeline2 = gsap.timeline({ duration: 1, ease: 'none' })
      timeline2.fromTo( '.btn2-block', { x: -100, opacity: 0 }, { duration: 0.5, x: 0, opacity: 1, stagger: 0.2 })
      timeline
        .fromTo('span:nth-child(1)', { x: -150, opacity: 1 }, { x: 50, opacity: 0.5 }, 0)
        .fromTo('span:nth-child(2)', { y: -50, opacity: 1 }, { y: 50, opacity: 0.5 }, 0.3)
        .fromTo('span:nth-child(3)', { x: 55, opacity: 1 }, { x: -100, opacity: 0.5 }, 0.6)
        .fromTo('span:nth-child(4)', { y: 50, opacity: 1 }, { y: -50, opacity: 0.5 }, 1)
    }, [])

    const btn2Click = () => {
      gsap.from( btn02Ref.current, { top: '20px' })
    }

    return (
      <div className='btn2-block' ref={btn02Ref}  onClick={btn2Click}>
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
  
  const Btn2 = [{text:'今日'},{text:'滾球'},{text:'冠軍'}]
  return (
    <div className="header-block black">
      {Btn2.map((value,key)=>{
        return <Btn02Component text={value.text} key={key}/>
      })}
    </div>
  )
}

export function CoinExample(props) {
  const btn03Ref = useRef(null)
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
    <div className="header-block black" ref={btn03Ref}>
      <div className="btn3-block">
        <img className="btn3img" src={button03On} alt="button03-on" />
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
  const BalliconComponent=(props)=>{
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
        <h3 ref={ballTextRef}>{props.text}</h3>
        <div className='ball' ref={ballRef}>
          <img src={props.src}  alt="ball"/>         
        </div>        
    </div>
    )   
  }
  
  const ballIconImgs=[{src:football,text:'football'},{src:basketball,text:'basketball'},{src:baseball,text:'baseball'}]
  return(
    <div className='header-block black'>
      {ballIconImgs.map((value,key)=>{
       return <BalliconComponent src={value.src} key={key} text={value.text} />
      })}
    </div>
  )
}