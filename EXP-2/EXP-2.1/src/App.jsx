import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const handleAction = (feature) => {
    alert(`You clicked on: ${feature}! Redirecting to ${feature} details...`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Success! Your message has been sent to our team.");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-image-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top glass-nav">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#" onClick={scrollToTop}>✨ VIBeUI</a>
          <div className="ms-auto d-flex">
            <button className="nav-btn me-3" onClick={() => handleAction('Home')}>Homii</button>
            <button className="nav-btn" onClick={() => handleAction('Features')}>Features</button>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <div className="hero-section glass-card text-center p-5 mb-5 animate-fade-in">
          <h1 className="display-3 fw-black text-gradient">Design The Future</h1>
          <p className="lead text-secondary mb-4">
            A Single Page Application using React and Bootstrap for 2nd Experiment. 
            Experience smooth interactions and modern glassmorphism aesthetics.
          </p>
          <button className="btn btn-primary-custom btn-lg px-5 shadow-lg" onClick={() => handleAction('Onboarding')}>
            Get Started
          </button>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card glass-card h-100 border-0 p-3 card-hover">
              <div className="card-body">
                <div className="icon-box mb-3 bg-soft-primary">🚀</div>
                <h4 className="fw-bold">Fast Setup</h4>
                <p className="text-muted">Bootstrap's layout engine ensures our site looks perfect on mobile, tablet, and desktop.</p>
                <button className="btn btn-link p-0 text-decoration-none fw-bold" onClick={() => handleAction('Installation Guide')}>
                  Learn More →
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card glass-card h-100 border-0 p-3 card-hover">
              <div className="card-body">
                <div className="icon-box mb-3 bg-soft-success">🎨</div>
                <h4 className="fw-bold">Vibrant UI</h4>
                <p className="text-muted">Modern CSS techniques like backdrop-filters create a beautiful, layered visual depth in oue experiment.</p>
                <button className="btn btn-link p-0 text-decoration-none fw-bold text-success" onClick={() => handleAction('Gallery')}>
                  Explore →
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card glass-card h-100 border-0 p-3 card-hover">
              <div className="card-body">
                <div className="icon-box mb-3 bg-soft-danger">📚</div>
                <h4 className="fw-bold">Resources</h4>
                <p className="text-muted">Extensive documentation is available for customizing every single part of this library.</p>
                <button className="btn btn-link p-0 text-decoration-none fw-bold text-danger" onClick={() => handleAction('Documentation')}>
                  Read Docs →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="glass-card p-5">
              <h2 className="text-center fw-bold mb-4">Let's Connect</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-bold text-uppercase">Name</label>
                    <input type="text" className="form-control custom-input" placeholder="Enter name" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label small fw-bold text-uppercase">Email</label>
                    <input type="email" className="form-control custom-input" placeholder="name@site.com" required />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-bold text-uppercase">Your Message</label>
                  <textarea className="form-control custom-input" rows="4" placeholder="How can we help?" required></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-dark-custom py-3 fw-bold">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-5 mt-5 glass-footer">
        <p className="text-muted mb-0">© 2024 Design Studio • Powered by React & Bootstrap</p>
      </footer>
    </div>
  )
}

export default App