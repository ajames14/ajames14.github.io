import React, { useState, useEffect } from 'react'
import LazyHero from 'react-lazy-hero'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'

import TextLoop from 'react-text-loop'
import cxs from 'cxs/component'

// const Example = cxs('div')({
//   fontSize: '24px'
// })

// const Title = cxs('div')({
//   marginBottom: '5px',
//   fontSize: '10px',
//   fontWeight: 600,
//   textTransform: 'uppercase',
//   color: '#aaa'
// })

// const Section = cxs('div')({
//   marginBottom: '50px',
//   fontFamily:
//     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
// })

// const StyledTextLoop = cxs(TextLoop)({
//   display: 'block'
// })



const HomeN = () => {



  return <section className='section title-page'>
    <div id='left-panel'>
    </div>
    <div id='middle-panel'>
    </div>
    <div id='right-panel'>
      <Fade bottom>
        <div className='my-title'>Hi, I'm </div>{' '}
      </Fade>
      <TextLoop mask={true} interval={[4000]}>
        <Fade bottom>
          <div className='my-title'>Abi James</div>
        </Fade >
        <Fade bottom>
          <div className='my-title'>a Web Developer</div>
        </Fade>
        <Fade bottom>
          <div className='my-title'>a Mathematician</div>
        </Fade>
        <Fade bottom>
          <div className='my-title'>Ex-Finance</div>
        </Fade>
        <Fade bottom>
          <div className='my-title'>a Skier + Surfer</div>
        </Fade>
      </TextLoop>
    </div>
    <div id='scroll'> <i className="fas fa-long-arrow-alt-left"></i>  scroll</div>

  </section>

}

export default HomeN