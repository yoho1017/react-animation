import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

export const BackgroundToggleExample = () => {
  const headerRef = useRef(null)
  const btnRef = useRef(null)
  const [background, setBackground] = useState('rgb(0, 0, 0)')
  const [fontcolor, setColor] = useState('rgb(109, 136, 255)')
  const [bntColor, setbntColor] = useState('black')
  const [bntBorder, setbntBorder] = useState('3px solid rgb(54, 225, 255)')
  const toggleBackground = () => {
    const backgroundChange = background !== 'rgb(0, 0, 0)' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
    const fontColorChange = fontcolor !== 'rgb(109, 136, 255)' ? 'rgb(109, 136, 255)' : '#f8a942'
    const bntColorChange = bntColor !== 'black' ? 'black' : 'rgb(253, 255, 109)'
    const bntBorderChange =
      bntBorder !== '3px solid rgb(54, 225, 255)' ? '3px solid rgb(54, 225, 255)' : '3px solid rgb(255, 128, 54)'
    setBackground(backgroundChange)
    setColor(fontColorChange)
    setbntColor(bntColorChange)
    setbntBorder(bntBorderChange)
    gsap.from(btnRef.current, { y: 20, rotate: 180 })
  }
  useEffect(() => {
    gsap.to(btnRef.current, {
      duration: 0.2,
      color: fontcolor,
      backgroundColor: bntColor,
      border: bntBorder,
      ease: 'none'
    })
  }, [fontcolor, bntColor, bntBorder])

  useEffect(() => {
    gsap.to(headerRef.current, { duration: 1, backgroundColor: background, ease: 'none' })
  }, [background])

  return (
    <div className="header-block" ref={headerRef}>
      <div className="btn1" ref={btnRef} onClick={toggleBackground}>
        <h2>Changebackground</h2>
      </div>
    </div>
  )
}
