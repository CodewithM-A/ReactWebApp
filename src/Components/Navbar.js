import React from 'react'

import  PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props){
    return (
      <>
      <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TextCounter</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link active" to="/TextForm" aria-current="page">Home</NavLink>
          
        </li>
        <li class="nav-item">
          {/* <link class="nav-link" to="/About">About</link> */}
          <NavLink className="nav-link " to="/About">About</NavLink>
        </li>
       
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
      
      </>
    )
}