import Photo from './Photo.jsx'

// Eén kaartje voor een leiding of foerier.
// Velden die leeg zijn ('') worden niet getoond.
export default function PersonCard({ persoon }) {
  const velden = [
    { label: 'Totem', waarde: persoon.totem },
    { label: 'Studie / job', waarde: persoon.studie },
    { label: "Hobby's", waarde: persoon.hobbys },
    { label: 'Weetje', waarde: persoon.weetje },
    { label: 'Favoriete Wonderland-figuur', waarde: persoon.figuur },
  ].filter((v) => v.waarde && v.waarde.trim() !== '')

  return (
    <article className="person">
      <div className="person__photo">
        <Photo src={persoon.foto} alt={persoon.naam} />
      </div>
      <div className="person__body">
        <h3 className="person__name">{persoon.naam}</h3>
        {persoon.rol && <p className="person__role">{persoon.rol}</p>}
        {velden.length > 0 && (
          <dl className="person__facts">
            {velden.map((v) => (
              <div key={v.label} className="person__fact">
                <dt>{v.label}</dt>
                <dd>{v.waarde}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  )
}
