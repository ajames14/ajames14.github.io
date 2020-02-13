import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma'

import './styles.scss'

import HomeN from './components/HomeN'
import AboutN from './components/AboutN'
import Experience from './components/Experience'
import NavBarN from './components/NavBarN'
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