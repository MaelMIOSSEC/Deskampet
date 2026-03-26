import logo from "../assets/deskampet-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <img src={logo} width="12%" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item menu-deroulant">
              <a className="nav-link" style={{ fontSize: 17 }} href="#">
                Accueil
              </a>
              <div className="sous-page">
                <a className="nav-link" href="#">
                  Présentation
                </a>
                <a className="nav-link" href="#propos">
                  A Propos
                </a>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </div>
            </li>
            <li className="nav-item menu-deroulant">
              <a
                className="nav-link"
                style={{ fontSize: 17 }}
                href="Services/services.html"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ fontSize: 17 }}
                href="aPropos/aPropos.html"
              >
                Valeurs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ fontSize: 17 }}
                href="Questions/questionsGénérales.html"
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ fontSize: 17 }}
                href="Avis/avis.html"
              >
                Avis clients
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
