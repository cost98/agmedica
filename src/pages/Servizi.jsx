import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'

export default function Servizi() {
  useReveal()

  useEffect(() => {
    document.title = 'Servizi — AG Medica Milano'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'I servizi di AG Medica Milano: Nutrizione, Osteopatia, Psicologia, Ozonoterapia a Opera (MI).')
  }, [])

  return (
    <>
      <PageHero
        kicker="Cosa facciamo"
        title="I nostri <em>servizi</em>"
        lead="Quattro discipline specialistiche integrate per prendersi cura della salute a 360°. Ogni percorso è personalizzato, monitorato e coordinato tra i professionisti dello studio."
        breadcrumbs={[{ to: '/', label: 'Home' }, { label: 'Servizi' }]}
      />

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="services-grid">
            <Link to="/servizi/nutrizione" className="svc-card reveal">
              <span className="svc-num">01</span>
              <div className="svc-name">Nutrizione</div>
              <div className="svc-doctor">Dr. Antonio Balestra</div>
              <p className="svc-desc">Percorsi nutrizionali personalizzati per raggiungere e mantenere il peso forma, migliorare le abitudini alimentari e supportare la salute metabolica. Diete terapeutiche, nutrizione sportiva e gestione dei DCA.</p>
              <span className="svc-link">Approfondisci</span>
            </Link>
            <Link to="/servizi/osteopatia" className="svc-card reveal">
              <span className="svc-num">02</span>
              <div className="svc-name">Osteopatia</div>
              <div className="svc-doctor">Dr. Gianluca De Lum&egrave;</div>
              <p className="svc-desc">Trattamenti manuali per il corpo nel suo insieme. Risolvi problemi muscoloscheletrici, posturali e articolari con un approccio olistico basato sull&rsquo;anatomia e la fisiologia del corpo umano.</p>
              <span className="svc-link">Approfondisci</span>
            </Link>
            <Link to="/servizi/psicologia" className="svc-card reveal">
              <span className="svc-num">03</span>
              <div className="svc-name">Psicologia</div>
              <div className="svc-doctor">Dr. Alessandro Romagnoli</div>
              <p className="svc-desc">Supporto psicologico individuale e di coppia. Un percorso guidato per affrontare ansie, stress, blocchi emotivi e migliorare la qualità della vita attraverso tecniche cognitivo-comportamentali.</p>
              <span className="svc-link">Approfondisci</span>
            </Link>
            <Link to="/servizi/ozonoterapia" className="svc-card reveal">
              <span className="svc-num">04</span>
              <div className="svc-name">Ozonoterapia</div>
              <div className="svc-doctor">Dr. Tommaso Richelmi</div>
              <p className="svc-desc">Trattamenti all&rsquo;ozono medicale con azione antinfiammatoria, analgesica e rigenerativa. Indicato per dolori cronici, artrosi, ernie discali e patologie muscolo-tendinee.</p>
              <span className="svc-link">Approfondisci</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="w">
          <div className="quote-banner reveal">
            <p className="quote-text">Ogni visita è solo l&rsquo;inizio di un percorso: i nostri specialisti collaborano per offrirti un <em>piano di salute integrato</em>, non interventi isolati.</p>
            <Link to="/prenotazioni" className="btn btn-outline-white">Inizia il tuo percorso</Link>
          </div>
        </div>
      </section>
    </>
  )
}
