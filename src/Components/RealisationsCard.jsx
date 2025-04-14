import React, { useState, useEffect } from "react";

const RealisationsCard = () => {
  const [currentArticle, setCurrentArticle] = useState(null);

  const articles = [
    {
      name: "Fresh Food",
      desc: "Réalisation d'un site avec commande en ligne",
      techno: "avec PHP et MySQL",
      img: {src:"/portfolio/fresh-food.jpg",alt:"Fresh food"},
    },
    {
      name: "Restaurant Akira",
      desc: "Réalisation d'un site vitrine",
      techno: "avec WordPress",
      img: { src:"/portfolio/restaurant-akira.jpg",alt:"Restaurant Akira"},
    },
    {
      name: "Espace bien-être",
      desc: "Réalisation d'un site vitrine pour un praticien de bien-être",
      techno: "en HTML/CSS",
      img: {src:"/portfolio/espace-bien-etre.jpg",alt: "Espace Bien être"},
    },
    
  ];

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {articles.map((article, index) => (
          <div className="col my-2" key={index}>
            <div className="card h-100">
              <img src={article.img.src} className="card-img-top" alt={article.img.alt} />
              <div className="card-body text-center">
                <h2 className="card-title">{article.name}</h2>
                <p className="card-text">{article.desc}</p>
                <button
                  type="button"className="btn btn-outline-primary" onClick={() => setCurrentArticle(article)}aria-haspopup="dialog" aria-controls="article-modal" aria-expanded={!!currentArticle} >Voir
                </button>
              </div>
              <div className="card-footer text-center">
                <small className="text-body-secondary"> Site réalisé {article.techno} </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modale*/}
      {currentArticle && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc" id="article-modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-title">
                  {currentArticle.name}
                </h5>
                <button type="button"className="btn-close"aria-label="Fermer la modale" onClick={() => setCurrentArticle(null)}></button>
              </div>
              <div className="modal-body" id="modal-desc">
                <img src={currentArticle.img.src} alt={currentArticle.img.alt} className="img-fluid mb-3"/>
                <p>{currentArticle.desc}</p>
                <p>Le site a été créé {currentArticle.techno}.</p>
              </div>
              <div className="modal-footer">
                <button type="button"className="btn btn-secondary"onClick={() => setCurrentArticle(null)}aria-label="Fermer l’article">Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RealisationsCard;


