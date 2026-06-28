// Herbruikbare sectie-wrapper: geeft elke sectie een id (voor het menu),
// een titel en optioneel een ondertitel.
export default function Section({ id, eyebrow, titel, intro, children }) {
  return (
    <section id={id} className="section">
      <div className="section__head">
        {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
        <h2 className="section__title">{titel}</h2>
        {intro && <p className="section__intro">{intro}</p>}
      </div>
      {children}
    </section>
  )
}
