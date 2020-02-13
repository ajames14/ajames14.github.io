import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const AboutN = () => {


  return <section className='section' id='about-page'>
    <Zoom right cascade>
      <div id='about-title'>About Me</div>
    </Zoom>
    <div id='about-container'>
      <Fade>
        <div id='description-me'><span id='intro'>Hi, I'm Abi. A London-based Software Developer.</span><br/><br></br>
        Studying Maths at University, it will come as no suprise that I've always loved solving complex problems; breaking them up and coming up with creative solutons. After leaving university I worked for a fast-paced investment bank for 4 years - a brilliant learning experience - but I soon realised I missed the thrill of problem solving day-to-day.
        <br />
        <br />
        I decided I wanted a new challenge and a role where I could apply my logical mindset to have an impact. Software development demands logic, creativity and intellectual curiosity - exactly what makes me tick.
        <br />
        <br />
        After self-teaching myself coding for a while, I decided to take the plunge and fast-track my career change by enrolling on the General Assembly Software Engineering Course. I’m now excited to begin my career as a Developer and do something I love for a living. </div>
      </Fade>
      <div id='skills'>
        <div id='skills-title'>SKILLS</div>
        <Zoom cascade>
          <div id='grid'>
            <i className="devicon-javascript-plain" style={{ fontSize: 50 }}></i>
            <i className="devicon-react-original-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-python-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-express-original-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-css3-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-mongodb-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-django-plain" style={{ fontSize: 50 }}></i>
            <i className="devicon-html5-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-postgresql-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-mocha-plain" style={{ fontSize: 50 }}></i>
            <i className="devicon-webpack-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-babel-plain" style={{ fontSize: 50 }}></i>
            <i className="devicon-nodejs-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-git-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-github-plain-wordmark" style={{ fontSize: 50 }}></i>
            <i className="devicon-sass-original" style={{ fontSize: 50 }}></i>
          </div>
        </Zoom>
      </div>
    </div>
  </section>
}



export default AboutN