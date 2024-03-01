import React from 'react'
import PropTypes from 'prop-types'   
{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/}

export default function NavBar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
  <div className="container-fluid">
    <div className="navbar-brand" >{props.title}</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">{props.About}</a></li>
            <li><a className="dropdown-item" to="#">{props.cont}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#">Home</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch mx-3 text-${props.mode==='light'? 'dark':'light'} `}>
  <input className="form-check-input"  onClick={props.togglemode} type="checkbox" role="switch"  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

NavBar.prototype = {
    title : PropTypes.string,
    about : PropTypes.string
}

