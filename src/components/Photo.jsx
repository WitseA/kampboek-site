import { useState } from 'react'

// Toont een foto uit de map public/photos/.
// Geef enkel de bestandsnaam mee (bv. "dag-1.jpg").
// Is er geen bestandsnaam, of bestaat het bestand (nog) niet, dan
// verschijnt er een vriendelijke Wonderland-placeholder i.p.v. een
// gebroken afbeelding.
export default function Photo({ src, alt, className = '' }) {
  const [mislukt, setMislukt] = useState(false)
  const heeftFoto = src && !mislukt

  if (!heeftFoto) {
    return (
      <div className={`photo photo--placeholder ${className}`} role="img" aria-label={alt}>
        <span className="photo__icon" aria-hidden="true">🐇</span>
        <span className="photo__hint">Foto volgt</span>
      </div>
    )
  }

  return (
    <img
      className={`photo ${className}`}
      src={`${import.meta.env.BASE_URL}photos/${src}`}
      alt={alt}
      loading="lazy"
      onError={() => setMislukt(true)}
    />
  )
}
