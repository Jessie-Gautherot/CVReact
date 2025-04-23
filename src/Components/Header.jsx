import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/header.css"

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom " aria-label="Navigation principale">
        <div className="container">
          <NavLink className="navbar-brand text-uppercase" to="/">
            John Doe
          </NavLink>

          {/* Menu Hamburger */}
          <button className="navbar-toggler"type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>

          {/* Liens de navigation */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav text-uppercase">
              <li className="nav-item">
                <NavLink to="/"className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services"className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/works"className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Réalisations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog"className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact"className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  me contacter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
