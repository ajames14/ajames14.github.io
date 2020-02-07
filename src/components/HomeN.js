import React, { useState, useEffect } from 'react'
import LazyHero from 'react-lazy-hero'
import Flip from 'react-reveal/Flip';

const HomeN = () => {



  return <section className='section title-page'>
    <Flip cascade >
      <div id='title'>ABI JAMES</div>
    </Flip>
    <Flip cascade >
      <div id='subtitle'>SOFTWARE DEVELOPER</div>
    </Flip>
  </section>
}

export default HomeN