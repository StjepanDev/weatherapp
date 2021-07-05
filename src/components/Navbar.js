import React from 'react';
import Container from 'react-bootstrap/Container';
import nav from '../css/Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-md">
        <Container>
          <a className="navbar-brand" href="/#">
            Dhmz
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  First Item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Second Item
                </a>
              </li>
              <li className="nav-item" />
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default Navbar;
