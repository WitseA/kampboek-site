import Photo from './Photo.jsx'

// Eén dag uit het kampprogramma: foto naast de uitleg.
// Op desktop wisselen even/oneven dagen van kant (zigzag).
export default function DayCard({ dag, omgekeerd }) {
  return (
    <article className={`daycard ${omgekeerd ? 'daycard--reverse' : ''}`}>
      <div className="daycard__photo">
        <Photo src={dag.foto} alt={`Dag ${dag.nr} – ${dag.titel}`} />
        <span className="daycard__badge">Dag {dag.nr}</span>
      </div>
      <div className="daycard__body">
        <p className="daycard__date">{dag.datum}</p>
        <h3 className="daycard__title">{dag.titel}</h3>
        <p className="daycard__text">{dag.tekst}</p>
      </div>
    </article>
  )
}
