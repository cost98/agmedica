import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero'
import DoctorAvatar from '../../components/DoctorAvatar'

export default function Nutrizione() {
  useReveal()

  useEffect(() => {
    document.title = 'Nutrizione — AG Medica Milano'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Nutrizione clinica e sportiva a Opera MI con il Dr. Antonio Balestra. Piani nutrizionali personalizzati, gestione del peso, disturbi alimentari e nutrizione sportiva.')
  }, [])

  return (
    <>
      <PageHero
        kicker="Specializzazione"
        title="Nutrizione"
        lead="Percorsi nutrizionali personalizzati per raggiungere il benessere attraverso un'alimentazione equilibrata e scientificamente fondata."
        breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/servizi', label: 'Servizi' }, { label: 'Nutrizione' }]}
      />

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="two-col">
            <div>
              <div className="content-block reveal">
                <h3>Il servizio</h3>
                <p>La nutrizione clinica personalizzata è il cuore del nostro approccio. Il Dr. Balestra valuta composizione corporea, abitudini alimentari, parametri ematici e stile di vita per costruire un piano nutrizionale sostenibile e realmente efficace.</p>
                <p>Trattiamo: sovrappeso e obesità, diabete e sindrome metabolica, disturbi del comportamento alimentare, nutrizione sportiva, intolleranze e allergie alimentari, alimentazione in gravidanza e allattamento.</p>
                <ul className="feature-list">
                  <li>Prima visita con analisi della composizione corporea</li>
                  <li>Piano nutrizionale personalizzato</li>
                  <li>Follow-up periodici con aggiustamenti</li>
                  <li>Supporto psicologico integrato se necessario</li>
                </ul>
              </div>
              <div className="content-block reveal" style={{ marginTop: '1rem' }}>
                <h3>Cosa aspettarsi</h3>
                <p>La prima visita dura circa 60 minuti. Si effettua una valutazione completa e si concordano gli obiettivi. Le visite di follow-up sono ogni 3–4 settimane nelle prime fasi, poi mensili.</p>
              </div>
            </div>
            <div className="booking-aside">
              <div className="doc-profile-card reveal">
                <DoctorAvatar className="doc-avatar-lg" initials="AB" alt="Dr. Antonio Balestra" src="/assets/doctors/antonio-balestra.webp" />
                <div className="doc-profile-name">Dr. Antonio Balestra</div>
                <div className="doc-profile-role">Nutrizionista</div>
                <p className="doc-profile-bio">Laureato in Scienze dell&rsquo;Alimentazione con dottorato in nutrizione clinica. Membro della Società Italiana di Nutrizione Umana.</p>
                <div className="chip-list">
                  <span className="chip">Nutrizione clinica</span>
                  <span className="chip">Nutrizione sportiva</span>
                  <span className="chip">DCA</span>
                  <span className="chip">Metabolismo</span>
                </div>
              </div>
              <div className="booking-card reveal">
                <h4>Prenota una visita</h4>
                <Link to="/prenotazioni" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Prenota ora</Link>
                <a href="https://www.miodottore.it" target="_blank" rel="noopener" className="contact-link" style={{ marginTop: '.6rem' }}><span className="contact-link-icon">🗓️</span>MioDottore</a>
                <a href="tel:+390200000000" className="contact-link"><span className="contact-link-icon">📞</span>+39 02 0000 0000</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
