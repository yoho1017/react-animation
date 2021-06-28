import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Header = styled.div`
  margin: 5px;
  width: 480px;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid black;
`
const CustomButton = ({ children, className }) => {
  return (
    <motion.button
      drag
      dragTransition={{
        min: 0,
        max: 100,
        bounceDamping: 3
      }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

const StyleCustomButton = styled(CustomButton)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
`

export const Styleds = () => {
  const arrays = [...Array(3).keys()]
  const texts = ['text1', 'text2', 'text3']
  const list = {
    visible: {
      opacity: 1,
      scale: 1.5,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        type: 'spring',
        bounce: 0.5,
        duration: 0.5
      }
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: {
        when: 'afterChildren'
      }
    }
  }

  return (
    <Header className="header">
      {arrays.map(value => (
        <StyleCustomButton className="button" primary key={value}>
          Button
        </StyleCustomButton>
      ))}
      <motion.ul className="test-ul" initial="hidden" animate="visible" variants={list}>
        {texts.map(text => (
          <motion.li className="test-li" key={text} whileTap={{ scale: 0.5 }}>
            <motion.p>{text}</motion.p>
          </motion.li>
        ))}
      </motion.ul>
    </Header>
  )
}
