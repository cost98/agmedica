import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'

export default function Prenotazioni() {
  useReveal()

  const [form, setForm] = useState({ nome: '', email: '', tel: '', servizio: '', messaggio: '' })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Richiesta informazioni - ${form.nome}`)
    const body = encodeURIComponent(`Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.messaggio}`)
    window.location.href = `mailto:info@agmedicamilano.it?subject=${subject}&body=${body}`
  }

  useEffect(() => {
    document.title = 'Prenota — AG Medica Milano'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Prenota una visita ad AG Medica Milano. Nutrizione, Osteopatia, Psicologia, Ozonoterapia. Compila il modulo, chiama o prenota su MioDottore.')
  }, [])

  return (
    <>
      <PageHero
        kicker="Inizia il percorso"
        title="Prenota una <em>visita</em>"
        lead="Scegli come contattarci: compila il modulo, chiamaci direttamente, scrivici su WhatsApp o prenota online su MioDottore. Risponderemo entro 24 ore."
        breadcrumbs={[{ to: '/', label: 'Home' }, { label: 'Prenotazioni' }]}
      />

      <div className="sep"></div>

      <section className="section">
        <div className="w">
          <div className="booking-steps">
            <div className="step reveal">
              <div className="step-num">01</div>
              <h4>Scegli il servizio</h4>
              <p>Identifica la specializzazione di cui hai bisogno: nutrizione, osteopatia, psicologia o ozonoterapia.</p>
            </div>
            <div className="step reveal">
              <div className="step-num">02</div>
              <h4>Contattaci</h4>
              <p>Invia il modulo, chiama, scrivi su WhatsApp o prenota direttamente online tramite MioDottore.</p>
            </div>
            <div className="step reveal">
              <div className="step-num">03</div>
              <h4>Prima visita</h4>
              <p>Lo specialista ascolterà la tua storia clinica e costruirà il percorso più adatto a te.</p>
            </div>
          </div>

          <div className="two-col">
            <div className="form-card reveal">
              <div className="kicker" style={{ marginBottom: '1.2rem' }}>Modulo di richiesta</div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="nome">Nome e Cognome *</label>
                  <input type="text" id="nome" name="nome" placeholder="Mario Rossi" required value={form.nome} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="mario@esempio.it" required value={form.email} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="tel">Telefono</label>
                  <input type="tel" id="tel" name="tel" placeholder="+39 333 000 0000" value={form.tel} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="servizio">Servizio richiesto</label>
                  <select id="servizio" name="servizio" value={form.servizio} onChange={handleChange}>
                    <option value="">-- Seleziona --</option>
                    <option value="Nutrizione">Nutrizione — Dr. Balestra</option>
                    <option value="Osteopatia">Osteopatia — Dr. De Lum&egrave;</option>
                    <option value="Psicologia">Psicologia — Dr. Romagnoli</option>
                    <option value="Ozonoterapia">Ozonoterapia — Dr. Richelmi</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="messaggio">Messaggio</label>
                  <textarea id="messaggio" name="messaggio" placeholder="Descrivi brevemente le tue necessità..." value={form.messaggio} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Invia richiesta</button>
              </form>
            </div>

            <div className="booking-aside">
              <div className="booking-card reveal">
                <h4>Contatti diretti</h4>
                <a href="tel:+390200000000" className="contact-link"><span className="contact-link-icon">📞</span>+39 02 0000 0000</a>
                <a href="mailto:info@agmedicamilano.it" className="contact-link"><span className="contact-link-icon">✉️</span>info@agmedicamilano.it</a>
                <a href="https://wa.me/390000000000" target="_blank" rel="noopener" className="contact-link"><span className="contact-link-icon">💬</span>WhatsApp</a>
              </div>
              <div className="booking-card reveal">
                <h4>Prenota online</h4>
                <p style={{ fontSize: '.88rem', color: 'var(--text-dim)', marginBottom: '.9rem', lineHeight: '1.65' }}>Su MioDottore puoi vedere la disponibilità degli specialisti e prenotare direttamente.</p>
                <a href="https://www.miodottore.it" target="_blank" rel="noopener" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Apri MioDottore</a>
              </div>
              <div className="booking-card reveal">
                <h4>Orari di apertura</h4>
                <div className="info-row" style={{ border: 'none', padding: '.2rem 0', background: 'transparent' }}>
                  <div className="info-content"><strong>Lun&ndash;Ven</strong><span>9:00 &ndash; 19:00</span></div>
                </div>
                <div className="info-row" style={{ border: 'none', padding: '.2rem 0', background: 'transparent' }}>
                  <div className="info-content"><strong>Sabato</strong><span>9:00 &ndash; 13:00</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
