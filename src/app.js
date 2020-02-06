import React from 'react'
import ReactDOM from 'react-dom'
import Zoom from 'react-reveal/Zoom'

import 'bulma'
import './styles.scss'
import HomeN from './components/HomeN'
import AboutN from './components/AboutN'
import ProjectN from './components/ProjectN'
import Experience from './components/Experience'
// import NavBar from './components/NavBar'

class App extends React.Component {


  render() {
    return <div>
      <HomeN />
      <ProjectN />
      <AboutN />
      <Experience />
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)