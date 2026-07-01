import Photo from './Photo.jsx'
import { camp } from '../content/camp.js'

// Slotsectie onderaan de pagina.
export default function Footer() {
  const { slot } = camp
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__photo">
          <Photo src={slot.foto} alt="Groepsfoto" />
        </div>
        <h2 className="footer__title">{slot.titel}</h2>
        {slot.tekst.map((alinea, i) => (
          <p key={i} className="footer__text">{alinea}</p>
        ))}
        <p className="footer__signoff">{slot.ondertekening}</p>
      </div>
    </footer>
  )
}
