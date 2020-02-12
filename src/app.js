import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

import HomeN from './components/HomeN'
import AboutN from './components/AboutN'
import ProjectN from './components/ProjectN'
import Experience from './components/Experience'
import NavBarN from './components/NavBarN'
import NewHome from './components/NewHome'
import Projects from './components/Projects'
import Contact from './components/Contact'


class App extends React.Component {


  render() {
    return <>
      <NavBarN />
      <HomeN />
      <AboutN />
      <Projects />
      <Experience />
      <Contact />
    </>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)