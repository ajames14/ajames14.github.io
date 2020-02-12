import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
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
        <div className='job-description'>A 3 month intensive course focused on JavaScript, Python, React, Express and Django. We learnt how to build full stack web applications using both SQL and NoSQL databases.</div>
      </div>

      <div className='experience-box'>
        <div className='company'>Berenberg</div>
        <div className='job-dates'>Oct 2015 - Sept 2019</div>
        <div className='job-title'>Investment Advisor | Equity Sales | Graduate Analyst</div>
        <div className='job-description'>I first joined Berenberg in 2015 as an Graduate Analyst, rotating for a year around all the divisions of the Investment Bank. In 2016, I then worked for a year and half as a Stockbroker, advising fund managers on equity investments.
           <br /><br />
          Subsequently, I was asked to join a growing division in the bank, the Wealth and Asset Management team, to help build the investment offering and client base, working there for 2 years as an Investment Advisor.
        </div>
      </div>

      <div className='experience-box'>
        <div className='company'>The University of Edinburgh</div>
        <div className='job-dates'>Sept 2011 - Jun 2015</div>
        <div className='job-title'>BSc Mathematics: 2.1</div>
        <div className='job-description'>During my Maths degree, I greatly advanced my problem-solving and analytical skills. I mainly focused on applied mathematics modules as I’ve always enjoyed using complex theory to solve real-life problems.</div>
      </div>

    </div>
  </section>
}



export default Experience