import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

const Footer = () => {

//Lien de retour en haut de page
const [showBackToTop, setShowBackToTop] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <footer className="footer d-flex flex-column">
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
              <a href="https://github.com/JohnDoe" target="_blank" rel="nofollow noreferrer" aria-label="Visiter le profil GitHub de John Doe">
                <i className="fab fa-github fa-2x text-dark ms-3"></i>
              </a>
              <a href="https://twitter.com/JohnDoe" target="_blank" rel="nofollow noreferrer"aria-label="Visiter le profil Twitter de John Doe">
                <i className="fab fa-twitter fa-2x text-dark ms-3"></i>
              </a>
              <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="nofollow noreferrer"aria-label="Visiter le profil LinkedIn de John Doe">
                <i className="fab fa-linkedin fa-2x text-dark ms-3"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="#about">À propos</Link></li>
              <li><Link to="/LegalNotice">Mentions Légales</Link></li>
              <li><Link to="/github-profile">Profil GitHub</Link></li> {/* profile Githug ajouté ici */}
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/works">Fresh Food</Link></li>
              <li><Link to="/works">Restaurant Akira</Link></li>
              <li><Link to="/works">Espace bien-être</Link></li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog">Coder son site en HTML/CSS</Link></li>
              <li><Link to="/blog">Vendre ses produits sur le web</Link></li>
              <li><Link to="/blog">Se positionner sur Google</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center py-3">
        <p className="mb-0">© Designed by John Doe</p>
        {showBackToTop && (
        <a href="#top" className="ms-3 text-white text-hover-color">Haut de page</a>)}
      </div>
    </footer>
  );
};

export default Footer;

