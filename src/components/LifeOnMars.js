import React from 'react'

const LifeOnMars = () => {


  return <div className='project-description'>
    <div className="project-subtitle">Life On Mars</div>
    <div className='project-details'>React | JavaScript | HTML | CSS</div>
    <p>For a side project during my course, I decided to practice what I'd learnt about React in the past week. I built a simple one-page React application providing the weather conditions on Mars and images from NASA's rovers. </p>
    <p>I retrieved the data from the NASA Mars API, gaining essential experience manipulating API data.</p>
    <div className='link-box'>
      <a target='_blank' rel="noopener noreferrer" href='https://github.com/ajames14/project-x/tree/master/project-x'><i style={ { fontSize: 45 } } className="devicon-github-plain"></i></a>
      <a target='_blank' rel="noopener noreferrer" href='https://ajames14.github.io/project-x/'><i style={ { fontSize: 45 } } className="fas fa-link"></i></a>
    </div>
  </div>
}
export default LifeOnMars