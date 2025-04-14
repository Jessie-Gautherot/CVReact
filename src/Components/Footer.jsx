import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer d-flex flex-column bg-light">
      <div className="container py-5">
        <div className="row">
          {/* Colonne 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="mb-2">John Doe</h5>
            <div className="footer-info">
              <p className="d-block mb-1">Adresse : 40 rue de Laure Diebold</p>
              <p className="d-block mb-1">69009 Lyon, France</p>
              <p className="d-block mb-2">Téléphone : 06 20 30 40 50</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/JohnDoe" target="_blank" rel="nofollow noreferrer">
                <i className="fab fa-github fa-2x text-dark ms-3"></i>
              </a>
              <a href="https://twitter.com/JohnDoe" target="_blank" rel="nofollow noreferrer">
                <i className="fab fa-twitter fa-2x text-dark ms-3"></i>
              </a>
              <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="nofollow noreferrer">
                <i className="fab fa-linkedin fa-2x text-dark ms-3"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Me contacter</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="/LegalNotice">Mentions Légales</a></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/works">Fresh Food</a></li>
              <li><a href="/works">Restaurant Akira</a></li>
              <li><a href="/works">Espace bien-être</a></li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li><a href="/blog">Coder son site en HTML/CSS</a></li>
              <li><a href="/blog">Vendre ses produits sur le web</a></li>
              <li><a href="/blog">Se positionner sur Google</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center py-3">
        <p className="mb-0">© Designed by John Doe</p>
        <a href="#top" className="ms-3 text-white" id="backToTop" style={{ display: "none" }}>
          Haut de page
        </a>
      </div>
    </footer>
  );
};

export default Footer;
