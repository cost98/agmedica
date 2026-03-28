import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [servOpen, setServOpen] = useState(false)
  const close = () => { setOpen(false); setServOpen(false) }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760 && open) {
        close()
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [open])

  return (
    <div className="nav-wrap">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={close}>
          <img src="/assets/AGG.webp" alt="AG Medica Milano" className="logo-img" />
          <div className="logo-text">
            <strong>AG Medica Milano</strong>
            <small>Studio Medico</small>
          </div>
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`} id="nav-links">
          <NavLink to="/" end onClick={close}>Home</NavLink>

          <div
            className={`nav-item${servOpen ? ' dropdown-open' : ''}`}
            onMouseEnter={() => setServOpen(true)}
            onMouseLeave={() => setServOpen(false)}
          >
            <NavLink
              to="/servizi"
              onClick={close}
              className={({ isActive }) => isActive ? 'active' : ''}
            >Servizi</NavLink>
            <button
              className="servizi-toggle"
              aria-label="Mostra voci Servizi"
              onClick={(e) => { e.preventDefault(); setServOpen(v => !v) }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="13" height="13" className="chevron" aria-hidden="true">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div className="nav-dropdown">
              <Link to="/servizi/nutrizione" onClick={close}>Nutrizione</Link>
              <Link to="/servizi/osteopatia" onClick={close}>Osteopatia</Link>
              <Link to="/servizi/psicologia" onClick={close}>Psicologia</Link>
              <Link to="/servizi/ozonoterapia" onClick={close}>Ozonoterapia</Link>
            </div>
          </div>

          <NavLink to="/chi-siamo" onClick={close}>Chi siamo</NavLink>
          <NavLink to="/contatti" onClick={close}>Contatti</NavLink>
          <Link to="/prenotazioni" className="nav-mobile-cta" onClick={close}>Prenota una visita</Link>
        </nav>

        <Link to="/prenotazioni" className="nav-cta-btn" onClick={close}>Prenota</Link>

        <button
          className={`burger${open ? ' open' : ''}`}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  )
}
