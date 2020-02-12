import React from 'react'

const Swell = () => {


  return <div className='project-description'>
    <div className="project-subtitle">Swell</div>
    <div className='project-details'>JavaScript | React | Express | MongoDB | Node.js</div>
    <p>My team of four decided to build a surfing website, “Swell”, allowing users to search for surfing destinations around the world, leave comments and share new surf spots.</p>
    <p>We created our own RESTful API and incorporated two third party APIs, using Github to work collaboratively. After coding the back-end as a team, I was primarily responsible for building the structure of the front-end, including authorization functionality and design.</p>
    <div className='link-box'>
      <a target='_blank' rel="noopener noreferrer" href='https://github.com/ajames14/Mon-Gods'><i style={ { fontSize: 45 } } className="devicon-github-plain"></i></a>
      <a target='_blank' rel="noopener noreferrer" href='https://swell-project3.herokuapp.com/'><i style={ { fontSize: 45 } } className="fas fa-link"></i></a>
    </div>
  </div>
}
export default Swell