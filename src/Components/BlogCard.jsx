import React, { useState, useEffect } from "react";

const BlogCard = () => {
  const [currentArticle, setCurrentArticle] = useState(null);

  const articles = [
    {
      name: "Coder son site en HTML/CSS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "22 août 2022",
      img: { src: "/blog/coder.jpg", alt: "Coder son site en HTML/CSS" },
    },
    {
      name: "Vendre ses produits sur le web",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "20 août 2022",
      img: { src: "/blog/croissance.jpg", alt: "Vendre ses produits sur le web" },
    },
    {
      name: "Se positionner sur Google",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "1 août 2022",
      img: { src: "/blog/google.jpg", alt: "Se positionner sur Google" },
    },
    {
      name: "Coder en responsive design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "31 juillet 2022",
      img: { src: "/blog/screens.jpg", alt: "Coder en responsive design" },
    },
    {
      name: "Technique de référencement",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "30 juillet 2022",
      img: { src: "/blog/seo.jpg", alt: "Technique de référencement" },
    },
    {
      name: "Apprendre à coder",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "12 juillet 2022",
      img: { src: "/blog/technos.png", alt: "Apprendre à coder" },
    },
  ];

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {articles.map((article, index) => (
          <div className="col my-2" key={index}>
            <div className="card h-100">
              <img src={article.img.src} className="card-img-top" alt={article.img.alt} />
              <div className="card-body">
                <h5 className="card-title">{article.name}</h5>
                <p className="card-text">{article.desc}</p>
                <button
                  type="button"className="btn btn-primary" onClick={() => setCurrentArticle(article)}aria-haspopup="dialog" aria-controls="article-modal" aria-expanded={!!currentArticle} >Lire la suite
                </button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary"> Publié le {article.date} </small>
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
                <p>L'article a été écrit le {currentArticle.date}.</p>
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

export default BlogCard;


