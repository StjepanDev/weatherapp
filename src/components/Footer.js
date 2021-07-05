import React from 'react';
import foot from '../css/Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3
                style={{
                  color: 'rgb(103,152,233)',
                  borderColor: 'rgb(103,152,233)',
                }}
              >
                Services
              </h3>
              <ul>
                <li>
                  <a href="/#">Web design</a>
                </li>
                <li>
                  <a href="/#">Development</a>
                </li>
                <li>
                  <a href="/#">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3
                style={{
                  color: 'rgb(103,152,233)',
                }}
              >
                About
              </h3>
              <ul>
                <li>
                  <a href="/#">Company</a>
                </li>
                <li>
                  <a href="/#">Team</a>
                </li>
                <li>
                  <a href="/#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3
                style={{
                  borderColor: 'rgb(103,152,233)',
                  background: 'rgba(255,255,255,0)',
                  color: 'rgb(103,152,233)',
                }}
              >
                Company Name
              </h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className="col item social">
              <a href="/#">
                <i className="icon ion-social-facebook" />
              </a>
              <a href="/#">
                <i className="icon ion-social-twitter" />
              </a>
              <a href="/#">
                <i className="icon ion-social-snapchat" />
              </a>
              <a href="/#">
                <i className="icon ion-social-instagram" />
              </a>
            </div>
          </div>
          <p className="copyright">Company Name © 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
