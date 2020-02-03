import React from 'react'
import ReactDOM from 'react-dom'

import './styles.scss'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Projects'
import Experience from './components/Experience'
// import NavBar from './components/NavBar'

class App extends React.Component {


  render() {
    return <div>
      <Home />
      <About />
      <Project />
      <Experience />
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)