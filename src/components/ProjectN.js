import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const ProjectN = () => {


  return <section className='section' id="project-page">
    <Zoom right cascade>
      <div id='project-title'>PROJECTS</div>
    </Zoom>
    <div id='project-container'>
      <div className='project-box'>
        <Fade bottom>
          <div className='single-project-title'>Green Garms - A Sustainable Fashion App</div>
          <img className='project-img' src='./images/green-garms.png' alt='Green Garms' />
        </Fade>
      </div>
      <div className='project-box'>
        <Fade bottom>
          <img className='project-img' src='./images/swell.png' alt='Swell' />
          <div className='single-project-title'>Swell - An App for Surfers</div>
        </Fade>
      </div>
      <div className='project-box'>
        <Fade bottom>
          <div className='single-project-title'>Make It Count - A Political App</div>
          <img className='project-img' src='./images/make-it-count.png' alt='Make It Count' />
        </Fade>
      </div>
      <div className='project-box'>
        <Fade bottom>
          <img className='project-img' src='./images/life-on-mars.png' alt='Life On Mars' />
          <div className='single-project-title'>Life On Mars - A Mars Weather App</div>
        </Fade>
      </div>
      <div className='project-box'>
        <Fade bottom>
          <div className='single-project-title'>Tetris</div>
          <img className='project-img' src='./images/tetris.png' alt='Tetris' />
        </Fade>
      </div>
    </div>
  </section>
}



export default ProjectN