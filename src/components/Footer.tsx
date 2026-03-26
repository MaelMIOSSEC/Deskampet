const Footer = () => {
  return (
    <footer
      className="footer py-4"
      style={{ backgroundColor: "#5fb9a9", color: "white" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            Copyright © Deskampet 2025
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.instagram.com/deskampet/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.facebook.com/profile.php?id=61557632776340&sk=photos"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a
              className="text-decoration-none me-3"
              style={{ color: "white" }}
              href="#!"
            >
              Mentions légales
            </a>
            <a
              className="text-decoration-none me-3"
              style={{ color: "white" }}
              href="#!"
            >
              Politique de confidentialité
            </a>
            <a
              className="text-decoration-none "
              style={{ color: "white" }}
              href="#!"
            >
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
