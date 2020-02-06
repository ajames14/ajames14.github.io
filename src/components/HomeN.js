import React, { useState, useEffect } from 'react'
import LazyHero from 'react-lazy-hero'
import Zoom from 'react-reveal/Zoom'
import { motion } from 'framer-motion'

const HomeN = () => {



  return <section className='title-page'>
    <span id='title'>ABI JAMES</span>
    <div className='example-container'>
      <motion.div
        animate={{
          scale: [1, 1, 1, 1, 1, 100],
          // rotate: [0, 0, 270, 270, 0],
          translateX: [-300, 250, -250, 250, -250, 250],
          borderRadius: ['50%', '50%', '50%', '50%', '50%', '50%']
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          // times: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5],
          loop: 0,
          repeatDelay: 0
        }}
      />
    </div>
    <div id='subtitle'>SOFTWARE DEVELOPER</div>
  </section>
}

export default HomeN