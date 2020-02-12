import React from 'react'

const MakeItCount = () => {


  return <div className='project-description'>
    <div className="project-subtitle">Make It Count</div>
    <div className='project-details'> JavaScript | React | Node.js | Bulma | HTML | CSS.</div>
    <p>Tasked with building a React application using a third party API, my partner and I decided to build a topical website ahead of the general election, called “Make it Count”.</p>
    <p>This allowed users to enter a UK postcode to find their constituency, learn about their candidates and previous general election results in their constituency. We used three external API’s to retrieve data for our site.</p>
    <div className='link-box'>
      <a target='_blank' rel="noopener noreferrer" href='https://github.com/ajames14/make-it-count'><i style={{ fontSize: 45 }} className="devicon-github-plain"></i></a>
      <a target='_blank' rel="noopener noreferrer" href='https://jennikate.github.io/make-it-count/'><i style={{ fontSize: 45 }} className="fas fa-link"></i></a>
    </div>
  </div>
}
export default MakeItCount