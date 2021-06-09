import React from 'react'
import { motion } from 'framer-motion'

export const Header = () => {
  const icon = {
    visible: {
      opacity: 1,
      pathLength: [0, 0.5, 1]
      //   fill: "rgba(255, 255, 255, 0)"
    }
  }
  return (
    <div className="header-block">
      <div className="container">
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="item">
          <defs>
            <filter id="shadow2">
              <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor="cyan" />
            </filter>
          </defs>
          <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            filter="url(#shadow2);"
            variants={icon}
            animate="visible"
            transition={{
              duration: 1,
              ease: 'easeInOut',
              time: [0, 0.5, 1],
              repeat: Infinity
            }}
          />
        </motion.svg>
      </div>
    </div>
  )
}
