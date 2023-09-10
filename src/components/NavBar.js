import React, { Component } from 'react';

export class NavBar extends Component {
  handleClick = (country) => {
    // Call a function in the parent component to update the selected country
    this.props.onCountryChange(country);
  };

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <u>Digital_Media_Times</u>
            </a>
              <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About Us
                  </a>
                </li>
              </ul> 
              <div > 
              <button
                  className="btn btn-primary me-2"
                  onClick={() => this.handleClick('in')}
                >
                  India
                </button>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => this.handleClick('us')}
                >
                  US
                </button>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => this.handleClick('gb')}
                >
                  UK
                </button>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => this.handleClick('au')}
                >
                  Australia
                </button>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => this.handleClick('se')}
                >
                  Sweden
                </button>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => this.handleClick('es')}
                >
                  Spain
                </button>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => this.handleClick('ua')}
                >
                  Ukraine
                </button>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => this.handleClick('sg')}
                >
                  Singapore
                </button>
                
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

