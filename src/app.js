import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './styles.scss'

import HomeN from './components/HomeN'
import AboutN from './components/AboutN'
import ProjectN from './components/ProjectN'
import Experience from './components/Experience'
import NavBarN from './components/NavBarN'
import NewHome from './components/NewHome'
import Projects from './components/Projects'


class App extends React.Component {


  render() {
    return <>
      <NavBarN />
      <HomeN />
      <AboutN />
      <Projects />
      <Experience />
    </>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)