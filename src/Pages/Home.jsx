import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="home-container position-relative text-white text-center d-flex justify-content-center align-items-center">
        
        {/* Première image du dessus */}
        <picture className="position-absolute top-0 start-0 w-100 h-100 z-0">
          <source srcSet="/hero-bg.jpg" media="(min-width: 992px)" />
          <source srcSet="/hero-bg-tablette.jpg" media="(min-width: 768px)" />
          <img src="/hero-bg-mobile.jpg"alt="image de fond"className="w-100 h-100 object-cover"/>
        </picture>
        <div className="position-relative z-2">
          <h1 className="display-2 text-white">Bonjour, je suis John Doe</h1>
          <h2 className="display-5 text-white">Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary mt-3 text-white">En savoir plus</a>
        </div>
        <div className="overlay position-absolute top-50 start-0 w-100 h-50 bg-dark"></div>
      </section>

      {/* Section About */}
      <section id="about" className="container my-4 mx-auto p-5 bg-white shadow mt-5 mb-5 ">
        <div className="row">
          {/* Première colonne*/}
          <div className="col-12 col-md-6">
            <h2 className="border-bottom border-primary pb-3">A propos</h2>
            <p className="fs-5">
              Passionné par l'informatique et les nouvelles technologies, 
              j'ai suivi une formation d'<strong> intégrateur-developpeur web</strong> au CEF.
              Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler 
              dans le domaine du <strong>développement web</strong>.
            </p>
            <p className="fs-5">
              Basé à Lyon, je suis en recherche d'une alternance, au sein d'une agnence digitale
              pour consolider ma formation de <strong>dévelopeur web fullstack</strong>
            </p>
            <p className="fs-5">
              j'accorde une attention particulière à la qualité du code que j'écris et je
              respecte les bonnes pratiques du web.
            </p>
           
          </div>

          {/* Deuxième Colonne Photo */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-start gap-3">
            <picture className="w-100">
              <source srcSet="/about-tab.jpg" media="(min-width: 768px)" />
              <img src="/about-mobile.jpg"alt="photo de John Doe"className="img-fluid"/>
            </picture>
            <h2 className="mt-3">Mes compétences</h2>
            {/* Progress bar */}
            <div className="w-100">
              <span className="d-block text-uppercase mb-1">HTML 90%</span>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"role="progressbar"style={{ width: "90%" }}aria-valuenow="90"aria-valuemin="0"aria-valuemax="100"></div>
              </div>
            </div>
            <div className="w-100">
              <span className="d-block text-uppercase mb-1">CSS 3 80%</span>
              <div className="progress">
                <div
                  className="progress-bar bg-info"role="progressbar"style={{ width: "80%" }}aria-valuenow="80"aria-valuemin="0"aria-valuemax="100"></div>
              </div>
            </div>
            <div className="w-100">
              <span className="d-block text-uppercase mb-1">JavaScript 70%</span>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"role="progressbar"style={{ width: "70%" }}aria-valuenow="70"aria-valuemin="0"aria-valuemax="100"></div>
              </div>
            </div>
            <div className="w-100">
              <span className="d-block text-uppercase mb-1">PHP 60%</span>
              <div className="progress">
                <div
                  className="progress-bar bg-success"role="progressbar"style={{ width: "60%" }}aria-valuenow="60"aria-valuemin="0"aria-valuemax="100"></div>
              </div>
            </div>
            <div className="w-100">
              <span className="d-block text-uppercase mb-1">React 50%</span>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"role="progressbar"style={{ width: "50%" }}aria-valuenow="50"aria-valuemin="0"aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;