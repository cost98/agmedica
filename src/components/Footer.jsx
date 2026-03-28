import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/assets/AGG-bianco.webp" alt="AG Medica Milano" className="logo-img footer-logo-white" style={{ height: '36px', marginBottom: '.8rem' }} />
          <p>Studio medico multidisciplinare a Opera (MI). Nutrizione, Osteopatia, Psicologia e Ozonoterapia integrate in un unico percorso di cura personalizzato.</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Navigazione</div>
          <Link to="/servizi">Servizi</Link>
          <Link to="/chi-siamo">Chi siamo</Link>
          <Link to="/contatti">Contatti</Link>
          <Link to="/prenotazioni">Prenota una visita</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contatti</div>
          <a href="tel:+390200000000">+39 02 0000 0000</a>
          <a href="mailto:info@agmedicamilano.it">info@agmedicamilano.it</a>
          <a href="https://wa.me/390000000000" target="_blank" rel="noopener">WhatsApp</a>
          <a href="https://www.miodottore.it" target="_blank" rel="noopener">Prenota su MioDottore</a>
          <div style={{ marginTop: '.8rem', color: 'rgba(255,255,255,0.35)', fontSize: '.78rem', lineHeight: '1.7' }}>
            Via Giacomo Leopardi 3<br />Opera (MI) 20090<br />Lun&ndash;Ven 9:00&ndash;19:00 &middot; Sab 9:00&ndash;13:00
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 AG Medica Milano Srl &middot; P.IVA 00000000000</span>
        <span>Tutti i diritti riservati</span>
      </div>
    </footer>
  )
}
