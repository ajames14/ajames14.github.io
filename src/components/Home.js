import React from 'react'
import LazyHero from 'react-lazy-hero'
import Fade from 'react-reveal/Fade'

const Home = () => {


  return <section >
    <LazyHero className='title-page' imageSrc="https://images.unsplash.com/photo-1541746059718-2dbda57663c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=729&q=80" minHeight='100vh' parallaxOffset={100} overflow='hidden' opacity={0} transitionDuration={0}>
      <Fade bottom cascade>
        <div id='title-container'>
          <div id='title'>ABI JAMES</div>
          <div id='subtitle-one'><span id='span-one'>SOFTWARE DEVELOPER </span>| <span id='span-two'>CREATIVE PROBLEM SOLVER</span></div>
          <div id='subtitle-two'><span id='span-three'>MATHEMATICIAN </span>| <span id='span-four'>SKIER + SURFER</span></div>
        </div>
      </Fade>
    </LazyHero>
    {/* <div id='scroll'>
      <p>Scroll</p>
    </div> */}
  </section>
}

export default Home

