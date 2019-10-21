import React, { Component } from 'react'
import '../css/navbar.scss'
import navlogo from '../images/navlogo.PNG'
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
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Specialities</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Reviews</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item ONLINE">
        <a className="nav-link" href="#">BOOK ONLINE</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }
}
