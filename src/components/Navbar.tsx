import { useState } from "react";
import { Link } from "react-router-dom";
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
              <Link className="nav-link" style={{ fontSize: 17 }} to="/">
                Accueil
              </Link>
              <div className="section">
                <a className="nav-link" href="#header">Présentation</a>
                <a className="nav-link" href="#propos">A Propos</a>
                <a className="nav-link" href="#contact">Contact</a>
              </div>
            </li>
            <li className="nav-item drop-down-menu">
              <Link className="nav-link" style={{ fontSize: 17 }} to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ fontSize: 17 }} to="/values">
                Valeurs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;