import React from 'react'
import { motion } from 'framer-motion'
import FootballStar01 from '../../imgs/FootballStar01.png'
import FootballStar02 from '../../imgs/FootballStar02.png'
import FootballStar03 from '../../imgs/FootballStar03.png'

export const MenuItem = ({ i }) => {
  const icon = {
    visible: {
      opacity: [0, 0.5, 1],
      pathLength: [0, 0.5, 1]
    }
  }
  const colors = ['#869eff', '#4eb1fd', '#4e71fd']
  const imgs = [FootballStar01, FootballStar02, FootballStar03]
  return (
    <motion.li whileHover={{ scale: 1.1, boxShadow: `0 0 5px 2px ${colors[i]}` }} whileTap={{ scale: 0.95 }}>
      <motion.div
        className="text-placeholder"
        animate={{
          background: [
            'linear-gradient(#141e30, #243b55)',
            'linear-gradient(#1a273f, #314f72)',
            'linear-gradient(#141e30, #243b55)'
          ]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <h3>FootballStar</h3>
        <motion.div className="icon-placeholder">
          <motion.img src={imgs[i]} alt="FootballStar01" />
        </motion.div>
        <motion.svg
          className="svg-block"
          xmlns="http://www.w3.org/2000/svg"
          width="300px"
          height="100px"
          viewBox="0 0 300 100"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
              <stop offset="0%" stopColor="#33a6ff" stopOpacity="1" />
              <stop offset="50%" stopColor="#c05cff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            className="path"
            variants={icon}
            animate="visible"
            transition={{
              duration: 1.5,
              ease: 'linear',
              repeat: Infinity
            }}
            stroke="url('#gradient')"
            d="M300,89.5c0,5.522-4.478,10-10,10H10c-5.523,0-10-4.478-10-10
                v-79c0-5.523,4.477-10,10-10h280c5.522,0,10,4.477,10,10V89.5z"
          />
        </motion.svg>
      </motion.div>
    </motion.li>
  )
}
