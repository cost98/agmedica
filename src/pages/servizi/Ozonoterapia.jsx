import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import PageHero from '../../components/PageHero'
import DoctorAvatar from '../../components/DoctorAvatar'

export default function Ozonoterapia() {
  useReveal()

  useEffect(() => {
    document.title = 'Ozonoterapia — AG Medica Milano'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Ozonoterapia a Opera MI con il Dr. Tommaso Richelmi. Trattamenti a base di ozono medicale per dolori cronici, artrosi, ernie discali e medicina rigenerativa.')
  }, [])

  return (
    <>
      <PageHero
        kicker="Specializzazione"
        title="Ozonoterapia"
        lead="Trattamenti medici con ozono ad alta purezza per azione antinfiammatoria, analgesica e rigenerativa. Una frontiera della medicina integrativa."
        breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/servizi', label: 'Servizi' }, { label: 'Ozonoterapia' }]}
      />

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="two-col">
            <div>
              <div className="content-block reveal">
                <h3>Il servizio</h3>
                <p>L&rsquo;ozonoterapia utilizza una miscela di ossigeno e ozono ad elevata purezza per stimolare i processi riparativi naturali del corpo. Il Dr. Richelmi applica questa metodica con protocolli clinicamente validati, personalizzati in base alla patologia trattata.</p>
                <p>Indicazioni principali: lombalgia cronica e lombosciatalgia, ernie discali e protrusioni, artrosi di anca, ginocchio e colonna, tendinopatie e lesioni muscolari, patologie vascolari periferiche.</p>
                <ul className="feature-list">
                  <li>Diagnosi e valutazione medica completa</li>
                  <li>Protocollo ozonoterapico personalizzato</li>
                  <li>Tecniche infiltrative e sistemiche</li>
                  <li>Monitoraggio del percorso terapeutico</li>
                </ul>
              </div>
              <div className="content-block reveal" style={{ marginTop: '1rem' }}>
                <h3>Sicurezza e metodologia</h3>
                <p>L&rsquo;ozono medicale viene prodotto con apparecchiature certificate e somministrato da medico specializzato. Il trattamento è sicuro, minimamente invasivo e ben tollerato.</p>
              </div>
            </div>
            <div className="booking-aside">
              <div className="doc-profile-card reveal">
                <DoctorAvatar className="doc-avatar-lg" initials="TR" alt="Dr. Tommaso Richelmi" src="/assets/doctors/tommaso-richelmi.webp" />
                <div className="doc-profile-name">Dr. Tommaso Richelmi</div>
                <div className="doc-profile-role">Medico &mdash; Ozonoterapia</div>
                <p className="doc-profile-bio">Specialista in ossigeno-ozonoterapia e medicina rigenerativa. Membro della SIOOT. Tratta dolori cronici e patologie ortopediche con protocolli avanzati.</p>
                <div className="chip-list">
                  <span className="chip">Ozono medicale</span>
                  <span className="chip">Infiltrazioni</span>
                  <span className="chip">Dolore cronico</span>
                  <span className="chip">Artrosi</span>
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
