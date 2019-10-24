import React, { Component } from 'react'
import '../css/navbar.scss'
import navlogo from '../images/navlogo.PNG'
import {Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">
    <img src={navlogo} alt="brand"></img>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" Link to ="/" >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" Link to ="/About" >About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" Link to ="/Gallery" >Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" Link to ="/Specialities" >Specialities</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" Link to ="/Reviews" >Reviews</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" Link to ="/Contact" >Contact</a>
      </li>
      <li className="nav-item ONLINE">
        <a className="nav-link" >BOOK ONLINE</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }
}
