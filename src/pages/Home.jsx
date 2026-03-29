import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useCounters } from '../hooks/useCounters'
import DoctorAvatar from '../components/DoctorAvatar'

export default function Home() {
  useReveal()
  useCounters()

  useEffect(() => {
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'AG Medica Milano — Studio medico specializzato in Nutrizione, Osteopatia, Psicologia e Ozonoterapia. Via Giacomo Leopardi 3, Opera (MI).')
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-layout">
          <div>
            <div className="hero-eyebrow">Opera, Milano &middot; Dal 2015</div>
            <h1 className="hero-title reveal">
              La tua salute,<br />
              curata da <em>specialisti</em>.
            </h1>
            <p className="hero-sub reveal">
              Quattro discipline integrate sotto un unico tetto: il tuo percorso di benessere inizia con un team che mette la persona al centro di ogni cura.
            </p>
            <div className="hero-actions reveal">
              <Link to="/prenotazioni" className="btn btn-primary">Prenota una visita</Link>
              <Link to="/servizi" className="btn btn-outline-white">Scopri i servizi</Link>
            </div>
            <div className="hero-trust reveal">
              <div className="trust-item"><span className="trust-dot"></span>Iscritti all&rsquo;Ordine</div>
              <div className="trust-item"><span className="trust-dot"></span>Risposta entro 24 ore</div>
              <div className="trust-item"><span className="trust-dot"></span>Certificati MioDottore</div>
            </div>
          </div>

          <div className="hero-card reveal">
            <div className="hero-card-title">Lo studio in numeri</div>
            <div className="stat-grid">
              <div className="stat">
                <div className="stat-val" data-count="9" data-suffix="+">9+</div>
                <div className="stat-label">Anni di attività</div>
              </div>
              <div className="stat">
                <div className="stat-val" data-count="4">4</div>
                <div className="stat-label">Specializzazioni</div>
              </div>
              <div className="stat">
                <div className="stat-val" data-count="4">4</div>
                <div className="stat-label">Medici esperti</div>
              </div>
              <div className="stat">
                <div className="stat-val" data-count="500" data-suffix="+">500+</div>
                <div className="stat-label">Pazienti seguiti</div>
              </div>
            </div>
            <div className="svc-chips">
              <div className="svc-chip"><span className="svc-chip-dot"></span>Nutrizione clinica e sportiva</div>
              <div className="svc-chip"><span className="svc-chip-dot"></span>Osteopatia e riabilitazione</div>
              <div className="svc-chip"><span className="svc-chip-dot"></span>Psicologia e supporto cognitivo</div>
              <div className="svc-chip"><span className="svc-chip-dot"></span>Ozonoterapia</div>
            </div>
            <Link to="/prenotazioni" className="hero-card-cta">Fissa il tuo appuntamento →</Link>
          </div>
        </div>
      </section>

      <div className="sep"></div>

      {/* SERVICES */}
      <section className="section">
        <div className="w">
          <div className="section-head reveal">
            <div className="kicker">I nostri servizi</div>
            <h2 className="section-title">Cure integrate per il <em>tuo benessere</em></h2>
            <p className="section-lead">Ogni percorso è personalizzato e seguito da uno specialista dedicato. Dalla prima valutazione al follow-up.</p>
          </div>
          <div className="services-grid">
            <Link to="/servizi/nutrizione" className="svc-card nutri reveal">
              <div className="svc-header">
                <span className="svc-num">01</span>
              </div>
              <div className="svc-name">Nutrizione</div>
              <div className="svc-doctor">Dr. Antonio Balestra</div>
              <p className="svc-desc">Percorsi nutrizionali clinici e sportivi, gestione del peso, disturbi del comportamento alimentare. Dal primo bilancio al follow-up mensile.</p>
              <span className="svc-link">Scopri il servizio</span>
            </Link>
            <Link to="/servizi/osteopatia" className="svc-card osteo reveal">
              <div className="svc-header">
                <span className="svc-num">02</span>
              </div>
              <div className="svc-name">Osteopatia</div>
              <div className="svc-doctor">Dr. Gianluca De Lumè</div>
              <p className="svc-desc">Terapia manuale per dolori muscoloscheletrici, posturali e viscerali. Tecnica strutturale, craniosacrale e viscerale per il corpo nel suo insieme.</p>
              <span className="svc-link">Scopri il servizio</span>
            </Link>
            <Link to="/servizi/psicologia" className="svc-card psico reveal">
              <div className="svc-header">
                <span className="svc-num">03</span>
              </div>
              <div className="svc-name">Psicologia</div>
              <div className="svc-doctor">Dr. Alessandro Romagnoli</div>
              <p className="svc-desc">Psicoterapia cognitivo-comportamentale per ansia, depressione, stress e blocchi emotivi. Percorsi individuali e di coppia in ambiente riservato.</p>
              <span className="svc-link">Scopri il servizio</span>
            </Link>
            <Link to="/servizi/ozonoterapia" className="svc-card ozono reveal">
              <div className="svc-header">
                <span className="svc-num">04</span>
              </div>
              <div className="svc-name">Ozonoterapia</div>
              <div className="svc-doctor">Dr. Tommaso Richelmi</div>
              <p className="svc-desc">Ozono medicale a effetto antinfiammatorio, analgesico e rigenerativo. Ideale per artrosi, ernie discali, dolori cronici e recupero post-operatorio.</p>
              <span className="svc-link">Scopri il servizio</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="sep"></div>

      {/* PROCESS */}
      <section className="section section-alt">
        <div className="w">
          <div className="section-head reveal">
            <div className="kicker">Come funziona</div>
            <h2 className="section-title">Il tuo percorso di <em>cura</em></h2>
            <p className="section-lead">Dalla prima visita al benessere duraturo: tre passaggi chiari, un team sempre al tuo fianco.</p>
          </div>
          <div className="process-grid">
            <div className="process-item reveal">
              <div className="process-num">01</div>
              <div className="process-title">Prima visita</div>
              <p className="process-desc">Lo specialista valuta storia clinica, stile di vita e obiettivi. Un ascolto vero, senza fretta, per capire la persona prima della condizione.</p>
            </div>
            <div className="process-item reveal">
              <div className="process-num">02</div>
              <div className="process-title">Piano personalizzato</div>
              <p className="process-desc">Ricevi un percorso costruito su misura. Se necessario, i professionisti dello studio collaborano tra loro per una cura integrata.</p>
            </div>
            <div className="process-item reveal">
              <div className="process-num">03</div>
              <div className="process-title">Follow-up continuo</div>
              <p className="process-desc">Visite di controllo periodiche, aggiustamenti del piano e supporto costante fino al raggiungimento degli obiettivi.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="sep"></div>

      {/* TEAM */}
      <section className="section">
        <div className="w">
          <div className="section-head reveal">
            <div className="kicker">Il nostro team</div>
            <h2 className="section-title">Medici <em>specialisti</em></h2>
            <p className="section-lead">Professionisti certificati e aggiornati, con esperienza clinica pluridecennale e grande dedizione verso ogni paziente.</p>
          </div>
          <div className="doctors-grid">
            <Link to="/servizi/nutrizione" className="doc-card reveal">
              <DoctorAvatar className="doc-avatar" initials="AB" alt="Dr. Antonio Balestra" src="/assets/doctors/antonio-balestra.webp" style={{ background: '#3d9e6a' }} />
              <div className="doc-name">Dr. Antonio Balestra</div>
              <div className="doc-role">Nutrizionista</div>
              <p className="doc-spec">Nutrizione clinica, sportiva e DCA. Dottorato in nutrizione clinica. Membro SINU.</p>
              <span className="doc-link">Prenota una visita</span>
            </Link>
            <Link to="/servizi/osteopatia" className="doc-card reveal">
              <DoctorAvatar className="doc-avatar" initials="GD" alt="Dr. Gianluca De Lumè" src="/assets/doctors/gianluca-de-lume.webp" />
              <div className="doc-name">Dr. Gianluca De Lumè</div>
              <div className="doc-role">Osteopata D.O.</div>
              <p className="doc-spec">15+ anni di pratica clinica. Tecnica strutturale, craniosacrale e viscerale.</p>
              <span className="doc-link">Prenota una seduta</span>
            </Link>
            <Link to="/servizi/psicologia" className="doc-card reveal">
              <DoctorAvatar className="doc-avatar" initials="AR" alt="Dr. Alessandro Romagnoli" src="/assets/doctors/alessandro-romagnoli.webp" style={{ background: '#7b6fcf' }} />
              <div className="doc-name">Dr. Alessandro Romagnoli</div>
              <div className="doc-role">Psicologo</div>
              <p className="doc-spec">Psicoterapeuta cognitivo-comportamentale. Iscr. Ordine Psicologi Lombardia.</p>
              <span className="doc-link">Prenota un colloquio</span>
            </Link>
            <Link to="/servizi/ozonoterapia" className="doc-card reveal">
              <DoctorAvatar className="doc-avatar" initials="TR" alt="Dr. Tommaso Richelmi" src="/assets/doctors/tommaso-richelmi.webp" style={{ background: '#3a7bbf' }} />
              <div className="doc-name">Dr. Tommaso Richelmi</div>
              <div className="doc-role">Medico — Ozonoterapia</div>
              <p className="doc-spec">Specialista in ossigeno-ozonoterapia e medicina rigenerativa. Ortopedia e dolori cronici.</p>
              <span className="doc-link">Prenota una visita</span>
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="section section-navy">
        <div className="w">
          <div className="quote-banner reveal">
            <p className="quote-text">
              &ldquo;Crediamo che la salute non sia solo assenza di malattia, ma uno <em>stato di equilibrio completo</em> &mdash; fisico, mentale e relazionale. Per questo ogni specialista di AG Medica lavora in sinergia, con il paziente sempre al centro.&rdquo;
            </p>
            <Link to="/chi-siamo" className="btn btn-outline-white">Scopri la nostra filosofia</Link>
          </div>
        </div>
      </section>

      <div className="sep"></div>

      {/* GALLERY */}
      <section className="section">
        <div className="w">
          <div className="section-head reveal">
            <div className="kicker">Lo studio</div>
            <h2 className="section-title">Il nostro <em>ambiente</em></h2>
            <p className="section-lead">Spazi pensati per il benessere: ambienti accoglienti, attrezzature moderne, un approccio caldo e professionale.</p>
          </div>
          <div className="gallery-grid">
            <div className="gal-item reveal">
              <img src="/assets/studio-2.webp" alt="Sala accoglienza AG Medica" className="gal-img" />
              <div className="gal-cap">Sala accoglienza — Reception &amp; area attesa</div>
            </div>
            <div className="gal-item reveal">
              <img src="/assets/studio-1.webp" alt="Studio medico AG Medica" className="gal-img" />
              <div className="gal-cap">Studio medico — Visite specialistiche</div>
            </div>
            <div className="gal-item reveal">
              <img src="/assets/studio-3.webp" alt="Ingresso AG Medica" className="gal-img" />
              <div className="gal-cap">Ingresso — La prevenzione è la prima cura</div>
            </div>
            <div className="gal-item reveal">
              <div className="gal-ph" style={{ background: 'linear-gradient(145deg,#f0edde,#f8f4eb)' }}>
                <div className="gal-ph-icon">💬</div>
                <span className="gal-ph-label">Studio psicologico</span>
              </div>
              <div className="gal-cap">Studio psicologico — Sedute psicologiche</div>
            </div>
          </div>
        </div>
      </section>

      <div className="sep"></div>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="w">
          <div className="section-head reveal">
            <div className="kicker">Cosa dicono i pazienti</div>
            <h2 className="section-title">Testimonianze <em>verificate</em></h2>
            <p className="section-lead">Le parole di chi ha scelto AG Medica per il proprio percorso di salute.</p>
          </div>
          <div className="reviews-grid">
            <div className="review-card reveal">
              <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="review-text">&ldquo;Il Dr. Balestra ha trasformato il mio rapporto con il cibo. Non una dieta, ma un vero percorso educativo. In 5 mesi ho raggiunto il peso forma con energia e benessere che non avevo da anni.&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar" style={{ background: '#3d9e6a' }}>ML</div>
                <div>
                  <div className="review-name">M. L.</div>
                  <div className="review-service">Paziente Nutrizione &middot; Opera</div>
                </div>
              </div>
            </div>
            <div className="review-card reveal">
              <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="review-text">&ldquo;Soffro di mal di schiena cronico da anni. Dopo 4 sedute con il Dr. De Lum&egrave; il dolore &egrave; quasi scomparso. Finalmente qualcuno che tratta la causa, non solo i sintomi.&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar">GP</div>
                <div>
                  <div className="review-name">G. P.</div>
                  <div className="review-service">Paziente Osteopatia &middot; Milano</div>
                </div>
              </div>
            </div>
            <div className="review-card reveal">
              <div className="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="review-text">&ldquo;Ho iniziato un percorso con il Dr. Romagnoli in un momento molto difficile. La sua professionalit&agrave; e l&rsquo;ambiente accogliente dello studio mi hanno aiutato enormemente.&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar" style={{ background: '#7b6fcf' }}>SA</div>
                <div>
                  <div className="review-name">S. A.</div>
                  <div className="review-service">Paziente Psicologia &middot; Rozzano</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sep"></div>

      {/* CONTACT / MAP */}
      <section className="contact-section">
        <div className="w">
          <div className="section-head reveal">
            <div className="kicker">Dove siamo</div>
            <h2 className="section-title">Raggiungi <em>lo studio</em></h2>
          </div>
          <div className="contact-layout">
            <div className="contact-info-block">
              <div className="info-row reveal">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="info-content">
                  <strong>Indirizzo</strong>
                  <span>Via Giacomo Leopardi 3, Opera (MI) 20090</span>
                </div>
              </div>
              <div className="info-row reveal">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.47 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l1.02-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="info-content">
                  <strong>Telefono</strong>
                  <span><a href="tel:+390200000000">+39 02 0000 0000</a></span>
                </div>
              </div>
              <div className="info-row reveal">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="info-content">
                  <strong>Email</strong>
                  <span><a href="mailto:info@agmedicamilano.it">info@agmedicamilano.it</a></span>
                </div>
              </div>
              <div className="info-row reveal">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="info-content">
                  <strong>Orari</strong>
                  <span>Lun&ndash;Ven 9:00&ndash;19:00 &middot; Sab 9:00&ndash;13:00</span>
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
                style={{ minHeight: '360px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
