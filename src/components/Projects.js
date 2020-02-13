import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Carousel from 'react-bootstrap/Carousel'


import greenGarms from '../images/green-garms.png'
import swell from '../images/swell.png'
import makeItCount from '../images/make-it-count.png'
import lifeOnMars from '../images/life-on-mars.png'
import tetris from '../images/tetris.png'
import GreenGarms from './GreenGarms'
import Swell from './Swell'
import MakeItCount from './MakeItCount'
import LifeOnMars from './LifeOnMars'
import Tetris from './Tetris'


const Projects = () => {


  function toggleForm(e) {
   console.log(e.target.value)
    const modalSelected = document.querySelector(`#${e.target.value}`)
    modalSelected.classList.toggle('is-active')

  }

  return <section className='section' id="project-page">
    <Zoom right cascade>
      <div id='project-title'>PROJECTS</div>
    </Zoom>

    <div id='green-garms' className='modal'>
      <div className="modal-background" ></div>
      <div className='modal-content'>
        <GreenGarms
        />
      </div>
      <button className="modal-close is-large" aria-label="close" value='green-garms' onClick={e => toggleForm(e)} ></button>
    </div>
    <div id='swell' className='modal'>
      <div className="modal-background"></div>
      <div className='modal-content'>
        <Swell
        />
      </div>
      <button className="modal-close is-large" aria-label="close" value='swell' onClick={e => toggleForm(e)}></button>
    </div>
    <div id='make-it-count' className='modal'>
      <div className="modal-background"></div>
      <div className="modal-content">
        <MakeItCount
        />
      </div>
      <button className="modal-close is-large" aria-label="close" value='make-it-count' onClick={e => toggleForm(e)}></button>
    </div>
    <div id='life-on-mars' className='modal'>
      <div className="modal-background" ></div>
      <div className="modal-content">
        <LifeOnMars
        />
      </div>
      <button className="modal-close is-large" aria-label="close" value='life-on-mars' onClick={e => toggleForm(e)} ></button>
    </div>
    <div id='tetris' className='modal' >
      <div className="modal-background" ></div>
      <div className="modal-content">
        <Tetris
        />
      </div>
      <button className="modal-close is-large" aria-label="close" value='tetris' onClick={e => toggleForm(e)} ></button>
    </div>


    <Carousel>
      <Carousel.Item>
        <img
          id="project-img"
          className="project-img d-block w-100"
          src={greenGarms}
          alt="First slide"
        />
        <Carousel.Caption>
          <button className='read-more button is-black ' value='green-garms' onClick={e => toggleForm(e)}>READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="project-img d-block w-100"
          src={swell} alt='Swell'
        />

        <Carousel.Caption>
          <button className='read-more button is-black ' value='swell' onClick={e => toggleForm(e)}>READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="project-img d-block w-100"
          src={makeItCount} alt='Make It Count'
        />
        <Carousel.Caption>
          <button className='read-more button is-black ' value='make-it-count' onClick={e => toggleForm(e)}>READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="project-img d-block w-100"
          src={lifeOnMars} alt='Life on Mars'
        />
        <Carousel.Caption>
          <button className='read-more button is-black ' value='life-on-mars' onClick={e => toggleForm(e)}>READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="project-img d-block w-100"
          src={tetris} alt='Tetris'
        />
        <Carousel.Caption>
          <button className='read-more button is-black ' value='tetris' onClick={e => toggleForm(e)}>READ MORE</button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  </section >
}



export default Projects