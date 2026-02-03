import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Home = () => (
  <div className="glass-card p-5 animate-in">
    <h1>🏠 Home Page</h1>
    <p>This is the first component of our multi-page SPA.</p>
  </div>
);

const Gallery = () => (
  <div className="glass-card p-5 animate-in">
    <h1>🖼️ Gallery Page</h1>
    <p>This is the second component mapped to a unique route.</p>
  </div>
);

const Services = () => (
  <div className="glass-card p-5 animate-in">
    <h1>⚙️ Services Page</h1>
    <p>This is the third component mapped to a unique route.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="spa-wrapper">
        <nav className="navbar navbar-expand-lg glass-header sticky-top">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">MULTI-PAGE SPA</Link>
            <div className="d-flex gap-3">
              <Link className="btn btn-outline-dark border-0" to="/">Home</Link>
              <Link className="btn btn-outline-dark border-0" to="/gallery">Gallery</Link>
              <Link className="btn btn-outline-dark border-0" to="/services">Services</Link>
            </div>
          </div>
        </nav>

        <div className="container py-5 mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        <footer className="footer-bar text-center py-4 mt-5">
          <small className="text-muted">Experiment-3: Client-Side Routing Implementation</small>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App