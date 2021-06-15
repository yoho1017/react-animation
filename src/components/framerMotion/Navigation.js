import React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

export const Navigation = () => {
  const itemIds = [...Array(3).keys()]

  return (
    <div className="header-block black">
      <motion.ul
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'linear' }}
      >
        {itemIds.map(value => (
          <MenuItem i={value} key={value} />
        ))}
      </motion.ul>
    </div>
  )
}
