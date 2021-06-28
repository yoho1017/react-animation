import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
const Iconcomponet = ({ progress }) => {
  const pathLength = useTransform(progress, [0, 100], [0, 1])
  const color = useTransform(progress, [0, 99, 100], ['#FFCC66', '#FFCC66', '#66BB66'])
  return (
    <motion.svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="256px"
      height="256px"
      viewBox="0 0 1000 1000"
    >
      <g>
        <g>
          <motion.path
            transform="translate(0, 0)"
            scale={pathLength}
            fill={color}
            d="M383.841,171.838c-7.881-8.31-21.02-8.676-29.343-0.775L221.987,296.732l-63.204-64.893
			c-8.005-8.213-21.13-8.393-29.35-0.387c-8.213,7.998-8.386,21.137-0.388,29.35l77.492,79.561
			c4.061,4.172,9.458,6.275,14.869,6.275c5.134,0,10.268-1.896,14.288-5.694l147.373-139.762
			C391.383,193.294,391.735,180.155,383.841,171.838z"
          />
        </g>
      </g>
      <g>
        <g>
          <motion.path
            transform="translate(0, 0)"
            initial={{ rotate: 180 }}
            fill="none"
            strokeWidth="6"
            stroke={color}
            style={{
              pathLength
            }}
            d="M256,470.487
			c-118.265,0-214.487-96.214-214.487-214.487c0-118.265,96.221-214.487,214.487-214.487c118.272,0,214.487,96.221,214.487,214.487
			C470.487,374.272,374.272,470.487,256,470.487z"
          />
        </g>
      </g>
    </motion.svg>
  )
}

export const IconExample = () => {
  const progress = useMotionValue(0)
  return (
    <div className="header-block">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 1, repeat: 2 }}
        style={{ x: progress }}
      />
      <Iconcomponet progress={progress} />
    </div>
  )
}
