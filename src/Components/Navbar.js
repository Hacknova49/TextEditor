import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom'; // Use Link for navigation

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">{props.hometext}</Link> */}
              <a className="nav-link active" aria-current="page" href="#">{props.hometext}</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/About">{props.Aboutus}</Link> */}
              {/* <a className="nav-link" href="/">{props.Aboutus}</a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode === "light" ? 'dark' : 'light'} mx-3`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Enable Dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// To set default data type for props and to make sure that the data type is correct
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  hometext: PropTypes.string.isRequired,
  Aboutus: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  hometext: "Home",
  Aboutus: "About us",
}; // To set default value for props