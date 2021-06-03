import React,{ useRef, useEffect,useState} from 'react'
import { gsap } from 'gsap'

export function Bnt01Example(){
  const headerRef = useRef(null)
  const btnRef= useRef(null)
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
      color:fontcolor,
      ease: 'none'
    })
  }, [fontcolor])

  useEffect(()=>{
    gsap.fromTo('.bnt1',{
      y:-50,
      opacity:0,  
    },{
      y:250,
      opacity:1,
      stagger:0.1, 
      boxShadow: '0px 0px 10px rgb(91, 224, 224),0px 0px 20px rgb(91, 224, 224)'
    },'-=1')
  },[])
 
  return(
    <div className="header-block" ref={headerRef}>
        <button className='bnt1' ref={btnRef} onClick={toggleBackground}>change background</button>
      </div>
  )
}

export function Bnt02Example(){
  const bnt02Ref= useRef(null)
  useEffect(() => {
    const timeline = gsap.timeline({repeat:-1,defaults:{ 
      duration:0.5,
      ease: "none" 
    },})
    const timeline2= gsap.timeline({duration:1,ease:'none'})
    timeline2.fromTo('.bnt2-block', {x:-100,opacity:0}, {duration: 0.5, x:0,opacity:1,stagger:0.2})
    timeline.fromTo('span:nth-child(1)',
    { x:-150,opacity:1},
    { x:50,opacity:0.5},0).fromTo('span:nth-child(2)', 
    { y:-50,opacity:1},
    { y:50,opacity:0.5},0.3).fromTo('span:nth-child(3)',
    { x:55,opacity:1},
    { x:-100,opacity:0.5},0.6).fromTo('span:nth-child(4)', 
    { y:50,opacity:1},
    { y:-50,opacity:0.5},1)
  }, []);

  const bnt2Play = e =>{ 
    e.stopPropagation();
    const newId = e.target.id     
    const el=document.querySelectorAll('.bnt2-block')[newId]
    gsap.from(el,{ top: "20px"} )
  }

  const Bnt2=[...Array(3).keys()]
  return(
    <div className='header-block black'>
    {Bnt2.map(value=>{
      return(          
          <div className={`bnt2-block ${value}`} key={value}  ref={bnt02Ref} onClick={(bnt2Play)}>
            <div className='bnt2List-block'>                 
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

export function Bnt03Example(props){  
    const bnt03Ref = useRef(null)
    useEffect(()=>{
        gsap.fromTo('.testimg', {scale:0}, {duration: 1,repeat:-1,scale:1})
      },[])
  return (
    <div className='header-block' ref={bnt03Ref}>
        <div className='`bnt3-block'>
          <img className='testimg' src={props.src} alt="button03_on" />
          b
        </div>
    </div>
        )
}