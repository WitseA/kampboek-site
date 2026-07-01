import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import DayCard from './components/DayCard.jsx'
import PersonCard from './components/PersonCard.jsx'
import InfoBlock from './components/InfoBlock.jsx'
import Footer from './components/Footer.jsx'

import { days } from './content/days.js'
import { leiding, foeriers, foeriersIntro } from './content/team.js'
import { info } from './content/info.js'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* 1. KAMPBOEK ------------------------------------------------ */}
        <Section
          id="kampboek"
          eyebrow="Het kampprogramma"
          titel="Het Kampboek"
          intro="Hieronder lees je dag per dag wat de kabouters beleven in Wonderland. Niet verklappen aan de kabouters!"
        >
          <div className="days">
            {days.map((dag, i) => (
              <DayCard key={dag.nr} dag={dag} omgekeerd={i % 2 === 1} />
            ))}
          </div>
        </Section>

        {/* 2. LEIDING & FOERIERS ------------------------------------- */}
        <Section
          id="team"
          eyebrow="Wie zorgt er voor je kabouter?"
          titel="Leiding & Foeriers"
        >
          <h3 className="subheading">De leiding</h3>
          <div className="people">
            {leiding.map((p) => (
              <PersonCard key={p.naam} persoon={p} />
            ))}
          </div>

          <h3 className="subheading subheading--spaced">En onze topfoeriers</h3>
          <p className="subheading__intro">{foeriersIntro}</p>
          <div className="people">
            {foeriers.map((p) => (
              <PersonCard key={p.naam} persoon={p} />
            ))}
          </div>
        </Section>

        {/* 3. PRAKTISCH ---------------------------------------------- */}
        <Section
          id="praktisch"
          eyebrow="Goed om te weten"
          titel="Adres & Praktische info"
        >
          <div className="info-grid">

            {/* Brief versturen */}
            <InfoBlock titel={info.post.titel}>
              <p>{info.post.tekst}</p>
              <div className="postcard">
                {info.post.adresregels.map((regel, i) => (
                  <span key={i}>{regel}</span>
                ))}
              </div>
              <p className="muted">{info.post.tip}</p>
            </InfoBlock>

            {/* Contact & noodnummer */}
            <InfoBlock titel={info.contact.titel}>
              <p>{info.contact.tekst}</p>
              <div className="emergency">
                <span className="emergency__icon" aria-hidden="true">☎️</span>
                <span>
                  Noodnummer ({info.contact.noodnummerNaam}):{' '}
                  {info.contact.noodnummer ? (
                    <a href={`tel:${info.contact.noodnummer.replace(/\s/g, '')}`}>
                      <strong>{info.contact.noodnummer}</strong>
                    </a>
                  ) : (
                    <em>volgt</em>
                  )}
                </span>
              </div>
            </InfoBlock>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}
