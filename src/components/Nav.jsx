import { useEffect, useState } from 'react'

// Sticky menu bovenaan. De links scrollen vloeiend naar de secties.
const links = [
  { href: '#kampboek', label: 'Kampboek' },
  { href: '#team', label: 'Leiding & Foeriers' },
  { href: '#praktisch', label: 'Praktisch' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  // Sluit het mobiele menu na navigatie.
  const sluit = () => setOpen(false)

  // Voeg een schaduw toe zodra je begint te scrollen.
  const [gescrolld, setGescrolld] = useState(false)
  useEffect(() => {
    const onScroll = () => setGescrolld(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${gescrolld ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={sluit}>
          <span className="nav__brand-icon" aria-hidden="true">🐇</span>
          <span className="nav__brand-text">Kabouters in Wonderland</span>
        </a>

        <button
          className="nav__toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={sluit}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
