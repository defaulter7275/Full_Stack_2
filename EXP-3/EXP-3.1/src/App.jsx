import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const Home = () => (
  <div className="glass-card p-5 animate-fade-in">
    <h1 className="display-4 fw-bold">Welcome Home</h1>
    <p className="lead">This is the landing page. Notice how the URL changes without a page reload!</p>
    <Link to="/features" className="btn btn-dark btn-lg mt-3">View Features</Link>
  </div>
);

const Features = () => (
  <div className="glass-card p-5 animate-fade-in">
    <h1 className="display-4 fw-bold text-primary">Our Features</h1>
    <div className="row mt-4">
      <div className="col-md-6 mb-3">
        <div className="p-3 bg-white rounded-3 shadow-sm">
          <h5>🚀 Fast Routing</h5>
          <p className="small text-muted">React Router DOM handles transitions instantly.</p>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <div className="p-3 bg-white rounded-3 shadow-sm">
          <h5>✨ Seamless UX</h5>
          <p className="small text-muted">No flickering or white screens during navigation.</p>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="glass-card p-5 animate-fade-in">
    <h1 className="display-4 fw-bold text-success">Get in Touch</h1>
    <form className="mt-4">
      <input type="text" className="form-control mb-3" placeholder="Your Name" />
      <input type="email" className="form-control mb-3" placeholder="Your Email" />
      <button className="btn btn-success w-100 py-2" type="button" onClick={() => alert('Message Sent!')}>Send</button>
    </form>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app-background">
        <nav className="navbar navbar-expand-lg glass-nav sticky-top">
          <div className="container">
            <Link className="navbar-brand fw-bold" style={{fontSize: '1.5rem'}} to="/">ROUTING SPA</Link>
            <div className="ms-auto d-flex gap-3">
              <NavLink className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"} to="/features">Features</NavLink>
              <NavLink className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"} to="/contact">Contact</NavLink>
            </div>
          </div>
        </nav>

        <div className="container py-5 d-flex justify-content-center align-items-center" style={{minHeight: '80vh'}}>
          <div className="w-100" style={{maxWidth: '800px'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>

        <footer className="footer-glass text-center py-4">
          <p className="mb-0 text-muted">Unit-3: Client-Side Routing Experiment</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App