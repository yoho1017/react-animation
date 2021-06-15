import React from 'react'
import { motion } from 'framer-motion'

export const StaggerExample = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -200 },
    show: { opacity: 1, x: 0 }
  }
  return (
    <div className="header-block black">
      <motion.ul className="stagger-ul" variants={container} initial="hidden" animate="show">
        <motion.li className="stagger-li" variants={item} size={50} />
        <motion.li className="stagger-li" variants={item} size={50} />
        <motion.li className="stagger-li" variants={item} size={50} />
      </motion.ul>
    </div>
  )
}
