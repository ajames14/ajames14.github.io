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
    <Fade bottom>
      <div id='experience-container'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={115}
          totalSlides={4}
        >
          <Slider>
            <Slide className='slide' index={0}>
              <div className='slide-content'>
                <div className='job-title'>GENERAL ASSEMBLY</div>
                <div className='job-dates'>Software Engineering Immersive Course</div>
                <div className='job-dates'>Oct 2019 - Jan 2020</div>
                <div className='job-description'>A 3 month intensive course focused on JavaScript, Python, React, Express and Django. We learnt how to build full stack web applications using both SQL and NoSQL databases.
                <br />
                  <br />
                  The course structure included agile methodologies such as pair-programming, test-driven development and daily stand ups.
                <br />
                  <br />
                  To showcase our skills, we completed a mixture of solo and group projects, gaining project management skills when working in larger teams.</div>
              </div>
            </Slide>
            <Slide className='slide' index={1}>
              <div className='slide-content'>
                <div className='job-title'>Berenberg</div>
                <div className='job-dates'>Investment Advisor</div>
                <div className='job-dates'>Sept 2017 - Sept 2019</div>
                <div className='job-description'>Joined a growing division in the bank to help build the investment offering and client base. I advised private and institutional clients on investments, developing strategies and managing portfolios.
                <br />
                  <br />
                  <span style={{ fontWeight: 'bold' }}>My most successful initiatives: </span> <br /><br />
                  <ul>
                    <li>Organised a series of pitching events (“Invest in Her”) for female entrepreneurs looking to raise growth capital, aiming to play a small part in closing the funding gap for female-led business. Attended by 200+ investors.</li>
                    <li>Developed strategies for winning significant new businesss.</li>
                    <li>Led a bank-wide strategic initiative to integrate the UN Sustainable Development Goals into the firm’s investment process.</li>
                    <li>Part of a team producing an in-depth analysis of the Tech-for-Good sector in the UK, in partnership with Tech Nation.</li>
                    <li>Gained the CISI Investment Advice Diploma.</li>
                  </ul>
                </div>
              </div>
            </Slide>
            <Slide className='slide' index={2}>
              <div className='slide-content'>
                <div className='job-title'>Berenberg</div>
                <div className='job-dates'>Equity Specialist Sales</div>
                <div className='job-dates'>Oct 2016 - Sept 2017</div>
                <div className='job-description'>Advised fund managers on equity investments, focusing on the healthcare sector. Conducted in-depth analysis of companies, financial markets and macroeconomics to deliver valuable recommendations to clients.
                <br />
                  <br />
                  <span style={{ fontWeight: 'bold' }}>My most successful initiatives: </span> <br /><br />
                  <ul>
                    <li>Gained commissions for the firm by successfully broking investment ideas. </li>
                    <li>Worked on a number of successful equity market transactions to investors, including IPOs and capital raises.</li>
                    <li>Managed a book of 100+ top institutional fund managers, using networking skills to build new client relationships.</li>
                    <li>Marketed equity research globally, meeting with investors to pitch investment recommendations.</li>
                    <li>Coordinated a team of eight research analysts, developing strong people management skills.</li>
                  </ul>
                </div>
              </div>
            </Slide>
            <Slide className='slide' index={3}>
              <div className='slide-content'>
                <div className='job-title'>Berenberg</div>
                <div className='job-dates'>Graduate Analyst</div>
                <div className='job-dates'>Oct 2015 - Oct 2016</div>
                <div className='job-description'>One of 25 selected from over 2000 applicants to be trained through different divisions of the bank including Equity Research, Sales, Private Banking and Equity Capital Markets.
                <br />
                  <br />
                  <span style={{ fontWeight: 'bold' }}>Achievements: </span> <br /><br />
                  <ul>
                    <li>Performed in-depth, fundamental analysis of companies and industries to contribute to equity research reports.</li>
                    <li>Applied technical analysis skills to interpret complex data and assist in building financial models. Developed strong Excel skills.</li>
                    <li>Achieved Chartered Financial Analyst (CFA) Level 1.</li>
                  </ul>
                </div>
              </div>
            </Slide>
          </Slider>
          <div id='button-box'>
            <ButtonBack id='slider-button-1'>
              <i className="fas fa-angle-double-left"></i>
            </ButtonBack>
            <ButtonNext id='slider-button-2'>
              <i className="fas fa-angle-double-right"></i>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </Fade>
  </section>
}



export default Experience