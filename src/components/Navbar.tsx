import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/deskampet-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <img src={logo} width="12%" alt="Deskampet Logo" />

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <i className="fas fa-bars ms-1" />
        </button>

        <div
          className={`navbar-collapse ${isOpen ? "d-block" : "d-none d-lg-flex"}`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item drop-down-menu">
              <Link className="nav-link text-base" to="/">
                Accueil
              </Link>
              <div className="section">
                <HashLink smooth className="nav-link" to="/#header">
                  Présentation
                </HashLink>
                <HashLink smooth className="nav-link" to="/#about">
                  A Propos
                </HashLink>
                <HashLink smooth className="nav-link" to="/#contact">
                  Contact
                </HashLink>
              </div>
            </li>
            <li className="nav-item drop-down-menu">
              <Link className="nav-link text-base" to="/services">
                Services
              </Link>
              <div className="section">
                <HashLink smooth className="nav-link" to="/services#price">
                  Tarifs
                </HashLink>
                <HashLink smooth className="nav-link" to="/services#operation">
                  Fonctionnement
                </HashLink>
                <HashLink smooth className="nav-link" to="/services#opinion">
                  Avis
                </HashLink>
              </div>
            </li>
            <li className="nav-item drop-down-menu">
              <Link className="nav-link text-base" to="/values">
                Valeurs
              </Link>
              <div className="section">
                <HashLink smooth className="nav-link" to="/values#history">
                  Mon histoire
                </HashLink>
                <HashLink smooth className="nav-link" to="/values#values">
                  Mes valeurs
                </HashLink>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-base" to="/questions">
                Questions / Réponses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
