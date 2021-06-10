import React from 'react'
import { motion } from 'framer-motion'

export const SphereDeformation = () => {
  return (
    <div className="header-block black">
      <motion.div
        className="Sphere"
        whileHover={{
          scale: 1,
          borderRadius: '50%'
        }}
        whileTap={{ y: '20px' }}
      />

      <motion.div
        className="Sphere"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          background: ['#F05', '#85F', '#0CF'],
          boxShadow: '0px 0px 10px 10px #fff'
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </div>
  )
}

export const SvgPathMovement = () => {
  const icon = {
    visible: {
      opacity: 1,
      pathLength: [0, 0.5, 1],
      fill: 'rgba(255, 255, 255, 1)'
    }
  }
  return (
    <div className="header-block">
      <div className="container">
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="item">
          <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
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
