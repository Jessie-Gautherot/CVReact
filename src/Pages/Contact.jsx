import ContactForm from '../Components/ContactForm'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
<>
      
<Helmet>
  <title>Contact, John Doe</title>
  <meta name="description" content="Contactez-moi pour une future collaboration" />
  <meta name="robots" content="index, follow" />
</Helmet>
  
      <section className="container-fluid p-0 position-relative pt-3 pb-5">
        {/* Image de fond */}
        <div className="position-absolute top-0 start-0 w-100 h-100 z-n1">
          <img src="/contact-bg.jpg" alt="Image de fond" className="w-100 h-100 object-fit-cover"/>
        </div>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-primary bg-opacity-50 z-0"></div>
        {/* Contenu principal */}
        <div className="container position-relative bg-white z-1 rounded shadow">
          <div className="container py-5">
            <div className="text-center mb-4">
              <h2 className="text-uppercase">Me contacter</h2>
              <p> Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
              <div className="border-bottom border-primary w-25 m-auto border-4 mb-5"></div>
            </div>
            <div className="row">
              {/* Formulaire */}
              <div className="col-12 col-md-6">
                <h4 className="mb-3">Formulaire de contact</h4>
                <div className="border-bottom border-primary m-auto border-2 mb-5"></div>
                <ContactForm />
              </div>
              {/* Coordonnées + Carte */}
              <div className="col-12 col-md-6">
                <h4 className="mb-3">Mes coordonnées</h4>
                <div className="border-bottom border-primary m-auto border-2 mb-5"></div>
                <address>
                  <p>
                    <i className="fas fa-location-dot me-2"></i>
                    40 Rue Laure Diebold, 69009 Lyon, France
                  </p>
                  <p>
                    <i className="fas fa-mobile-screen-button me-2"></i>
                    06 20 30 40 50
                  </p>
                </address>
                <div className="ratio ratio-16x9 mt-3">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754105!2d4.796403976619976!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1715978654018!5m2!1sfr!2sfr" 
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Carte de localisation" className="border-0"> 
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
