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
        <div id='description-me'>With a background in Maths, I've always loved taking a complex problem, breaking it up and coming up with a creative solution. After leaving university I worked for a fast-paced investment bank for 4 years - a brilliant learning opportunity - but I soon realised I missed the thrill of problem solving. 
        <br />
        <br />
        I decided I wanted a new challenge and a role where I could apply my logical mindset to have an impact. Software development is a unique blend of logic, creativity and intellectual curiosity - exactly what I’m looking for in a career. 
        <br />
        <br />
        After fast-tracking my learning on the General Assembly Software Engineering course, I’m now excited to begin my career as a Developer and do something I love for a living. </div>
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