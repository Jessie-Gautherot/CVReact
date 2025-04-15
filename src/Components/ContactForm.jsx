import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log("Formulaire envoyé", data)
    alert("Votre message a été envoyé avec succès !")
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 text-white">
      {/* Nom */}
      <div className="mb-3">
        <input type="text" placeholder="Nom" className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
          {...register('nom', { required: 'Le nom est requis.' })}/>
        {errors.nom && <div className="invalid-feedback">{errors.nom.message}</div>}
      </div>
      {/* Email */}
      <div className="mb-3">
        <input type="email"placeholder="Email"className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          {...register('email', {
            required: 'L’e-mail est requis.',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Adresse e-mail invalide.',
            },
          })}/>
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>
      {/* Téléphone */}
      <div className="mb-3">
        <input type="tel"placeholder="Téléphone"className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
          {...register('telephone', { required: 'Le numéro est requis.' })}/>
        {errors.telephone && <div className="invalid-feedback">{errors.telephone.message}</div>}
      </div>
      {/* Sujet */}
      <div className="mb-3">
        <input type="text"placeholder="Sujet"className={`form-control ${errors.sujet ? 'is-invalid' : ''}`}
          {...register('sujet', { required: 'Le sujet est requis.' })}/>
        {errors.sujet && <div className="invalid-feedback">{errors.sujet.message}</div>}
      </div>
      {/* Message */}
      <div className="mb-3">
        <textarea rows="5"placeholder="Message"className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          {...register('message', { required: 'Le message est requis.' })}> 
        </textarea>
        {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary rounded">Envoyer</button>
      </div>
    </form>
  )
}
