import React from 'react'

const Tetris = () => {


  return <div className='project-description'>
    <div className="project-subtitle">Tetris</div>
    <div className='project-details'>JavaScript | CSS | HTML </div>
    <p>Applying knowledge from the first two weeks of the course, we were tasked with building a computer game in vanilla JavaScript, using DOM manipulation. I chose to build Tetris, using my problem-solving skills to create the logic of the game. I realised the importance of refactoring to provide streamlined and readable code.</p>
    <div className='link-box'>
      <a target='_blank' rel="noopener noreferrer" href='https://ajames14.github.io/project-1/'><i style={ { fontSize: 45 } } className="devicon-github-plain"></i></a>
      <a target='_blank' rel="noopener noreferrer" href='https://github.com/ajames14/project-1'><i style={ { fontSize: 45 } } className="fas fa-link"></i></a>
    </div>
  </div>
}
export default Tetris