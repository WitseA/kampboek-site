// Herbruikbaar kaartje voor praktische informatie.
export default function InfoBlock({ titel, children, className = '' }) {
  return (
    <div className={`card infoblock ${className}`}>
      {titel && <h3 className="infoblock__title">{titel}</h3>}
      {children}
    </div>
  )
}
