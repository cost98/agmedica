import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero'
import DoctorAvatar from '../../components/DoctorAvatar'

export default function Psicologia() {
  useReveal()

  useEffect(() => {
    document.title = 'Psicologia — AG Medica Milano'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Psicologia e psicoterapia a Opera MI con il Dr. Alessandro Romagnoli. Approccio cognitivo-comportamentale per ansia, stress, depressione e percorsi di coppia.')
  }, [])

  return (
    <>
      <PageHero
        kicker="Specializzazione"
        title="Psicologia"
        lead="Supporto psicologico professionale per prendersi cura della mente con la stessa cura che dedichiamo al corpo. Un percorso guidato, riservato e personalizzato."
        breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/servizi', label: 'Servizi' }, { label: 'Psicologia' }]}
      />

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="two-col">
            <div>
              <div className="content-block reveal">
                <h3>Il servizio</h3>
                <p>Il Dr. Alessandro Romagnoli offre un supporto psicologico individuale e di coppia basato sull&rsquo;approccio cognitivo-comportamentale, uno dei metodi più validati dalla ricerca scientifica. Ogni percorso è costruito sulle specifiche esigenze del paziente, con obiettivi concreti e verificabili.</p>
                <p>Aree di intervento: ansia e attacchi di panico, depressione e umore basso, stress lavorativo e burnout, difficoltà relazionali e di coppia, elaborazione di lutti e traumi, supporto in momenti di transizione.</p>
                <ul className="feature-list">
                  <li>Colloquio di valutazione iniziale</li>
                  <li>Percorso terapeutico strutturato</li>
                  <li>Tecniche cognitivo-comportamentali</li>
                  <li>Supporto individuale e di coppia</li>
                </ul>
              </div>
              <div className="content-block reveal" style={{ marginTop: '1rem' }}>
                <h3>Riservatezza e spazio sicuro</h3>
                <p>Ogni seduta si svolge in un ambiente riservato e professionale. Il segreto professionale è garantito nel rispetto del Codice Deontologico degli Psicologi.</p>
              </div>
            </div>
            <div className="booking-aside">
              <div className="doc-profile-card reveal">
                <DoctorAvatar className="doc-avatar-lg" initials="AR" alt="Dr. Alessandro Romagnoli" src="/assets/doctors/alessandro-romagnoli.webp" />
                <div className="doc-profile-name">Dr. Alessandro Romagnoli</div>
                <div className="doc-profile-role">Psicologo e Psicoterapeuta</div>
                <p className="doc-profile-bio">Psicoterapeuta cognitivo-comportamentale, iscritto all&rsquo;Ordine degli Psicologi della Lombardia. Specializzato in ansia, depressione e psicoterapia di coppia.</p>
                <div className="chip-list">
                  <span className="chip">Ansia</span>
                  <span className="chip">Depressione</span>
                  <span className="chip">Coppia</span>
                  <span className="chip">CBT</span>
                </div>
              </div>
              <div className="booking-card reveal">
                <a href="https://www.miodottore.it" target="_blank" rel="noopener" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Prenota su MioDottore</a>
                <a href="tel:+390200000000" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '.8rem' }}>Chiama per prenotare</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
