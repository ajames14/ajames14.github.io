import React from 'react'

const NavBarN = () => {

  const handleMenu = () => {
    const burger = document.querySelector('.burger')
    const menuList = document.querySelector('#' + burger.dataset.target)

    burger.classList.toggle('is-active')
    menuList.classList.toggle('is-active')

  }

  return <nav id='navbar' className="navbar is-fixed-top is-transparent">
    <div className="navbar-brand">
      <a href='/' id='logo' className="navbar-item has-text-centered">AJ</a>
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navDrop" onClick={handleMenu}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navDrop" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a href='#project-page' className="navbar-link is-arrowless" >
            Projects
          </a>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a href='#about-page' className="navbar-link is-arrowless">
            About
          </a>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a href='#experience-page' className="navbar-link is-arrowless">
            Experience
          </a>
        </div>
      </div>
    </div>
  </nav >



}

export default NavBarN