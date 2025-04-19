import React, { useEffect } from "react";
import "../Styles/Services.css";
import { Helmet } from "react-helmet";

export default function Services() {
 
  
  
  return (
    <>
    <Helmet>
    <title>Mes services, John Doe</title>
    <meta name="description" content="Découvrez mes Services en developpement web." />
    <meta name="robots" content="index, follow" />
  </Helmet>
    <div>
      <div className="container-fluid banner p-0">
      <picture>
        <source srcSet="/banner/banner.jpg" media="(min-width: 992px)"></source>
        <source srcSet="/banner/banner-tablette.jpg" media="(min-width: 768px)" ></source>
        <img src="/banner/banner-mobile.jpg"alt="image de fond"/>
      </picture>
      </div>
      <div className="container mt-5">
        <div className="text-center">
          <h2 className="text-uppercase">mon offre de services</h2>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
          <div className="border-bottom border-primary w-25 m-auto border-4 mb-5"></div>
        </div>
      </div>
      {/* Cards Services */}
      <div className="row row-cols-1 row-cols-md-3 g-4 p-5 mt-4 ms-4 me-4 mb-5">
        <div className="col md-4 mb-1">
          <div className="card text-center h-100 shadow-sm">
            <div className="card-body py-5 px-2 m-4">
              <i className="fas fa-desktop fa-2x text-primary mb-3 icon-hover-color"></i>
              <h5 className="card-title text-uppercase fs-5">UX Design</h5>
              <p className="card-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
            </div>
          </div>
        </div>
         <div className="col md-4 mb-1">
          <div className="card text-center h-100 shadow-sm">
           <div className="card-body py-5 px-2 m-4">
              <i className="fas fa-file-code fa-2x text-primary mb-3 icon-hover-color"></i>
              <h5 className="card-title text-uppercase fs-5">Développement Web</h5>
              <p className="card-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <em> HTML</em>, <em>CSS</em>, JavaScript et <em>PHP</em>.</p>
            </div>
         </div>
         </div>
          <div className="col md-4 mb-1">
            <div className="card text-center h-100 shadow-sm">
              <div className="card-body py-5 px-2 m-4">
               <i className="fas fa-magnifying-glass-dollar fa-2x text-primary mb-3 icon-hover-color"></i>
               <h5 className="card-title text-uppercase fs-5">Référencement</h5>
               <p className="card-text">Le <strong>référencement naturel d'un site</strong>, aussi appelé <em>SEO</em>, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
              </div>
            </div>
           </div>
      </div>
    </div>
    </>
    )
}
         
    