import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useCounters } from '../hooks/useCounters'
import PageHero from '../components/PageHero'
import DoctorAvatar from '../components/DoctorAvatar'

export default function ChiSiamo() {
  useReveal()
  useCounters()

  useEffect(() => {
    document.title = 'Chi siamo — AG Medica Milano'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Il team di AG Medica Milano: Dr. Balestra, De Lumè, Romagnoli e Richelmi. Quattro specialisti che collaborano per offrirti un percorso di salute integrato a Opera (MI).')
  }, [])

  return (
    <>
      <PageHero
        kicker="Il team"
        title="<em>Chi siamo</em>"
        lead="AG Medica Milano è uno studio medico multidisciplinare fondato con una missione chiara: offrire cure specialistiche integrate, dove ogni professionista collabora per costruire il percorso di salute migliore per il paziente."
        breadcrumbs={[{ to: '/', label: 'Home' }, { label: 'Chi siamo' }]}
      />

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="section-head reveal">
            <div className="kicker">La filosofia</div>
            <h2 className="section-title">Medicina integrata, <em>persona al centro</em></h2>
          </div>
          <div className="two-col reveal">
            <div className="content-block">
              <h3>Il nostro approccio</h3>
              <p>In AG Medica crediamo che salute e benessere non siano separabili. Per questo abbiamo costruito uno studio dove nutrizionisti, osteopati, psicologi e medici specializzati in ozonoterapia lavorano in costante collaborazione.</p>
              <p>Ogni paziente viene accolto come persona unica: ascoltiamo la storia clinica, valutiamo lo stile di vita e costruiamo un percorso su misura. I nostri professionisti si confrontano regolarmente per garantire continuità e coerenza nelle cure.</p>
              <ul className="feature-list">
                <li>Approccio multidisciplinare e integrato</li>
                <li>Percorsi personalizzati e monitorati</li>
                <li>Comunicazione costante tra specialisti</li>
                <li>Ambiente accogliente e professionale</li>
              </ul>
            </div>
            <div className="content-block">
              <h3>La nostra storia</h3>
              <p>Lo studio nasce a Opera, nel cuore del sud-ovest milanese, con l&rsquo;obiettivo di portare eccellenza medica vicino ai pazienti. Nel corso degli anni abbiamo ampliato il team e le competenze, senza mai perdere il valore fondante: la cura della persona.</p>
              <p>Siamo presenti su MioDottore e disponibili telefonicamente per qualsiasi esigenza. La prenotazione è semplice, rapida e senza attese eccessive.</p>
              <div className="stat-grid" style={{ marginTop: '1.2rem' }}>
                <div className="stat"><div className="stat-val" data-count="9" data-suffix="+">9+</div><div className="stat-label">Anni attivi</div></div>
                <div className="stat"><div className="stat-val" data-count="4">4</div><div className="stat-label">Specialisti</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="section-head reveal">
            <div className="kicker">I professionisti</div>
            <h2 className="section-title">Il <em>team</em> di AG Medica</h2>
          </div>
          <div className="team-grid">
            <div className="team-card reveal">
              <DoctorAvatar className="team-avatar" initials="AB" alt="Dr. Antonio Balestra" src="/assets/doctors/antonio-balestra.webp" />
              <div className="team-info">
                <div className="team-name">Dr. Antonio Balestra</div>
                <div className="team-role">Nutrizionista</div>
                <p className="team-bio">Specializzato in nutrizione clinica e sportiva, con expertise nei disturbi del comportamento alimentare. Laureato in Scienze dell&rsquo;Alimentazione con dottorato in nutrizione clinica.</p>
              </div>
            </div>
            <div className="team-card reveal">
              <DoctorAvatar className="team-avatar" initials="GD" alt="Dr. Gianluca De Lumè" src="/assets/doctors/gianluca-de-lume.webp" />
              <div className="team-info">
                <div className="team-name">Dr. Gianluca De Lum&egrave;</div>
                <div className="team-role">Osteopata D.O.</div>
                <p className="team-bio">Esperto in osteopatia strutturale, craniosacrale e viscerale. Formazione conseguita presso le migliori scuole europee di osteopatia con oltre 15 anni di pratica clinica.</p>
              </div>
            </div>
            <div className="team-card reveal">
              <DoctorAvatar className="team-avatar" initials="AR" alt="Dr. Alessandro Romagnoli" src="/assets/doctors/alessandro-romagnoli.webp" />
              <div className="team-info">
                <div className="team-name">Dr. Alessandro Romagnoli</div>
                <div className="team-role">Psicologo e Psicoterapeuta</div>
                <p className="team-bio">Psicoterapeuta cognitivo-comportamentale, specializzato in ansia, depressione, disturbi dello stress e supporto individuale e di coppia. Iscritto all&rsquo;Ordine degli Psicologi della Lombardia.</p>
              </div>
            </div>
            <div className="team-card reveal">
              <DoctorAvatar className="team-avatar" initials="TR" alt="Dr. Tommaso Richelmi" src="/assets/doctors/tommaso-richelmi.webp" />
              <div className="team-info">
                <div className="team-name">Dr. Tommaso Richelmi</div>
                <div className="team-role">Medico &mdash; Ozonoterapia</div>
                <p className="team-bio">Specialista in ossigeno-ozonoterapia e medicina rigenerativa. Tratta dolori cronici, patologie articolari, ernie discali e supporta il recupero post-chirurgico.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
