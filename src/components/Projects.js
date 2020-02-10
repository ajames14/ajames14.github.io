import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import greenGarms from '../images/green-garms.png'
import swell from '../images/swell.png'
import makeItCount from '../images/make-it-count.png'
import lifeOnMars from '../images/life-on-mars.png'
import tetris from '../images/tetris.png'
import GreenGarms from './GreenGarms'


const Projects = () => {

  const [itemModal, setItemModal] = useState(false)

  function toggleForm() {
    setItemModal(!itemModal)
  }

  return <section className='section' id="project-page">
    <Zoom right cascade>
      <div id='project-title'>PROJECTS</div>
    </Zoom>
    <div id='project-container'>
      <div className='project-box' onClick={toggleForm}>
        <div className={itemModal === true ? 'modal is-active' : 'modal'}>
          <div className="modal-background" onClick={toggleForm}></div>
          <div className="modal-content">
            <GreenGarms
              toggleForm={toggleForm}
            />
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={toggleForm}></button>
        </div>
        <img className='project-img' src={greenGarms} alt='Green Garms' />
        <div className="overlay">
          <div className="text"><span>Green Garms</span><br />
            A Sustainable Fashion App</div>
        </div>
      </div>
      <div className='project-box'>
        <img className='project-img' src={swell} alt='Swell' />
      </div>
      <div className='project-box'>
        <img className='project-img' src={makeItCount} alt='Make It Count' />
      </div>
      <div className='project-box'>
        <img className='project-img' src={lifeOnMars} alt='Life On Mars' />
      </div>
      <div className='project-box'>
        <img className='project-img' src={tetris} alt='Tetris' />
      </div>
      <div className='project-box'>
        <div className='project-img' id='git-box'>GitHub</div>
      </div>
    </div>
  </section >
}



export default Projects