import { useState } from 'react'

// Toont een foto uit de map public/photos/.
// Geef enkel de bestandsnaam mee (bv. "dag-1.jpg").
// Is er geen bestandsnaam, of bestaat het bestand (nog) niet, dan
// verschijnt er een vriendelijke Wonderland-placeholder i.p.v. een
// gebroken afbeelding.
//
// Met "placeholder" kun je een tekstje meegeven dat in de placeholder
// verschijnt (bv. welke scène uit de film je hier wil screenshotten).
export default function Photo({ src, alt, className = '', placeholder }) {
  const [mislukt, setMislukt] = useState(false)
  const heeftFoto = src && !mislukt

  if (!heeftFoto) {
    return (
      <div className={`photo photo--placeholder ${className}`} role="img" aria-label={alt}>
        <span className="photo__icon" aria-hidden="true">🐇</span>
        <p className="photo__hint">{placeholder || 'Foto volgt'}</p>
      </div>
    )
  }

  // Een volledige URL (https://...) wordt rechtstreeks gebruikt.
  // Anders zoeken we het bestand in de map public/photos/.
  const bron = /^https?:\/\//.test(src)
    ? src
    : `${import.meta.env.BASE_URL}photos/${src}`

  return (
    <img
      className={`photo ${className}`}
      src={bron}
      alt={alt}
      loading="lazy"
      onError={() => setMislukt(true)}
    />
  )
}
