import Photo from './Photo.jsx'
import { camp } from '../content/camp.js'

// De cover bovenaan: groep, titel, datums, sfeerfoto en het voorwoord.
export default function Hero() {
  return (
    <div id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner">
        <p className="hero__group">{camp.groep} · {camp.tak}</p>
        <h1 className="hero__title">{camp.titel}</h1>
        <p className="hero__subtitle">{camp.ondertitel}</p>

        <div className="hero__photo">
          <Photo src={camp.coverFoto} alt="Sfeerbeeld van het kamp" />
        </div>

        <div className="hero__intro card">
          <h2 className="hero__intro-title">Beste ouders</h2>
          {camp.voorwoord.map((alinea, i) => (
            <p key={i}>{alinea}</p>
          ))}
          <p className="hero__signoff">
            {camp.voorwoordOndertekening.split('\n').map((regel, i) => (
              <span key={i}>
                {regel}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}
