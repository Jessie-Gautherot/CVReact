import React from 'react';

export default function LegalNotice() {
    return (
        <div className="container mt-3">
          <div className="text-center">
            <h2 className="text-uppercase">Mentions légales</h2>
          <div className="border-bottom w-25 m-auto border-3 border-primary"></div>
        </div>

        <div className="accordion my-5 rounded">
        {/* Accordéon editeur */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button"type="button"data-bs-toggle="collapse"data-bs-target=".editor-collapse"aria-expanded="false">
              Éditeur du site
              </button>
            </h2>
              <div className="accordion-collapse collapse editor-collapse">
                <div className="accordion-body">
                  <h3>John Doe</h3>
                  <address>
                    <p>
                      <i className="fas fa-map-marker-alt me-2"></i>
                      40 Rue Laure Diebold<br />69009 Lyon, France
                    </p>
                    <p>
                      <i className="fas fa-mobile-alt me-2"></i>
                      <a href="tel:0620304050" className="text-primary">06 20 30 40 50</a>
                    </p>
                    <p>
                      <i className="fas fa-envelope me-2"></i>
                      <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                    </p>
                  </address>
                </div>
              </div>
              </div>
                {/* Hébergeur */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse"data-bs-target=".host-collapse"aria-expanded="false">
                    Hébergeur
                    </button>
                  </h2>
                    <div className="accordion-collapse collapse host-collapse">
                      <div className="accordion-body">
                        <h3>Always Data</h3>
                        <address>
                        <p>91 rue du Faubourg Saint Honoré<br />75008 Paris, France</p>
                        <p>
                        <i className="fas fa-globe me-2"></i>
                        <a href="https://www.alwaysdata.com" className="text-primary" target="_blank" rel="noreferrer">
                        www.alwaysdata.com</a>
                        </p>
                        </address>
                      </div>
                    </div>
                </div>
                {/* Crédits */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse"data-bs-target=".credits-collapse"aria-expanded="false">
                    Crédits
                    </button>
                  </h2>
                    <div className="accordion-collapse collapse credits-collapse">
                      <div className="accordion-body">
                        <h3>Crédits</h3>
                          <p>Site développé par John Doe, étudiant du CEF</p>
                          <p>
                          Les images libres de droit sont issues du site&nbsp;
                          <a href="https://pixabay.com/fr/" className="text-primary" target="_blank" rel="noreferrer">
                          Pixabay</a>
                          </p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
