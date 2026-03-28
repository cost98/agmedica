import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'

export default function Contatti() {
  useReveal()

  useEffect(() => {
    document.title = 'Contatti — AG Medica Milano'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Contatta AG Medica Milano: Via Giacomo Leopardi 3, Opera (MI). Telefono, WhatsApp, email e mappa. Aperto Lun–Ven 9–19, Sab 9–13.')
  }, [])

  return (
    <>
      <PageHero
        kicker="Dove siamo"
        title="Contattaci"
        lead="Siamo a Opera, a pochi minuti da Milano. Puoi raggiungerci per telefono, WhatsApp, email o direttamente in studio. Rispondiamo in tempi rapidi."
        breadcrumbs={[{ to: '/', label: 'Home' }, { label: 'Contatti' }]}
      />

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="contatti-grid">
            <div>
              <div className="contact-info-block">
                <div className="info-row reveal">
                  <div className="info-icon">📍</div>
                  <div className="info-content"><strong>Indirizzo</strong><span>Via Giacomo Leopardi 3, Opera (MI) 20090</span></div>
                </div>
                <div className="info-row reveal">
                  <div className="info-icon">📞</div>
                  <div className="info-content"><strong>Telefono</strong><span><a href="tel:+390200000000">+39 02 0000 0000</a></span></div>
                </div>
                <div className="info-row reveal">
                  <div className="info-icon">💬</div>
                  <div className="info-content"><strong>WhatsApp</strong><span><a href="https://wa.me/390000000000" target="_blank" rel="noopener">Scrivi su WhatsApp</a></span></div>
                </div>
                <div className="info-row reveal">
                  <div className="info-icon">✉️</div>
                  <div className="info-content"><strong>Email</strong><span><a href="mailto:info@agmedicamilano.it">info@agmedicamilano.it</a></span></div>
                </div>
                <div className="info-row reveal">
                  <div className="info-icon">⏰</div>
                  <div className="info-content"><strong>Orari di apertura</strong><span>Luned&igrave;&ndash;Venerd&igrave;: 9:00&ndash;19:00<br />Sabato: 9:00&ndash;13:00</span></div>
                </div>
                <div className="info-row reveal">
                  <div className="info-icon">🗓️</div>
                  <div className="info-content"><strong>Prenotazione online</strong><span><a href="https://www.miodottore.it" target="_blank" rel="noopener">Prenota su MioDottore →</a></span></div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.9!2d9.19!3d45.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia%20Giacomo%20Leopardi%203%2C%20Opera%20MI!5e0!3m2!1sit!2sit!4v1"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa AG Medica Milano"
                style={{ minHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
