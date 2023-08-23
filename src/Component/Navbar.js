import React from 'react';
import './style.css'

const Navbar = () => {
  return (
    <div className='container'>
    <nav className="navbar bg-glassmorphism navbar-expand-lg navbar-dark bg-transparent">
      <a className="navbar-brand text-dark NavbarPortHeading" href="/">PortFolio</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-4 active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="/">Projects</a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="/">About Me</a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="/">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
