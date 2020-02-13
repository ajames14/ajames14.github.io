import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import 'pure-react-carousel/dist/react-carousel.es.css';

const Experience = () => {


  return <section className='section' id='experience-page'>
    <Zoom left cascade>
      <div id='experience-title'>EXPERIENCE</div>
    </Zoom>
    <div id='experience-container'>
      <div className='experience-box'>
        <div className='company'>GENERAL ASSEMBLY</div>
        <div className='job-dates'>Oct 2019 - Jan 2020</div>
        <div className='job-title'>Software Engineering Immersive Course</div>
        <div className='job-description'>A 3 month intensive course focused on JavaScript, Python, React, Express and Django. We learnt how to build full stack web applications using both SQL and NoSQL databases.<br/><br/>
        The course structure included agile methodologies such as test-driven development, pair-programming and daily stand ups.
        </div>
      </div>

      <div className='experience-box'>
        <div className='company'>Berenberg</div>
        <div className='job-dates'>Oct 2015 - Sept 2019</div>
        <div className='job-title'>Investment Advisor | Equity Sales | Graduate Analyst</div>
        <div className='job-description'>I first joined Berenberg in 2015 as an Graduate Analyst, rotating for a year around all the divisions of the Investment Bank. From 2016, I worked for over a year as a stockbroker, advising fund managers on equity investments.
           <br /><br />
          In late 2017, I was asked to join a growing division in the bank, the Wealth and Asset Management team, to help build the investment offering and client base, working there for 2 years as an Investment Advisor.
        </div>
      </div>

      <div className='experience-box'>
        <div className='company'>The University of Edinburgh</div>
        <div className='job-dates'>Sept 2011 - Jun 2015</div>
        <div className='job-title'>BSc Mathematics: 2.1</div>
        <div className='job-description'>During my Maths degree, I greatly advanced my problem-solving and analytical skills. I mainly focused on applied mathematics modules as I’ve always enjoyed using complex theory to solve real-life problems.
        <br/><br/>
        I also gained my first experience of coding when studying Computing and Statistical Modelling Modules, using MatLab and R. As I begin my career as a software engineer, I’m looking forward to once again applying the critical thinking skills developed during my degree. 
        </div>

      </div>

    </div>
  </section>
}



export default Experience