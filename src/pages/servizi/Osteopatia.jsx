import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero'
import DoctorAvatar from '../../components/DoctorAvatar'

export default function Osteopatia() {
  useReveal()

  useEffect(() => {
    document.title = 'Osteopatia — AG Medica Milano'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Osteopatia a Opera MI con il Dr. Gianluca De Lumè D.O. Trattamenti manuali per mal di schiena, cervicale, ernie discali e problemi posturali. 15+ anni di esperienza.')
  }, [])

  return (
    <>
      <PageHero
        kicker="Specializzazione"
        title="Osteopatia"
        lead="Terapia manuale olistica per risolvere disfunzioni muscoloscheletriche, posturali e viscerali. Il corpo come sistema integrato."
        breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/servizi', label: 'Servizi' }, { label: 'Osteopatia' }]}
      />

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="two-col">
            <div>
              <div className="content-block reveal">
                <h3>Il servizio</h3>
                <p>L&rsquo;osteopatia è una disciplina terapeutica manuale che valuta e tratta le disfunzioni del sistema muscolo-scheletrico, viscerale e craniosacrale. Il Dr. De Lumè lavora sul corpo nel suo insieme, identificando le cause profonde del dolore e del disagio.</p>
                <p>Indicazioni principali: mal di schiena e cervicale, ernie discali, dolori articolari, cefalee tensivo-muscolari, problemi posturali, recupero post-traumatico, disturbi viscerali correlati.</p>
                <ul className="feature-list">
                  <li>Valutazione osteopatica globale</li>
                  <li>Tecniche strutturali, craniosacrale e viscerale</li>
                  <li>Piano di trattamento individuale</li>
                  <li>Consigli posturali e di autocura</li>
                </ul>
              </div>
              <div className="content-block reveal" style={{ marginTop: '1rem' }}>
                <h3>Come si svolge la seduta</h3>
                <p>La prima seduta dura 60–75 minuti e include anamnesi completa. Le sedute successive durano 45–60 minuti. Il numero di trattamenti varia in base alla condizione.</p>
              </div>
            </div>
            <div className="booking-aside">
              <div className="doc-profile-card reveal">
                <DoctorAvatar className="doc-avatar-lg" initials="GD" alt="Dr. Gianluca De Lumè" src="/assets/doctors/gianluca-de-lume.webp" />
                <div className="doc-profile-name">Dr. Gianluca De Lum&egrave;</div>
                <div className="doc-profile-role">Osteopata D.O.</div>
                <p className="doc-profile-bio">Oltre 15 anni di pratica clinica. Formazione nelle migliori scuole europee. Esperto in osteopatia strutturale, craniosacrale e viscerale.</p>
                <div className="chip-list">
                  <span className="chip">Strutturale</span>
                  <span className="chip">Craniosacrale</span>
                  <span className="chip">Viscerale</span>
                  <span className="chip">Postura</span>
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
