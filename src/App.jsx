import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Strip from './components/Strip'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Dock from './components/Dock'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Servizi from './pages/Servizi'
import Contatti from './pages/Contatti'
import Prenotazioni from './pages/Prenotazioni'
import Nutrizione from './pages/servizi/Nutrizione'
import Osteopatia from './pages/servizi/Osteopatia'
import Psicologia from './pages/servizi/Psicologia'
import Ozonoterapia from './pages/servizi/Ozonoterapia'

function Layout({ children }) {
  return (
    <>
      <Strip />
      <Nav />
      {children}
      <Footer />
      <Dock />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/chi-siamo" element={<Layout><ChiSiamo /></Layout>} />
        <Route path="/servizi" element={<Layout><Servizi /></Layout>} />
        <Route path="/servizi/nutrizione" element={<Layout><Nutrizione /></Layout>} />
        <Route path="/servizi/osteopatia" element={<Layout><Osteopatia /></Layout>} />
        <Route path="/servizi/psicologia" element={<Layout><Psicologia /></Layout>} />
        <Route path="/servizi/ozonoterapia" element={<Layout><Ozonoterapia /></Layout>} />
        <Route path="/contatti" element={<Layout><Contatti /></Layout>} />
        <Route path="/prenotazioni" element={<Layout><Prenotazioni /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
