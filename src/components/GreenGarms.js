import React from 'react'

const GreenGarms = () => {


  return <div className='project-description'>
    <div className="project-subtitle">Green Garms</div>
    <div className='project-details'>Python | Django | React</div>
    <p>For our final project on the GA course, my partner and I focused on our shared interest in sustainable fashion. We built a full stack app, Green Garms, combining a clothes swap platform and a brand guide, helping users to be more sustainable with their fashion choices.</p>
    <p>I was responsible for building the clothes swap platform. Writing the logic for this part of the app was challenging, but extremely rewarding – the experience made me realise I really enjoy working on the back-end, teasing apart complex problems and working out how things fit together.</p>
    <div className='link-box'>
      <a target='_blank' rel="noopener noreferrer" href='https://github.com/ajames14/project-4'><i style={ { fontSize: 45 } } className="devicon-github-plain"></i></a>
      <a target='_blank' rel="noopener noreferrer" href='https://green-garms.herokuapp.com/#/'><i style={ { fontSize: 45 } } className="fas fa-link"></i></a>
    </div>
  </div>
}
export default GreenGarms